import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import "@fontsource/tajawal";
import { useNavigate } from "react-router-dom";

function AddTestPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      type: "multiple",
      options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
      essayAnswer: "",
    },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        type: "multiple",
        options: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
        essayAnswer: "",
      },
    ]);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const updateQuestionText = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].questionText = value;
    setQuestions(newQuestions);
  };

  const updateQuestionType = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].type = value;
    setQuestions(newQuestions);
  };

  const updateOptionText = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex].text = value;
    setQuestions(newQuestions);
  };

  const updateCorrectOption = (qIndex, oIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options = newQuestions[qIndex].options.map((opt, idx) => ({
      ...opt,
      isCorrect: idx === oIndex,
    }));
    setQuestions(newQuestions);
  };

  const updateEssayAnswer = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].essayAnswer = value;
    setQuestions(newQuestions);
  };

  const addOption = (qIndex) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options.push({ text: "", isCorrect: false });
    setQuestions(newQuestions);
  };

  return (
    <Box
      sx={{
        padding: { xs: "10px", sm: "20px" },
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#FFFFFF", // إزالة الخلفية الرمادية
      }}
    >
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          minWidth: "40px",
          padding: "5px",
        }}
        onClick={() => navigate("/test")}
      >
        <CloseIcon />
      </Button>

      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
        إضافة اختبار جديد
      </Typography>

      {/* زر إضافة سؤال في الأعلى */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={addQuestion}
        sx={{
          backgroundColor: "#E8F0FE",
          color: "#0023E8",
          border: "1px solid #0023E8",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          mb: 3,
          width: "200px",
          margin: "0 auto",
          display: "block",
          "&:hover": {
            backgroundColor: "#D0E2FF",
          },
        }}
      >
        إضافة سؤال
      </Button>

      {questions.map((question, qIndex) => (
        <Box
          key={qIndex}
          sx={{
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            p: { xs: 2, sm: 3 },
            mb: { xs: 2, sm: 3 },
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#FFFFFF", // إزالة الخلفية الرمادية من المربعات
          }}
        >
          <TextField
            fullWidth
            label={`السؤال ${qIndex + 1}`}
            value={question.questionText}
            onChange={(e) => updateQuestionText(qIndex, e.target.value)}
            sx={{ mb: { xs: 1, sm: 2 } }}
          />

          <FormControl component="fieldset" sx={{ mb: { xs: 1, sm: 2 } }}>
            <FormLabel component="legend">نوع السؤال</FormLabel>
            <RadioGroup
              row
              value={question.type}
              onChange={(e) => updateQuestionType(qIndex, e.target.value)}
            >
              <FormControlLabel value="multiple" control={<Radio />} label="اختياري" />
              <FormControlLabel value="essay" control={<Radio />} label="مقالي" />
            </RadioGroup>
          </FormControl>

          {question.type === "multiple" && (
            <Box sx={{ ml: { xs: 1, sm: 2 } }}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ display: "inline-block" }}>
                  الخيارات
                </FormLabel>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => addOption(qIndex)}
                  sx={{ marginLeft: { xs: "5px", sm: "10px" }, verticalAlign: "middle", mb: 1 }}
                >
                  إضافة خيار
                </Button>

                <RadioGroup>
                  {question.options.map((option, oIndex) => (
                    <Box key={oIndex} sx={{ display: "flex", alignItems: "center", mb: { xs: 0.5, sm: 1 } }}>
                      <FormControlLabel
                        control={
                          <Radio
                            checked={option.isCorrect}
                            onChange={() => updateCorrectOption(qIndex, oIndex)}
                          />
                        }
                        label=""
                      />
                      <TextField
                        fullWidth
                        label={`الخيار ${oIndex + 1}`}
                        value={option.text}
                        onChange={(e) => updateOptionText(qIndex, oIndex, e.target.value)}
                        sx={{ mr: 1 }}
                      />
                    </Box>
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          )}

          {question.type === "essay" && (
            <TextField
              fullWidth
              multiline
              rows={4}
              label="الإجابة المقالية (اختياري)"
              value={question.essayAnswer}
              onChange={(e) => updateEssayAnswer(qIndex, e.target.value)}
              sx={{ mb: { xs: 1, sm: 2 } }}
            />
          )}

          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => removeQuestion(qIndex)}
            sx={{ mt: { xs: 1, sm: 2 } }}
          >
            حذف السؤال
          </Button>
        </Box>
      ))}

      {/* زر إضافة سؤال في الأسفل */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={addQuestion}
        sx={{
          backgroundColor: "#E8F0FE",
          color: "#0023E8",
          border: "1px solid #0023E8",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          mb: 3,
          width: "200px",
          margin: "0 auto",
          display: "block",
          "&:hover": {
            backgroundColor: "#D0E2FF",
          },
        }}
      >
        إضافة سؤال
      </Button>

      <Button
        variant="contained"
        sx={{
          background: "#0023E8",
          color: "white",
          display: "block",
          mx: "auto",
          mb: 2,
        }}
        onClick={() => console.log("الاختبار:", questions)}
      >
        حفظ الاختبار
      </Button>
    </Box>
  );
}

export default AddTestPage;
