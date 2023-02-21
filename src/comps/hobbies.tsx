import React from "react";
import { Container, Grid, Typography, useTheme } from "@mui/material";

interface HobbyProp {
  title: string;
  description: string;
}

const hobbies: HobbyProp[] = [
  {
    title: "Code with frens",
    description: "I'm lucky to have some friends that has the same career path as I have, so we sometimes work on our own projects, mostly coding-related, together."
  },
  {
    title: "Gym",
    description: "I try to go to the gym 2-3 times a week because it makes me feel less stress!"
  },
  {
    title: "Tennis",
    description: "I used to play tennis a lot, but got some injuries. I can still play now but not as good as I was."
  },
  {
    title: "Play guitar/piano",
    description: "I enjoy playing instrument, sometimes got frustrated when practicing, but mostly enjoy."
  },
  {
    title: "Video games",
    description: "Who doesn't!"
  },
  {
    title: "Animes",
    description: "Watching One Piece (very patiently), and also looking forward to AOT final season (part 3 and 3.5 LOL)."
  },
]

export default () => {
  const theme = useTheme();

  return (
    <Container style={{
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    }}>
      <Typography variant="h2" align="center" color="secondary" pb={6}>Hobbies</Typography>
      <Grid container justifyContent="space-around" spacing={8}>
        {
          hobbies.map(({ title, description }) => (
            <HobbyItem title={title} description={description} />
          ))
        }
      </Grid>
    </Container>
  )
};

const HobbyItem = ({ title, description }: HobbyProp) => {
  return (
    <Grid item xs={6} md={4}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>{title}</Typography>
        <Typography variant="body1" align="center">{description}</Typography>
      </Container>
    </Grid>
  )
}