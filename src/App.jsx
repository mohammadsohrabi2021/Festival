import React, { useState } from "react";
import HomePage from "./components/HomePage";
import image from "@assets/image/pattern.png";
import { Grid } from "@mui/material";
import FinalMessage from "./components/FinalMessage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(true);

  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid direction={"rtl"} display={"flex"} justifyContent={"center"}>
      <Grid
        bgcolor={"#f2f2f2"}
        height={"auto"}
        width={"100%"}
        maxWidth={550}
        style={style}
      >
        {isSubmitted ? (
          <FinalMessage />
        ) : (
          <HomePage setIsSubmitted={setIsSubmitted} />
        )}
      </Grid>
    </Grid>
  );
}

export default App;

