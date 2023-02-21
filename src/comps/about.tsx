
import { Container, Grid, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default (props: {}) => {
  const theme = useTheme();

  return (
    <Container style={{
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    }}>
      <Grid container spacing={8}>
        <Grid item xs={12} md={4}>
          <StaticImage
            src="../images/about.jpg"
            alt="About me"
            placeholder="blurred"
            layout="fullWidth"
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h2" pl={4} color="secondary" gutterBottom>About me</Typography>

          <Grid container alignItems="baseline" pl={4} pb={4}>
            <Grid item xs={4}>
              <Typography variant="h6">Name:</Typography>
            </Grid>
            <Grid item xs={8}><Typography variant="body1">Duc Le</Typography></Grid>
            <Grid item xs={4}>
              <Typography variant="h6">D.O.B:</Typography>
            </Grid>
            <Grid item xs={8}>May 5, 2002</Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Email:</Typography>
            </Grid>
            <Grid item xs={8}>duc20022009@gmail.com</Grid>
          </Grid>

          <Typography variant="body1">
            Hi there! It's Duc. Currently, I am living in Mississauga, Ontario and studying Computer Science at University of Toronto. My interest are
            coding, playing tennis, and playing video games (casually). Besides, I also love cats and dogs, but sadly I am not allowed to have pets in
            the resident :(
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};