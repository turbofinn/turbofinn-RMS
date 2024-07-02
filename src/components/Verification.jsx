import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import verification from "../Assets/Image/phoneAuthentication.png";
import backgroundfood from "../Assets/Image/BackgroundFood.png";

const Verification = () => {
  return (
    <Box
      sx={{
        bgcolor: "#49C3DE",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        fontFamily: "Poppins, sans-serif",
        position:"fixed"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: 0,
            backgroundImage: `url(${backgroundfood})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            width: "100%",
            opacity: 0.4, 
          }}
        ></Box>

        <Typography variant="h4" sx={{ color: "white", my: 2, paddingTop: 4, zIndex:1 }}>
          LOGO
        </Typography>

        <Box
          component="img"
          sx={{
            height: 500,
            width: 500,
            maxHeight: { xs: 300, md: 300 },
            maxWidth: { xs: 300, md: 300 }, zIndex:1
          }}
          alt=""
          src={verification}
        />

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "white", fontSize: "1.9rem", marginBottom: 1, zIndex:1 }}
          >
            Provide Your Mobile Number
          </Typography>
          <Typography variant="body3" sx={{ color: "white", opacity: 0.8 }}>
            Please Let Us Know Your Mobile Number For Verification Purposes
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="+91 9452222225"
            sx={{ mb: 0, bgcolor: "white", marginTop: 6, borderRadius: 4 }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Is This Same Number in Whatsapp"
            sx={{ color: "white", marginBottom: 2 }}
          />

          <Button
            variant="contained"
            sx={{
              mt: 2,
              paddingY: 2,
              paddingX: 8,
              borderRadius: 88,
              backgroundColor: "#0992B0",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
              marginTop: 3,
              marginBottom: 8,
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "1.3rem",
          mb: 2,
        }}
      >
        A Product Of TurboFinn AI
      </Typography>
    </Box>
  );
};

export default Verification;
