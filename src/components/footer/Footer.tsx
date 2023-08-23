import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box
      sx={{
        height: 50,
        display: "flex",
        flex: "0 1 auto",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: blue[600],
      }}
    >
      <Typography variant="subtitle1" color={"white"}>
        &copy; Copy Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
