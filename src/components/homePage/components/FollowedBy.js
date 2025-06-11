import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";
import img from "../../icons/img.jpg";
export default function FollowedBy() {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
      <AvatarGroup
        max={3}
        sx={{
          "& .MuiAvatar-root": { width: 20, height: 20, fontSize: 9 },
        }}
      >
        <Avatar alt="one" src={img} />
        <Avatar alt="two" src={img} />
        <Avatar alt="three" src={img} />
      </AvatarGroup>
      <Typography variant="body2" color="white">
        Followed by <strong>Mohammad As'ad</strong>, <strong>Foothill</strong>,
        and 14 others you follow.
      </Typography>
    </Stack>
  );
}
