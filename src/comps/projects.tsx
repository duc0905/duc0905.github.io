import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export default () => {
  return (
    <Container>
      <Typography variant="h2" align="center" color="secondary">Projects</Typography>

      <Grid container spacing={4} justifyContent="space-around" pt={2} pb={8}>
        <Grid item xs={6} md={4}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>BoredEngine</Typography>
          <Typography variant="body1">This is a game engine I developed to furtherance my knowledge in software engineering. This was, and will still be the most valuable project that I could ever had in terms of the experience I gained.</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h4" color="secondary" align="center" gutterBottom>This website!</Typography>
          <Typography variant="body1">Needless to say, if I used a pre-built theme for my website, it would not look as ugly as this. I am using Gatsby with Typescript (because I despise weakly-typed languages), MUI for theming. Furthermore, I am developing a blog in this website, which uses the power of gatsby and Notion as the CMS.</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h4" align="center" gutterBottom>Seri</Typography>
          <Typography variant="body1">A startup project that I and 2 of my friends are developing. Although this startup idea is not about tech, but still, it needs tech to be able to operate!</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="h4" align="center" gutterBottom>Other projects...</Typography>
          <Typography variant="body2">I used to work on some small side projects to study about various fields of programming. Some of which are mobile apps using React Native, front-end webapp with Firebase as backend, electric circuits with Arduino, real-time communication using sockets or webrtc,...</Typography>
        </Grid>
      </Grid>
    </Container>
  )
};