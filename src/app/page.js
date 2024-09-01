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
} from "@mui/material";
import { SignIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="lg">
        <Head>
          <title>CAMPUS CONNECT</title>
          <meta name="description" content="Create flashcards from your text" />
        </Head>

        <AppBar position="static" sx={{ backgroundColor: "#0D47A1" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Campus Connect
            </Typography>
            <SignedOut>
              <Button color="inherit" href="/sign-in" sx={{ ml: 2 }}>
                Login
              </Button>
              <Button color="inherit" href="/sign-up" sx={{ ml: 2 }}>
                Sign Up
              </Button>
              <Button color="inherit" href="/generate" sx={{ ml: 2 }}>
                Generate
              </Button>
            </SignedOut>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            textAlign: "center",
            my: 8,
            px: 3,
            py: 8,
            backgroundColor: "#E3F2FD",
            borderRadius: 2,
            boxShadow: 3,
          }}
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
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2, backgroundColor: "#1976D2" }}
              href="/sign-up"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ borderColor: "#1976D2", color: "#1976D2" }}
            >
              Learn More
            </Button>
          </Box>
        </Box>

        <Box sx={{ my: 8 }}>
          <Typography
            variant="h3"
            gutterBottom
            textAlign={"center"}
            sx={{ color: "#white" }}
          >
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  Easy Text Input
                </Typography>
                <Typography sx={{ color: "#white" }}>
                  Simply input your text and let our software do the rest.
                  Creating flashcards has never been easier.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  Smart Flashcards
                </Typography>
                <Typography sx={{ color: "#white" }}>
                  Our AI intelligently breaks down your text into concise
                  flashcards, perfect for studying.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: "center", px: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: "#white" }}>
                  Accessible Anywhere
                </Typography>
                <Typography sx={{ color: "#white" }}>
                  Access your flashcards from any device, at any time. Study on
                  the go with ease.
                </Typography>
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
          <Typography variant="h4" gutterBottom>
            About us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  border: "1px solid #E3F2FD", // Light blue border
                  borderRadius: 2,
                  backgroundColor: "#1976D2", // Medium blue background
                  color: "white",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Basic
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $5 / month
                </Typography>
                <Typography>
                  Access to basic flashcard features and limited storage.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, color: "white", backgroundColor: "#64B5F6" }} // Light blue button
                >
                  Choose Basic
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  border: "1px solid #E3F2FD", // Light blue border
                  borderRadius: 2,
                  backgroundColor: "#2196F3", // Medium blue background
                  color: "white",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Pro
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $10 / month
                </Typography>
                <Typography>
                  Unlimited flashcards and storage, with priority support.
                </Typography>
                <Button
                  //onClick={handleSubmit}
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 2, color: "white", backgroundColor: "#64B5F6" }} // Light blue button
                >
                  Choose Pro
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
