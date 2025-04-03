// src/pages/Home.jsx
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>

      {/* Hero Section */}
      <Paper elevation={4} sx={{ p: 5, textAlign: 'center', borderRadius: 2 }}>
        <Typography variant="h3" gutterBottom fontWeight="bold">MedicPT</Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          청소년을 위한 약물 정보 학습 및 추천 챗봇
        </Typography>
        <Typography variant="body1" gutterBottom>
          챗봇, 퀴즈, 약물 검색을 통해 약물 지식을 쉽고 정확하게 학습할 수 있습니다.
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 2 }} onClick={() => navigate('/chatbot')}>
          챗봇 바로 시작하기
        </Button>
      </Paper>

      {/* 기능 소개 섹션 */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, height: '100%', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>챗봇 상담</Typography>
            <Typography variant="body2">증상 기반으로 일반의약품 정보를 추천받을 수 있습니다.</Typography>
            <Button variant="outlined" fullWidth sx={{ mt: 1 }} onClick={() => navigate('/chatbot')}>챗봇 시작</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, height: '100%', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>약물 퀴즈</Typography>
            <Typography variant="body2">퀴즈로 재미있게 약물 오남용 예방 교육을 받을 수 있습니다.</Typography>
            <Button variant="outlined" fullWidth sx={{ mt: 1 }} onClick={() => navigate('/quiz')}>퀴즈 풀기</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, height: '100%', textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>약물 정보 검색</Typography>
            <Typography variant="body2">원하는 일반의약품 정보를 빠르게 찾아볼 수 있습니다.</Typography>
            <Button variant="outlined" fullWidth sx={{ mt: 1 }} onClick={() => navigate('/search')}>검색하기</Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', color: 'gray', mt: 5 }}>
        <Typography variant="caption">© 2025 MedicPT Team. All rights reserved.</Typography>
      </Box>
    </Container>
  );
}

export default Home;
