import TextField from "@mui/material/TextField";
import { Path, UseFormRegister } from "react-hook-form";

type Input = {
  firstName: string;
  lastName: string;
  PostNumber: string;
  detailAdress: string;
};

//関数化された入力フォームで入力コンポーネントの登録をするのにPathとUseFormRegisterが必要
type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | null;
  label: Path<Input>;
  register: UseFormRegister<Input>;
  required: boolean;
};

//関数の形を作っといて、値をそのまま代入させるイメージ
export const BaseTextField = (props: Props) => {
  const { onChange, value, label, register, required } = props;
  return (
    <TextField
      fullWidth
      value={value}
      {...register(label, {
        required
      })}
      onChange={onChange}
    />
  );
};
