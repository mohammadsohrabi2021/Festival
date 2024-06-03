import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { AccountCircle, Phone, Instagram, Lock ,Refresh} from "@mui/icons-material";
import userImage from "@assets/image/imageuser.jpg"; // Import the user image
import SendIcon from '@mui/icons-material/Send';
// Function to convert Persian numbers to English numbers
const convertPersianToEnglish = (str) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";
  return str.replace(
    /[۰-۹]/g,
    (char) => englishDigits[persianDigits.indexOf(char)]
  );
};

const validationSchema = yup.object({
  name: yup
    .string("نام و نام خانوادگی خود را وارد کنید")
    .required("وارد کردن نام و نام خانوادگی الزامی است"),
  phone: yup
    .string("شماره همراه خود را وارد کنید")
    .transform((value) => convertPersianToEnglish(value)) // Convert Persian digits to English
    .matches(/^[0-9]{11}$/, "شماره همراه باید ۱۱ رقم باشد")
    .required("وارد کردن شماره همراه الزامی است"),
  instagram: yup
    .string("آی دی اینستاگرام خود را وارد کنید")
    .required("وارد کردن آی دی اینستاگرام الزامی است"),
  captcha: yup
    .string("کد روبه رو را وارد کنید")
    .required("وارد کردن کد روبه رو الزامی است"),
});

function HomePage({ setIsSubmitted }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      instagram: "",
      captcha: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      axios
        .post("YOUR_BACKEND_URL", values)
        .then((response) => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          resetForm();
        })
        .catch((error) => {
          setIsSubmitting(false);
          setSubmitError(true);
          console.error("There was an error!", error);
        });
    },
  });

  const textFieldStyles = {
    // marginBottom: "15px",
    backgroundColor: "#f7f7f7",
    borderRadius: "5px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ddd",
      },
      "&:hover fieldset": {
        borderColor: "#ccc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#aaa",
      },
      "& input": {
        padding: "10px", // Adjust padding to decrease height
        fontFamily: "vazir"
      },
    },
  };

  const helperTextStyles = {
    textAlign: "right",
    marginRight: "10px",
    fontFamily:'vazir'
  };
  const handleCaptchaRefresh = () => {
    // Add your captcha refresh logic here
    console.log("Captcha refreshed");
  };
  return (
    <>
      <Box textAlign="center">
        <img
          src={userImage}
          alt="Event"
          style={{
            width: "92%",
            height: "450px",
            borderRadius: "0 0 200% 200%",
          }}
        />
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
      <form onSubmit={formik.handleSubmit} style={{ padding: "0px 20px" }}>
        <TextField
          placeholder="نام و نام خانوادگی"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          FormHelperTextProps={{ style: helperTextStyles }}
          sx={textFieldStyles}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle sx={{color:'#ddd' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          placeholder="شماره همراه"
          variant="outlined"
          fullWidth
          margin="normal"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          FormHelperTextProps={{ style: helperTextStyles }}
          sx={textFieldStyles}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone  sx={{color:'#ddd' }}/>
              </InputAdornment>
            ),
            // sx: { fontFamily: "vazir" },
          }}
        />
        <TextField
          placeholder="آی دی اینستاگرام"
          variant="outlined"
          fullWidth
          margin="normal"
          name="instagram"
          value={formik.values.instagram}
          onChange={formik.handleChange}
          error={formik.touched.instagram && Boolean(formik.errors.instagram)}
          helperText={formik.touched.instagram && formik.errors.instagram}
          FormHelperTextProps={{ style: helperTextStyles }}
          sx={textFieldStyles}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Instagram  sx={{color:'#ddd' }}/>
              </InputAdornment>
            ),
            // sx: { fontFamily: "vazir" },
          }}
        />
        <Box display="flex" alignItems="center">
          <TextField
            placeholder="کد روبه رو"
            variant="outlined"
            fullWidth
            margin="normal"
            name="captcha"
            value={formik.values.captcha}
            onChange={formik.handleChange}
            error={formik.touched.captcha && Boolean(formik.errors.captcha)}
            helperText={formik.touched.captcha && formik.errors.captcha}
            FormHelperTextProps={{ style: helperTextStyles }}
            sx={textFieldStyles}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock  sx={{color:'#ddd' }}/>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCaptchaRefresh}>
                   
                    <Refresh sx={{ color: "#ddd" }} />
                  </IconButton>
                  675876
                </InputAdornment>
              ),
            //   sx: { fontFamily: "vazir" },
            }}
            
          />
          {/* <Box mx={2} p={2} border={1} borderColor="grey.400">
            <Typography variant="h6">۶۷۲</Typography>
          </Box> */}
        </Box>
        <Box mb={4}>
          <Button type="submit" variant="contained" sx={{backgroundColor:"#a31299",gap:'10px',fontFamily:' vazir' }} fullWidth>
            ارسال<SendIcon sx={{fontSize:'16px'}}/>
          </Button>
        </Box>
      </form>

      <Dialog
        open={isSubmitting}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"در حال بررسی اطلاعات"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لطفاً منتظر بمانید، اطلاعات شما در حال بررسی است.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog
        open={submitError}
        onClose={() => setSubmitError(false)}
        aria-labelledby="alert-dialog-error-title"
        aria-describedby="alert-dialog-error-description"
      >
        <DialogTitle id="alert-dialog-error-title">
          {"خطا در ارسال اطلاعات"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-error-description">
            مشکلی در ارسال اطلاعات به وجود آمد. لطفاً دوباره تلاش کنید.
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={() => setSubmitError(false)} color="primary" autoFocus>
            بستن
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

export default HomePage;
