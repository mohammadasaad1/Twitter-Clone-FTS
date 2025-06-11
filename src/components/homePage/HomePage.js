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
  AvatarGroup,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import LinkIcon from "@mui/icons-material/Link";
import rct from "../../imgs/React.png";
import Follow from "./components/Follow.js";
import FollowedBy from "./components/FollowedBy.js";
import WhoToFollowCard from "./components/WhoToFollowCard.js";
export default function HoomePage() {
  const imgUrl1 =
    "https://ckl-website-static.s3.amazonaws.com/wp-content/uploads/2017/07/Banner_css-300x300.png.webp";
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#0e75c4",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
      }}
    >
      <Box sx={{ display: "flex", gap: 2, pt: 1 }}>
        <IconButton>
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

      <Box sx={{ ml: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">React</Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            @React.js
          </Typography>
        </Box>

        <Box>
          <Typography>
            The library for web and native user interfaces
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <LinkIcon fontSize="small" />
            <Link
              href="https://react.dev"
              target="_blank"
              rel="noopener"
              underline="none"
              color="#1976D2"
            >
              react.dev
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <CalendarMonthIcon fontSize="small" />
            <Typography fontSize={"small"}>joind at July 2013</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            mt: 1,
          }}
        >
          <Typography
            color="gray"
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, color: "white" }}
            >
              1000{" "}
            </Typography>
            Following
          </Typography>

          <Typography
            color="gray"
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ color: "white" }}>
              256k
            </Typography>
            Followers
          </Typography>
        </Box>
        <FollowedBy />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 5 }}>
            Who to follow
          </Typography>
          <WhoToFollowCard />
          <WhoToFollowCard />
          <WhoToFollowCard />
        </Box>
      </Box>
    </Box>
  );
}
