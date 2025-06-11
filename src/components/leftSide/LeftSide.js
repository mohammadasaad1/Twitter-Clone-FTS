import "./style.css";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import img from "../icons/img.jpg";
import IconButton from "./components/IconButton";
import Fab from "@mui/material/Fab";
import UserPanel from "./components/UserPanel";
import PostAddIcon from "@mui/icons-material/PostAdd";
import {
  Bookmarks,
  Explore,
  Home,
  Lists,
  Messages,
  More,
  Notifications,
  Profile,
  Twitter,
} from "../icons";

export default function LeftSide() {
  return (
    <div className="leftSide">
      <div className="container">
        <header>
          <Twitter />
        </header>
        <nav>
          <ul>
            <IconButton Icon={Home} name={"Home"} />
            <IconButton Icon={Explore} name={"Explore"} />
            <IconButton Icon={Notifications} name={"Notifications"} />
            <IconButton Icon={Messages} name={"Messages"} />

            <IconButton Icon={Lists} name={"Lists"} />

            <IconButton Icon={Bookmarks} name={"Bookmarks"} />

            <IconButton Icon={PeopleOutlinedIcon} name={"Communities"} />
            <IconButton Icon={Profile} name={"Profile"} />
            <IconButton Icon={More} name={"More"} />
          </ul>
          <Fab
            variant="extended"
            color="primary"
            sx={{ pl: "80px", pr: "80px" }}
          >
            <PostAddIcon />
            Post
          </Fab>
        </nav>

        <footer>
          <UserPanel
            img={img}
            name={"Mohammad As'ad"}
            email={"mohammadasaad14@gmail.com"}
          />
        </footer>
      </div>
    </div>
  );
}
