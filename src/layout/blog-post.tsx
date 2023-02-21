import * as React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Navbar from "../comps/navbar";

const Contain = styled('div')(({theme}) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}));

const Content = styled(Container)({
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  "& p": {
    textAlign: "justify",
    fontSize: 18
  },
  "& *": {
    fontFamily: "Tahoma",
  }
});

const Title = styled(Typography)(({ theme}) => ({
  fontFamily: "Times New Roman",
  fontSize:64 
}));

const Toc = styled('div')(({ theme }) => ({
  position: "sticky",
  top: theme.spacing(8)
}))

export default (props: PropsType) => {
  return (
    <>
    <Navbar />
    <Contain>
      <Grid container component={Container} maxWidth="lg">
        <Grid item xs={12} md={9}>
          <Title variant="h1" color="secondary" align="center" gutterBottom>{props.mdRemark.frontmatter.title}</Title>
          <Content maxWidth="md" dangerouslySetInnerHTML={{ __html: props.mdRemark?.html || ""}}></Content>
        </Grid>
        <Grid item xs={12} md={3}>
          <Toc>
          <Typography variant="h4" align="center" mt={10} gutterBottom>Table of contents</Typography>
          <div dangerouslySetInnerHTML={{ __html: props.mdRemark?.tableOfContents || ""}}></div>
          </Toc>
        </Grid>

      </Grid>
    </Contain>
    </>
  )
}

interface PropsType extends React.PropsWithChildren<{}> {
  mdRemark: Queries.BlogPageQuery.markdownRemark;
}