// Messages.js
import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Badge,
  Tab,
  Tabs,
  InputBase,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MicIcon from "@mui/icons-material/Mic";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Link } from "react-router-dom";
import PostSection from "./PostSection"; // استيراد PostSection

function Messages() {
  const [value, setValue] = React.useState(0);
  const [activeLink, setActiveLink] = useState("messages");
  const [message, setMessage] = useState("");
  const [showStickers, setShowStickers] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const fileInputRef = React.useRef(null);

  // State للـ contacts و friends (ديناميك)
  const [contacts, setContacts] = useState([
    { id: 1, name: "سعيد الوشيخي", online: true },
    { id: 2, name: "عمير ماجد", online: true },
    { id: 3, name: "عمير ماجد", online: true },
    { id: 4, name: "حسين الزهراني", online: true },
    { id: 5, name: "حسين الزهراني", online: true },
    { id: 6, name: "حسين الزهراني", online: true },
    { id: 7, name: "عهد القحطاني", online: true },
    { id: 8, name: "عمير قنديل", online: true },
  ]);

  const [friends, setFriends] = useState([
    { id: 9, name: "أحمد علي", online: false },
    { id: 10, name: "سارة محمد", online: true },
    { id: 11, name: "خالد عبدالله", online: false },
  ]);

  // State للشخص المختار (selectedChat)
  const [selectedChat, setSelectedChat] = useState(null);

  // State للرسايل بتاعة كل شخص
  const [chatMessages, setChatMessages] = useState({
    1: [
      { text: "How are you wassim ?", sent: false, time: "3:23" },
      { text: "Hi !", sent: false, time: "3:23" },
      { text: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and mo", sent: true, time: "3:23" },
    ],
    2: [
      { text: "مرحبًا عمير!", sent: true, time: "4:00" },
      { text: "كيف حالك؟", sent: false, time: "4:01" },
    ],
    9: [
      { text: "أحمد، أنت فين؟", sent: true, time: "5:00" },
      { text: "مش متصل حاليًا", sent: false, time: "5:01" },
    ],
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const newMessage = { text: message, sent: true, time: currentTime };
      setChatMessages({
        ...chatMessages,
        [selectedChat.id]: [...(chatMessages[selectedChat.id] || []), newMessage],
      });
      setMessage("");
    }
  };

  // دالة لتحديد الـ status بناءً على قيمة online
  const getStatus = (online) => {
    return online ? "متصل" : "غير متصل";
  };

  // دالة لفتح الشات لما نضغط على شخص
  const openChat = (person) => {
    setSelectedChat(person);
    setActiveLink("messages"); // لما تفتحي شات، يرجع للرسائل
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      {/* الجزء بتاع اللينكات والخط */}
      <Box sx={{ width: "100vw", m: 0, p: 0 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            px: 6,
            py: 2,
            justifyContent: "flex-end",
            marginTop: "25px",
            marginRight: "320px",
          }}
        >
          <Link
            to="/messages"
            style={{
              textDecoration: "none",
              color: activeLink === "messages" ? "#E3E3E3" : "inherit",
              fontWeight: "bold",
            }}
            onClick={() => setActiveLink("messages")}
          >
            الرسائل
          </Link>
          <Link
            to="/posts"
            style={{
              textDecoration: "none",
              color: activeLink === "posts" ? "#E3E3E3" : "inherit",
              fontWeight: "bold",
            }}
            onClick={() => setActiveLink("posts")}
          >
            المنتديات (المنشورات)
          </Link>
        </Box>

        <Box
          sx={{
            width: "calc(100% - 120px - 300px)",
            marginLeft: "120px",
            marginRight: "300px",
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            opacity: "0.5",
            position: "relative",
            zIndex: 1,
          }}
        />
      </Box>

      {/* الـ Main Area والـ Sidebar */}
      <Box sx={{ display: "flex", flex: 1, flexDirection: "row-reverse" }}>
        {/* Contacts Sidebar (هيفضل موجود دايمًا) */}
        <Box
          sx={{
            width: 400,
            marginRight: "300px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
          }}
        >
          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              sx={{
                "& .MuiTab-root": {
                  fontSize: "0.9rem",
                  fontWeight: "normal",
                  color: "#666",
                  textTransform: "none",
                  minHeight: "48px",
                },
                "& .Mui-selected": {
                  color: "#000 !important",
                },
              }}
            >
              <Tab label="النشط" />
              <Tab label="الأصدقاء" icon={<PersonOutlineIcon />} iconPosition="start" />
            </Tabs>
          </Box>

          {/* Contacts/Friends List */}
          <Box sx={{ flex: 1, overflowY: "auto" }}>
            {value === 0 &&
              contacts.map((contact, index) => (
                <Box
                  key={contact.id}
                  onClick={() => openChat(contact)}
                  sx={{
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                    cursor: "pointer",
                    backgroundColor: selectedChat?.id === contact.id ? "#e0e0e0" : "transparent",
                  }}
                >
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: contact.online ? "#44b700" : "#ccc",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        border: "2px solid #fff",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        fontSize: "1rem",
                      }}
                      src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    />
                  </Badge>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#050505",
                      }}
                    >
                      {contact.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.75rem",
                        color: "#65676B",
                      }}
                    >
                      {getStatus(contact.online)}
                    </Typography>
                  </Box>
                </Box>
              ))}

            {value === 1 &&
              friends.map((friend, index) => (
                <Box
                  key={friend.id}
                  onClick={() => openChat(friend)}
                  sx={{
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                    cursor: "pointer",
                    backgroundColor: selectedChat?.id === friend.id ? "#e0e0e0" : "transparent",
                  }}
                >
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: friend.online ? "#44b700" : "#ccc",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        border: "2px solid #fff",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 36,
                        height: 36,
                        fontSize: "1rem",
                      }}
                      src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    />
                  </Badge>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#050505",
                      }}
                    >
                      {friend.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.75rem",
                        color: "#65676B",
                      }}
                    >
                      {getStatus(friend.online)}
                    </Typography>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>

        {/* Main Area (هيتغير بناءً على activeLink) */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            position: "relative",
            maxWidth: "calc(100vw - 400px - 300px - 120px)",
            marginRight: "120px",
            overflowX: "hidden",
          }}
        >
          {activeLink === "messages" ? (
            // عرض الشات لما تكوني على لينك "الرسائل"
            <>
              {/* Header */}
              <Box
                sx={{
                  p: 2,
                  borderBottom: "1px solid #e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  overflowX: "hidden",
                }}
              >
                {selectedChat ? (
                  <>
                    <Avatar
                      sx={{ width: 70, height: 70 }}
                      src={`https://i.pravatar.cc/150?img=${selectedChat.id}`}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 500 }}>{selectedChat.name}</Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#65676B", fontSize: "0.75rem" }}
                      >
                        {getStatus(selectedChat.online)}
                      </Typography>
                    </Box>
                  </>
                ) : (
                  <Typography sx={{ color: "#65676B" }}>
                    اختر شخصًا لفتح الشات
                  </Typography>
                )}
              </Box>

              {/* Messages Area */}
              <Box
                sx={{
                  flex: 1,
                  p: 3,
                  overflowY: "auto",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  overflowX: "hidden",
                }}
              >
                {selectedChat && chatMessages[selectedChat.id] ? (
                  <>
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "#65676B",
                        fontSize: "0.75rem",
                        mb: 2,
                      }}
                    >
                      2:56 اليوم
                    </Typography>
                    {chatMessages[selectedChat.id].map((msg, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: msg.sent ? "flex-start" : "flex-end",
                          alignItems: "flex-end",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: msg.type ? "transparent" : msg.sent ? "#E4E6EB" : "#0084FF",
                            color: msg.sent ? "#050505" : "#fff",
                            borderRadius: "18px",
                            px: msg.type ? 0 : 3,
                            py: msg.type ? 0 : 1.5,
                            maxWidth: "60%",
                            wordBreak: "break-word",
                          }}
                        >
                          {msg.type === "image" ? (
                            <img src={msg.text} alt="sent image" style={{ maxWidth: "100%", borderRadius: "8px" }} />
                          ) : msg.type === "video" ? (
                            <video controls src={msg.text} style={{ maxWidth: "100%", borderRadius: "8px" }} />
                          ) : msg.type === "audio" ? (
                            <audio controls src={msg.text} />
                          ) : (
                            <Typography sx={{ fontSize: "0.9rem" }}>{msg.text}</Typography>
                          )}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            color: "#65676B",
                            minWidth: "35px",
                          }}
                        >
                          {msg.time}
                        </Typography>
                      </Box>
                    ))}
                  </>
                ) : (
                  <Typography sx={{ textAlign: "center", color: "#65676B" }}>
                    لا توجد رسائل بعد
                  </Typography>
                )}
              </Box>

              {/* Input Area */}
              {selectedChat && (
                <Box
                  sx={{
                    p: 2,
                    borderTop: "1px solid #e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "#fff",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={async () => {
                      if (!isRecording) {
                        try {
                          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                          const recorder = new MediaRecorder(stream);
                          setMediaRecorder(recorder);
                          const chunks = [];
                          recorder.ondataavailable = (e) => chunks.push(e.data);
                          recorder.onstop = () => {
                            const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
                            const url = URL.createObjectURL(blob);
                            const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                            setChatMessages({
                              ...chatMessages,
                              [selectedChat.id]: [
                                ...(chatMessages[selectedChat.id] || []),
                                { text: url, sent: true, time: currentTime, type: "audio" },
                              ],
                            });
                          };
                          recorder.start();
                          setIsRecording(true);
                        } catch (err) {
                          console.error("Error accessing microphone:", err);
                        }
                      } else {
                        mediaRecorder.stop();
                        setIsRecording(false);
                      }
                    }}
                  >
                    <MicIcon sx={{ color: isRecording ? "#FF0000" : "#65676B" }} />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <ImageIcon sx={{ color: "#65676B" }} />
                  </IconButton>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                        setChatMessages({
                          ...chatMessages,
                          [selectedChat.id]: [
                            ...(chatMessages[selectedChat.id] || []),
                            { text: url, sent: true, time: currentTime, type: file.type.startsWith("image") ? "image" : "video" },
                          ],
                        });
                      }
                    }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => {
                      console.log("Toggling stickers, current state:", showStickers);
                      setShowStickers(!showStickers);
                    }}
                  >
                    <InsertEmoticonIcon sx={{ color: "#65676B" }} />
                  </IconButton>
                  <InputBase
                    placeholder="اكتب رسالة"
                    sx={{
                      flex: 1,
                      backgroundColor: "#F0F2F5",
                      borderRadius: "20px",
                      px: 2,
                      py: 1,
                      "& input": {
                        fontSize: "0.9rem",
                      },
                    }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage();
                      }
                    }}
                  />
                  {showStickers && (
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "70px",
                        left: "0",
                        right: "0",
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        p: 2,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        zIndex: 100000,
                        maxWidth: "300px",
                        maxHeight: "150px",
                        overflowY: "auto",
                        margin: "0 auto",
                      }}
                      onClick={() => console.log("Sticker menu rendered with position:", { bottom: "70px", left: "0", right: "0" })}
                    >
                      {["😊", "😂", "😍", "👍", "🎉"].map((sticker, index) => (
                        <Typography
                          key={index}
                          sx={{ fontSize: "1.5rem", cursor: "pointer", margin: "4px" }}
                          onClick={() => {
                            const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                            console.log("Adding sticker:", sticker);
                            setChatMessages({
                              ...chatMessages,
                              [selectedChat.id]: [
                                ...(chatMessages[selectedChat.id] || []),
                                { text: sticker, sent: true, time: currentTime },
                              ],
                            });
                            setShowStickers(false);
                          }}
                        >
                          {sticker}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              )}
            </>
          ) : (
            // عرض المنشورات لما تكوني على لينك "المنتديات (المنشورات)"
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              }}
            >
              <PostSection />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Messages; 