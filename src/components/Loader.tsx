import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
