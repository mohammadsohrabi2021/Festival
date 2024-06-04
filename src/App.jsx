import React, { useState } from "react";
import HomePage from "./components/HomePage";
import image from "@assets/image/pattern.png";
import { Grid } from "@mui/material";
import FinalMessage from "./components/FinalMessage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const[lotteryId,setlLotteryId]=useState(null)
console.log(lotteryId?.lottery_id,'lotteryId')
  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  // #c9f2f1
  // #e9ceeb
  //#b9bfed
  return (
    <Grid direction={"rtl"} display={"flex"} justifyContent={"center"}>
      <Grid
        bgcolor={"#d3d6f5"}
        height={"auto"}
        width={"100%"}
        maxWidth={550}
        style={style}
      >
        {isSubmitted ? (
          <FinalMessage lotteryId={lotteryId?.lottery_id} />
        ) : (
          <HomePage setlLotteryId={setlLotteryId} setIsSubmitted={setIsSubmitted} />
        )}
      </Grid>
    </Grid>
  );
}

export default App;

