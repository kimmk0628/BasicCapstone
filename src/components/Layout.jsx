// src/components/Layout.jsx
import { AppBar, Toolbar, Typography, Button, CssBaseline, Box, IconButton } from '@mui/material';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

// 로고에 hover 효과
const LogoBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

// 톱니바퀴 버튼 효과
const GearButton = styled(IconButton)({
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    opacity: 0.8,
  },
  '&:active': {
    transform: 'scale(1.1) rotate(20deg)',
  },
});

function Layout() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)'); // 반응형 체크

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />

      {/* 상단바 */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* 로고 */}
          <LogoBox onClick={() => navigate('/')}>
            <img src="/logo.png" alt="logo" style={{ width: '30px', marginRight: '10px' }} />
            <Typography variant="h6" noWrap sx={{ fontWeight: 'bold' }}>
              MedicPT
            </Typography>
          </LogoBox>

          {/* 네비게이션 */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!isMobile && (
              <>
                <Button color="inherit" component={Link} to="/chatbot">챗봇</Button>
                <Button color="inherit" component={Link} to="/quiz">퀴즈</Button>
                <Button color="inherit" component={Link} to="/search">약물 검색</Button>
              </>
            )}
            <GearButton onClick={() => navigate('/setting')}>
              <img src="/gear.png" alt="setting" style={{ width: '25px', height: '25px' }} />
            </GearButton>
          </Box>

        </Toolbar>
      </AppBar>

      {/* 페이지 내용 */}
      <Box component="main" sx={{ flex: 1, p: 3 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Box sx={{ textAlign: 'center', p: 2, mt: 3, backgroundColor: '#f5f5f5' }}>
        <Typography variant="caption" color="text.secondary">© 2025 MedicPT Team. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Layout;
