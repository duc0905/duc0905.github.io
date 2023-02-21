import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Container, Grid, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { SEO } from "../comps/seo"
import Navbar from "../comps/navbar"
import Footer from "../comps/footer"
import About from "../comps/about";
import Hobbies from "../comps/hobbies";
import Projects from "../comps/projects";
import Contact from "../comps/contact";

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
    <Grid pt={8} container direction="column" justifyContent="center" component={Container} style={{
      maxHeight: "70vh",
      minHeight: "400px",
    }}>
      <Grid item>
        <Typography style={{ fontSize: "32px" }}>Hi</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom style={{ fontSize: "48px" }}>I'm a <Typography variant="h3" component="span" style={{
          color: theme.palette.success.main, fontSize: "48px"
        }}>learner</Typography> / <Typography variant="h3" color="primary" style={{ fontSize: "48px" }} component="span">developer</Typography></Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Let's build something together!</Typography>
      </Grid>
    </Grid>
  );
};
