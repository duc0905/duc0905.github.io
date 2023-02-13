import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material'

const pages = ['About', 'Hobbies', 'Projects', 'Contact'];

export default () => {
  const theme = useTheme();
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              marginRight: '40px',
              color: theme.palette.primary.main
            }}
          >
            Duc Le
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map((page) => (
              <MenuItem key={page} >
                <Typography textAlign="center" color={theme.palette.secondary.light}>{page}</Typography>
              </MenuItem>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}