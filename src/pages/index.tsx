import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Typography from "@mui/material/Typography";
import { SEO } from "../comps/seo"
import Navbar from "../comps/navbar"
import Footer from "../comps/footer"
import { Container, Grid, useTheme } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Hobbies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage

const Head: HeadFC = () => (
  <SEO />
);

const Hero: React.FunctionComponent = (props: {}) => {
  const theme = useTheme();

  return (
    <Grid container direction="column" justifyContent="center" component={Container} style={{
      maxHeight: "70vh",
      minHeight: "520px",
    }}>
      <Grid item>
        <Typography variant="h2">Hello </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom>I'm a ...</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Let's build something together!</Typography>
      </Grid>
    </Grid>
  );
};

const About: React.FunctionComponent = (props: {}) => {
  const theme = useTheme();

  return (
    <Container>
      <Typography variant="h3" align="center">About</Typography>

    </Container>
  )
};

const Hobbies: React.FunctionComponent = (props: {}) => {
  const theme = useTheme();

  return (
    <Container>
      Hobbies section
    </Container>
  )
};

const Projects: React.FunctionComponent = (props: {}) => {
  const theme = useTheme();

  return (
    <Container>
      Projects section
    </Container>
  )
};

const Contact: React.FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Container>
      Contact section
    </Container>
  );
};