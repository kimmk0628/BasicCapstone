// src/pages/Quiz.jsx
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "감기약을 먹을 때 주의해야 할 점은?",
      options: [
        "공복 복용 가능",
        "카페인 음료와 함께 복용",
        "졸음을 유발할 수 있음",
        "술과 함께 복용하면 효과가 증가",
      ],
      answer: 2,
    },
    {
      question: "진통제를 장기간 복용할 경우 발생할 수 있는 문제는?",
      options: ["약효가 강해짐", "간 손상 가능성", "면역력 상승", "졸림"],
      answer: 1,
    },
  ];

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[step].answer) {
      setScore(score + 1);
    }
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        약물 안전 퀴즈
      </Typography>
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        {!showResult ? (
          <>
            <Typography variant="subtitle1" gutterBottom>
              {questions[step].question}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {questions[step].options.map((opt, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  onClick={() => handleAnswer(i)}
                >
                  {opt}
                </Button>
              ))}
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h6">퀴즈 완료!</Typography>
            <Typography>
              당신의 점수: {score} / {questions.length}
            </Typography>
            {/* ⭐⭐⭐ 여기에 추가 */}
            <Button
              variant="contained"
              sx={{ mt: 2 }}
              onClick={() => {
                setStep(0);
                setScore(0);
                setShowResult(false);
              }}
            >
              다시 하기
            </Button>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default Quiz;
