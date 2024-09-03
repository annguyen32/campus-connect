"use client";
import React from "react";
import PrimarySearchAppBar from "./component/Navbar";
import ClippedDrawer from "./component/Sidebar";
import Stack from "@mui/material/Stack";
import {
  Container,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Head,
  Grid,
} from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttons = [
  <Button key="FRIENDS">FRIENDS</Button>,
  <Button key="CAMPUS NEWS">CAMPUS NEWS</Button>,
  <Button key="three">Three</Button>,
];
function Dashboard() {
  return (
    <main>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <ClippedDrawer></ClippedDrawer>
      <Container maxWidth="sm">
        <Box sx={{ my: 8 }}>
          <Typography
            variant="h3"
            gutterBottom
            textAlign={"center"}
            sx={{ color: "#white" }}
          >
            Feed
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="text"
          >
            {buttons}
          </ButtonGroup>
        </Box>
      </Container>
    </main>
  );
}
export default Dashboard;
