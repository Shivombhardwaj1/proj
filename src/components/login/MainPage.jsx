import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import LoginPage from "./LoginPage.jsx"
import SignUpPage from "./SignUpPage.jsx";

const MainBox = styled(Box)`
  width: 100%;
`;
const BackgroundImage = styled("img")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  minWidth: "100%",
  minHeight: "100%",
  zIndex: 1,
  opacity: "30%",
  [theme.breakpoints.down('sm')]: {
    height: "100%",
    objectFit: "cover",
  }
}))

const LogoImage = styled("img")(({ theme }) => ({
  height: 45,
  width: 167,
  zIndex: 2,
  position: "relative",
  margin: "20px 40px",
  [theme.breakpoints.down('sm')]: {
    margin: "20px",
    height: '20%',
    width: '20%',
}
}))




const MainPage = () => {
  const [userLog, setUserLog] = useState("login")
  return (
    <MainBox>
      <BackgroundImage
        src="https://t4.ftcdn.net/jpg/04/21/44/29/360_F_421442912_e9dARIDF7CnBKKcB1Ooy0aNcEOJ13eVY.jpg"
        alt="IMAGE"
      />
      {/* <LogoImage src=""
        alt="logo" /> */}
      {userLog === "login" ? <LoginPage userLog={userLog} setUserLog={setUserLog} /> : <SignUpPage userLog={userLog} setUserLog={setUserLog} />}


    </MainBox>
  );
};

export default MainPage;
