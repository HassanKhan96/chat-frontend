import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

interface Props {
  navItems?: string[];
  handleDrawerToggle?: () => void;
}

const DrawerMenu = ({ handleDrawerToggle, navItems }: Props) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems &&
          navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default DrawerMenu;
