import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  Divider,
  Link,
} from "@mui/material";
import img from "../icons/img.jpg";
import SearchBar from "./components/SearchBar";
// #17181C
export default function RightSidebar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
        gap: 5,
        height: "100%",
        overflow: "auto",
      }}
    >
      <SearchBar />

      <Box>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          You might like
        </Typography>
        <List>
          {[
            { name: "mohammad asaad", username: "@abuAsad7", avatar: "M" },
            { name: "imam", username: "@imam", avatar: "I" },
            { name: "imam", username: "@imam", avatar: "I" },
          ].map((user, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1,
                gap: 5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar src={img}>{user.avatar}</Avatar>
                <Box>
                  <Typography fontWeight="medium">{user.name}</Typography>
                  <Typography variant="body2" color="#888">
                    {user.username}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "none" }}
              >
                Follow
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Trends for you
        </Typography>
        <List>
          {[
            { topic: "# Palestine", posts: "87.5K posts" },
            { topic: "# React 19", posts: "32K posts" },
            { topic: "# AI", posts: "54.1K posts" },
          ].map((trend, index) => (
            <ListItem key={index} sx={{ display: "block", py: 1 }}>
              <Typography fontSize="13px" color="#888">
                Trending
              </Typography>
              <Typography fontWeight="bold">{trend.topic}</Typography>
              <Typography fontSize="13px" color="#888">
                {trend.posts}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider />

      <Box
        sx={{
          fontSize: "12px",
          color: "#888",
        }}
      >
        <Link href="#" underline="none" color="inherit" fontSize="12px">
          Terms of Service
        </Link>{" "}
        •{" "}
        <Link href="#" underline="none" color="inherit" fontSize="12px">
          Privacy Policy
        </Link>{" "}
        •{" "}
        <Link href="#" underline="none" color="inherit" fontSize="12px">
          Cookie Policy
        </Link>{" "}
        <Typography variant="body2" fontSize="12px" color="#888">
          © 2025 X Corp.
        </Typography>
      </Box>
    </Box>
  );
}
