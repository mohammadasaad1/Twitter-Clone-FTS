import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
  Link,
} from "@mui/material";
import rct from "../../imgs/React.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import Follow from "./components/Follow.js";
export default function HoomePage() {
  const imgUrl1 =
    "https://ckl-website-static.s3.amazonaws.com/wp-content/uploads/2017/07/Banner_css-300x300.png.webp";
  return (
    <Box sx={{ borderRight: "0.09px solid #b5b5b5" }}>
      <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
        <IconButton
          sx={{
            "&:hover": {
              backgroundColor: "gray",
            },
          }}
        >
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">React</Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            2,611 posts
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            position: "relative",
            backgroundImage:
              "url(https://ckl-website-static.s3.amazonaws.com/wp-content/uploads/2017/07/Banner_css-300x300.png.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            color: "#fff",
            minHeight: "27vh",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={rct}
            sx={{
              position: "absolute",
              bottom: "-25%",
              left: 100,
              width: "8rem",
              height: "8rem",
              borderRadius: 50,
              border: "5px solid black",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "row-reverse",
          gap: 1,
        }}
      >
        <Follow />
        <IconButton sx={{ border: "1px solid gray" }}>
          <NotificationAddIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton sx={{ border: "1px solid gray" }}>
          <MoreHorizIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
