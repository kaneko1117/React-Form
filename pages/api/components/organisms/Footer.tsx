import { Toolbar } from "@mui/material";
import { memo, FC } from "react";

import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";

export const Footer: FC = memo(() => {
  return (
    <Toolbar sx={{ bgcolor: "#fff" }}>
      <AccessTimeFilledOutlinedIcon />
    </Toolbar>
  );
});
