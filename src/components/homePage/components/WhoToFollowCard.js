import {
  Avatar,
  Typography,
  Button,
  Stack,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import freeCodeCampImg from "../imgs/unnamed.jpg";
export default function WhoToFollowCard() {
  return (
    <Box variant="outlined" sx={{ bgcolor: "#000", color: "#fff" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: 1,
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Avatar alt="freeCodeCamp" src={freeCodeCampImg} />
          <Box flexGrow={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              freeCodeCamp.org <span style={{ color: "#1DA1F2" }}>✔</span>
            </Typography>
            <Typography variant="body2" color="gray">
              @freeCodeCamp
            </Typography>
            <Typography variant="body2" mt={0.5}>
              We’re a community of millions of people who are building new
              skills and getting new jobs together. A 501(c)(3) public charity.
              Tweets by
              <span style={{ color: "#1DA1F2" }}> @abbeyrenn.</span>
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Follow
          </Button>
        </Stack>
        {/* Extra note about followers */}
        <Typography variant="caption" color="gray">
          Node.js and 5 others follow
        </Typography>
      </CardContent>
    </Box>
  );
}
