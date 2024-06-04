import { Box, Typography } from '@mui/material'
import React from 'react'
import banner from "@assets/image/banner_gift.png";
import userImage from "@assets/image/imageuser.png"; // Import the user image
function BannerPage() {
  return (
    <Box textAlign="center">
    <img
      src={userImage}
      alt="Event"
      style={{
        width: "92%",
        height: "450px",
        // borderRadius: "0 0 100% 100%",
      }}
    />

    <Box my={2}>
      <img
        src={banner}
        style={{ width: "90%", height: "max-content" }}
        alt=""
      />
    </Box>
    <Typography
      fontFamily={"vazir"}
      fontSize={"16px"}
      fontWeight={"bold"}
      color={"#444"}
      lineHeight={"28px"}
      padding={"5px 20px"}
      textAlign={"justify"}
    >
      عزیزای دلم دقت کنید برای شرکت در قرعه کشی ابتدا همه کسانی که من فالو
      کردم رو فالو کنید بعد مشخصات خودتون رو در فرم پایین صفحه تکمیل کنید
      وقتی ثبت شد یه کد 6 رقمی نمایش داده میشه، اونو تا پایان مسابقه پیش
      خودتون نگه دارید میتونید از صفحه اسکرین شات بگیرید لازم به ذکر هست هر
      نفر با هر شماره فقط یک بار می تونه شرکت کنه
    </Typography>
  </Box>
  )
}

export default BannerPage
