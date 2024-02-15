import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";
import LinearProgress from "@mui/material/LinearProgress";
import data from "../assets/data.json";

import {
  AppBar,
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={1.7}>
        <AdminSidebar />
      </Grid>
      <Grid item xs={10.3} sx={{ bgcolor: "#f2f2f2" }}>
        <AppBar
          color="primary"
          position="sticky"
          sx={{ bgcolor: "#f2f2f2", boxShadow: "none" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Input
              fullWidth
              sx={{ flex: 1, pb: 1 }}
              placeholder="Search for data,users,docs....."
              startAdornment={
                <InputAdornment position="start">
                  <IconButton size="small">
                    <BsSearch />
                  </IconButton>
                </InputAdornment>
              }
            />
            <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
              <Tooltip title="notification">
                <IconButton>
                  <FaRegBell />
                </IconButton>
              </Tooltip>

              <Avatar src={userImg} sx={{ width: "30px", height: "30px" }} />
            </Stack>
          </Toolbar>
        </AppBar>
        <Stack
          p={3}
          // bgcolor="purple"
          direction="row"
          sx={{ justifyContent: "space-between" }}
        >
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0 115 255)"
          />
          <WidgetItem
            percent={-14}
            amount={true}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidgetItem
            percent={50}
            amount={true}
            value={23000}
            heading="Transaction"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percent={30}
            amount={true}
            value={30}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </Stack>
        <Box sx={{ bgcolor: "gray", m: 3 }}>
          <Grid container sx={{ bgcolor: "revert" }}>
            <Grid xs={9}></Grid>
            <Grid xs={3} bgcolor="#fff" py={3} px={3}>
              <Typography variant="h5" textAlign="center" mb={5}>
                INVENTORY
              </Typography>
              {data.categories.map((i) => (
                <CategoryItem
                  color="primary"
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                />
              ))}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount: boolean;
}

interface CategoryItem {
  heading: string;
  color: string;
  value: number;
}

const CategoryItem = ({ heading, value, color }: CategoryItem) => (
  <Stack direction="row" alignItems="center" spacing={1}>
    <Typography textAlign="left" variant="body2">
      {heading}
    </Typography>
    <Box minWidth={175}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{ height: "8px", borderRadius: 1, color: color }}
      />
    </Box>
    <Typography variant="body2">{value}%</Typography>
  </Stack>
);

const WidgetItem = ({ heading, value, percent, color }: WidgetItemProps) => (
  <Card
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 300,
      p: 3,
    }}
  >
    <Box>
      <Typography variant="body1" sx={{ fontSize: "13px" }}>
        {heading}
      </Typography>
      <Typography variant="h4" fontWeight={700}>
        ${value}
      </Typography>
      <Stack direction="row" gap={0.5} sx={{ alignItems: "center" }}>
        {percent > 0 ? (
          <Typography>
            <HiTrendingUp />+{percent}{" "}
          </Typography>
        ) : (
          <Typography>
            <HiTrendingDown /> {percent}
          </Typography>
        )}
      </Stack>
    </Box>
    <Box sx={{ display: "inline-flex", position: "relative" }}>
      <CircularProgress sx={{ color }} value={percent} variant="determinate" />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div">
          {percent}%
        </Typography>
      </Box>
    </Box>
  </Card>
);

export default Dashboard;
