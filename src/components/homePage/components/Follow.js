import { Button } from "@mui/material";

export default function Follow() {
  return (
    <Button
      variant="containd"
      size="small"
      sx={{
        backgroundColor: "#1976D2",
        mr: 2,
        width: "10rem",
        borderRadius: 50,
        "&hover": {
          backgroundColor: "white",
        },
      }}
    >
      Follow
    </Button>
  );
}
