import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
export default function UserPanel({ img, name, email }) {
  return (
    <div className="user-panel">
      <div className="photo">
        <img alt={name} src={img} />
      </div>
      <div className="account">
        <div className="username">
          {name}
          <Tooltip
            title={email}
            placement="top-start"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, -14],
                    },
                  },
                ],
              },
            }}
          >
            <span className="email">{email}</span>
          </Tooltip>
        </div>
        <IconButton>
          <MoreHorizIcon sx={{ color: "whitesmoke" }} />
        </IconButton>
      </div>
    </div>
  );
}
