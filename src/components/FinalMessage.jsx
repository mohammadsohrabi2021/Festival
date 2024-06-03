import React from "react";
import userImage from "@assets/image/imageuser.jpg";
import { Box, Grid, Typography } from "@mui/material";

function FinalMessage() {
  return (
    <Box textAlign="center">
      <img
        src={userImage}
        alt="Event"
        style={{ width: "92%", height: "450px", borderRadius: "0 0 100% 100%" }}
      />
      <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Typography
          variant="h4"
          py={5}
          fontFamily={"vazir"}
          fontWeight={"bolder"}
          color={"#A32098"}
        >
          رویداد بزرگ نیکینا و نگین
        </Typography>
        <Typography
          fontFamily={"vazir"}
          fontSize={"16px"}
          fontWeight={700}
          color={"#01820a"}
          lineHeight={"28px"}
          padding={"5px 20px"}
          textAlign={"justify"}
        >
          ثبت نام شما انجام شد
        </Typography>
        <Typography
          fontFamily={"vazir"}
          fontSize={"16px"}
          fontWeight={"bold"}
          color={"#444"}
          lineHeight={"28px"}
          textAlign={"justify"}
        >
          مطمئن شو که همه کسانی که من فالو کردم را فالو داشته باشی
        </Typography>
        <Typography
          mt={3}
          fontFamily={"vazir"}
          sx={{
            padding: "5px 20px",
            lineHeight: "28px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#444",
          }}
        >
          کد قرعه کشی پایین را تا زمان قرعه کشی نگه دارید
        </Typography>
        <Typography
          fontFamily={"vazir"}
          sx={{
            padding: "5px 20px",
            lineHeight: "28px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#444",
          }}
        >
          یا از این صفحه اسکرین شات بگیر
        </Typography>
      </Grid>
      <Box
        sx={{
          padding: "7px 27px",
          backgroundColor: "#ffccfc",
          borderRadius: "5px",
          border: "2px solid #6f18a0",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "40px",
          color: "#6f18a0",
          letterSpacing: "6px",
        }}
        width={"max-content"}
        margin={"auto"}
      >
        123456
      </Box>
    </Box>
  );
}

export default FinalMessage;
