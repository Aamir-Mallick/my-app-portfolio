import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { useStyles } from "./useStyles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

type shiftProps = {
  shift: boolean;
};

export const Contact = (props: shiftProps) => {
  const classes = useStyles();
  const { shift } = props;

  return (
    <Container id="contact" maxWidth="md" className={classes.contentContainer}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: shift ? 0 : -300, opacity: shift ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{ color: "#ccd6f6" }}
      >
        <Typography align="center" variant="h2">
          GET IN TOUCH
        </Typography>
        <Box
          style={{
            color: "#8892b0",
            margin: "2rem auto",
            fontSize: "20px",
            maxWidth: "600px",
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
            }}
            align="center"
            variant="body2"
          >
            I’m always open for new new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </Typography>
        </Box>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Button
            href="https://mail.google.com/mail/u/0/?tab=km#inbox/FMfcgzGljlqmgZZflcqLWvKKjZCKkvSK?compose=GTvVlcSBmmDLtkjmpPnTcwZxvDZHcLvFnWKfKXHpNDFjHVLGcBXMbBsPCvbVSrNHvVTrkZpLbbWpq"
            size="large"
            variant="outlined"
            color="secondary"
          >
            Say Hello
          </Button>
        </Box>
        <Box className={classes.linkContainerMobile}>
          <Box className={classes.iconeHeightMobile}>
            <Link>
              <GitHubIcon style={{ color: "#ccd6f6", cursor: "pointer" }} />
            </Link>
          </Box>
          <Box className={classes.iconeHeightMobile}>
            <Link>
              <LinkedInIcon style={{ color: "#ccd6f6", cursor: "pointer" }} />
            </Link>
          </Box>
          <Box className={classes.iconeHeightMobile}>
            <TwitterIcon style={{ color: "#ccd6f6", cursor: "pointer" }} />
          </Box>
          <Box className={classes.iconeHeightMobile}>
            <InstagramIcon style={{ color: "#ccd6f6", cursor: "pointer" }} />
          </Box>
        </Box>
        <Box className={classes.emailContainerMobile}>
          <Typography style={{ fontSize: "20px" }} variant="body2">
            aamirmallick71@gmail.com
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};
