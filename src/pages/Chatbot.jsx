// src/pages/Chatbot.jsx
import {
  Container,
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "안녕하세요! MedicPT 챗봇입니다. 무엇을 도와드릴까요?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `"${input}"에 대한 정보는 준비중입니다.` },
      ]);
    }, 1000);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        MedicPT 챗봇
      </Typography>

      {/* 채팅창 */}
      <Paper
        elevation={3}
        sx={{
          height: "400px",
          overflowY: "auto",
          p: 2,
          mb: 2,
          background: "#f9f9f9",
          borderRadius: 2,
        }}
      >
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              alignItems: "center",
              mb: 1,
            }}
          >
            {/* 챗봇 */}
            {msg.sender === "bot" && (
              <>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    mr: 1,
                    bgcolor: "#9e9e9e",
                    fontSize: "0.8rem",
                  }}
                >
                  Medic
                </Avatar>
                <Box
                  sx={{
                    position: "relative",
                    bgcolor: "#eeeeee",
                    color: "black",
                    borderRadius: 2,
                    p: 1.5,
                    boxShadow: 1,
                    maxWidth: "70%",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      left: "-8px",
                      borderWidth: "8px",
                      borderStyle: "solid",
                      borderColor:
                        "transparent #eeeeee transparent transparent",
                    },
                  }}
                >
                  {msg.text}
                </Box>
              </>
            )}

            {/* 사용자 */}
            {msg.sender === "user" && (
              <>
                <Box
                  sx={{
                    position: "relative",
                    bgcolor: "#1976d2",
                    color: "white",
                    borderRadius: 2,
                    p: 1.5,
                    boxShadow: 1,
                    maxWidth: "70%",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: "10px",
                      right: "-8px",
                      borderWidth: "8px",
                      borderStyle: "solid",
                      borderColor:
                        "transparent transparent transparent #1976d2",
                    },
                  }}
                >
                  {msg.text}
                </Box>
                <Avatar
                  sx={{ width: 30, height: 30, ml: 1, bgcolor: "#1976d2" }}
                >
                  나
                </Avatar>
              </>
            )}
          </Box>
        ))}

        {/* 로딩 중 표시 */}
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                mr: 1,
                bgcolor: "#9e9e9e",
                fontSize: "0.8rem",
              }}
            >
              Medic
            </Avatar>
            <Box
              sx={{
                bgcolor: "#eeeeee",
                color: "black",
                borderRadius: 2,
                p: 1.5,
                fontStyle: "italic",
                opacity: 0.7,
                boxShadow: 1,
                maxWidth: "70%",
              }}
            >
              typing...
            </Box>
          </Box>
        )}

        <div ref={chatEndRef} />
      </Paper>

      {/* 입력창 */}
      <Box sx={{ display: "flex" }}>
        <TextField
          fullWidth
          placeholder="메시지를 입력하세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button variant="contained" sx={{ ml: 1 }} onClick={handleSend}>
          전송
        </Button>
      </Box>
    </Container>
  );
}

export default Chatbot;
