import Button from "@mui/material/Button";
import { ReactNode } from "react";

type Props = {
  // color:  'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';  
  children: ReactNode;
  // onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  // disabled?: boolean;
  // type?: string;
};

export const BaseButton = (props: Props) => {
  const { children } = props;
  // color, onClick, disabled, type 
  return (
    <Button
      variant="contained"
  
      fullWidth={true}
      style={{ borderRadius: 40 }}
    >
      {children}
    </Button>
  );
};

// color={color}
// onClick={onClick}
// disabled={disabled}
// type={type}