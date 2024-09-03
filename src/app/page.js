"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Stack,
  TextField,
  Link,
} from "@mui/material";
import { SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import AppAppBar from "./component/AppAppBar";
import InputLabel from "@mui/material/InputLabel";
import FAQ from "./component/FAQ";
import AboutUs from "./component/AboutUs";

import { visuallyHidden } from "@mui/utils";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container
        sx={{
          alignItems: "center",
        }}
        maxWidth="lg"
      >
        <Head>
          <title>CAMPUS CONNECT</title>
          <meta name="description" content="Create flashcards from your text" />
        </Head>
        <AppBar position="static" sx={{ backgroundColor: "#0D47A1" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Campus Connect
            </Typography>

            <Button color="inherit" href="/sign-in" sx={{ ml: 2 }}>
              Login
            </Button>
            <Button color="inherit" href="/sign-up" sx={{ ml: 2 }}>
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
        <AppAppBar></AppAppBar>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ color: "#0D47A1", padding: "8px", borderRadius: "4px" }}
            >
              Welcome to Campus Connect
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ color: "#0D47A1" }}
            >
              The easiest way to connect with your school.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              useFlexGap
              sx={{
                alignItems: "center",
                pt: 2,
                width: { xs: "100%", sm: "350px" },
              }}
            >
              <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                Email
              </InputLabel>
              <TextField
                id="email-hero"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your email address"
                fullWidth
                slotProps={{
                  htmlInput: {
                    autoComplete: "off",
                    "aria-label": "Enter your email address",
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ minWidth: "fit-content" }}
                href="/sign-up"
              >
                Start now
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ minWidth: "fit-content" }}
                href="/sign-in"
              >
                Sign In
              </Button>
            </Stack>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              By clicking &quot;Start now&quot; you agree to our&nbsp;
              <Link href="#" color="primary">
                Terms & Conditions
              </Link>
            </Typography>
          </Stack>
        </Container>
        <Box sx={{ my: 8 }}>
          <Typography
            variant="h3"
            gutterBottom
            textAlign={"center"}
            sx={{ color: "#white" }}
          >
            [placeholder]
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  [placeholder]
                </Typography>
                <Typography sx={{ color: "#white" }}>[placeholder]</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  [placeholder]
                </Typography>
                <Typography sx={{ color: "#white" }}>[placeholder]</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  [placeholder]
                </Typography>
                <Typography sx={{ color: "#white" }}>[placeholder]</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Pricing section with a dark blue background and light blue highlights */}
        <Box
          sx={{
            my: 8,
            textAlign: "center",
            py: 6,
            px: 4,
            backgroundColor: "#0D47A1", // Dark blue background
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <AboutUs></AboutUs>
        </Box>{" "}
        <FAQ></FAQ>
      </Container>
    </main>
  );
}
