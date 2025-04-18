import React, { useState } from "react";
import { Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextareaAutosize } from "@mui/material";

function QuestionForm() {
  const [questionType, setQuestionType] = useState("multiple");  // اختياري أو مقالي

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
  };

  return (
    <Box sx={{ marginBottom: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      {/* اختيار نوع السؤال */}
      <FormControl component="fieldset" sx={{ marginBottom: "20px" }}>
        <FormLabel component="legend">نوع السؤال</FormLabel>
        <RadioGroup row value={questionType} onChange={handleQuestionTypeChange}>
          <FormControlLabel value="multiple" control={<Radio />} label="اختياري" />
          <FormControlLabel value="essay" control={<Radio />} label="مقالي" />
        </RadioGroup>
      </FormControl>

      {/* إدخال نص السؤال */}
      <TextField
        label="نص السؤال"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "10px" }}
      />

      {/* إذا كان السؤال اختياريًا */}
      {questionType === "multiple" && (
        <Box sx={{ marginTop: "10px" }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">اختر الإجابة الصحيحة</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="option1" control={<Radio />} label="الإجابة 1" />
              <FormControlLabel value="option2" control={<Radio />} label="الإجابة 2" />
              <FormControlLabel value="option3" control={<Radio />} label="الإجابة 3" />
            </RadioGroup>
          </FormControl>
        </Box>
      )}

      {/* إذا كان السؤال مقاليًا */}
      {questionType === "essay" && (
        <TextareaAutosize
          minRows={4}
          placeholder="اكتب إجابتك هنا..."
          style={{ width: "100%", marginTop: "10px", padding: "10px", borderRadius: "5px" }}
        />
      )}
    </Box>
  );
}

export default QuestionForm;

