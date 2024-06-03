import React from "react";
import HomePage from "./components/HomePage";
import image from "@assets/image/pattern.png";
import { Grid } from "@mui/material";
function App() {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Grid direction={'rtl'} display={'flex'}
    justifyContent={'center'}>
      <Grid bgcolor={'#f2f2f2'}height={'auto'} width={'100%'} maxWidth={500} style={style}>
        <HomePage />
      </Grid>
    </Grid>
  );
}

export default App;
