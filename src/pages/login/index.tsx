import { Button, Grid, TextField, Typography } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const Login = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        flex: "1 1 auto",
      }}
    >
      <Grid md={7} sx={{ display: { xs: "none", md: "block" } }}>
        <Typography variant="h4" color="primary" sx={{ fontWeight: 500 }}>
          Unlock the new world of
        </Typography>
        <Typography variant="h4" color="secondary" sx={{ fontWeight: 500 }}>
          Online Confrence
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Login
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2, color: "GrayText" }}>
          Login or Register with you Email Address
        </Typography>
        <form>
          <TextField
            label="Email Address"
            size="small"
            fullWidth
            sx={{ my: 2 }}
          />
          <Button
            startIcon={<SendRoundedIcon />}
            variant="contained"
            sx={{ my: 2 }}
          >
            Send Email
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
