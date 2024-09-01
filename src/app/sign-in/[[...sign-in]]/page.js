"use client";
import React from "react";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Switch,
} from "@mui/material";
import { SignIn } from "@clerk/nextjs";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import TemplateFrame from "./TemplateFrame";

export default function SignInPage() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);

  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);
  const toggleColorMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleColorMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="100vw">
        <TemplateFrame
          toggleCustomTheme={toggleCustomTheme}
          showCustomTheme={showCustomTheme}
          mode={mode}
          toggleColorMode={toggleColorMode}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", my: 4 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Sign In
            </Typography>
            <Switch checked={toggleColorMode} onChange={toggleColorMode} />
            <SignIn />
          </Box>
        </TemplateFrame>
      </Container>
    </ThemeProvider>
  );
}
