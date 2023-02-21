import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Typography variant="caption">Copyright {new Date().getFullYear()} | Made with coffee and tea!</Typography>
    </Container>
  );
}

export default Footer;