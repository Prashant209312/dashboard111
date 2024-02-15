import { useLocation, Location, Link } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";

import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { IconType } from "react-icons";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Logo from "../assets/logo.png";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <Box sx={{ height: "100vh", bgcolor: "#fff", p: 2 }}>
      <img src={Logo} width={190} />

      <DivOne location={location} />
      <DivTwo location={location} />
      <DivThree location={location} />
    </Box>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const DivOne = ({ location }: { location: Location }) => (
  <Box>
    <List dense subheader={<ListSubheader>DASHBOARD</ListSubheader>}>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/product"
        text="Product"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/customer"
        text="Customer"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/transaction"
        text="Transaction"
        Icon={AiFillFileText}
        location={location}
      />
    </List>
  </Box>
);

const DivTwo = ({ location }: { location: Location }) => (
  <Box>
    <List dense subheader={<ListSubheader>Charts</ListSubheader>}>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={FaChartBar}
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={FaChartPie}
        location={location}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={FaChartLine}
        location={location}
      />
    </List>
  </Box>
);

const DivThree = ({ location }: { location: Location }) => (
  <Box>
    <List dense subheader={<ListSubheader>Apps</ListSubheader>}>
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        Icon={RiCoupon3Fill}
        location={location}
      />
      <Li
        url="/admin/app/toss"
        text="Toss"
        Icon={FaGamepad}
        location={location}
      />
    </List>
  </Box>
);

const Li = ({ url, text, location, Icon }: LiProps) => (
  <Link to={url}>
    <ListItem
      disablePadding
      sx={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <ListItemButton
        sx={{
          color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
        }}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
          }}
        ></ListItemText>
      </ListItemButton>
    </ListItem>
  </Link>
);
export default AdminSidebar;
