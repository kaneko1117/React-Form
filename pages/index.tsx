import { SubmitHandler, useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material";
import { Theme } from "./api/theme/Theme";
import Button from "@mui/material/Button";
import { useGetPostNumber } from "./api/hooks/useGetPostNumber";
import { useSetName } from "./api/hooks/useSetName";
import { BaseTextField } from "./api/components/atoms/textField/BaseTextField";
import { Header } from "./api/components/organisms/Header";
import { Footer } from "./api/components/organisms/Footer";

type Input = {
  firstName: string;
  lastName: string;
  PostNumber: string;
  detailAdress: string;
};

const page = ()=> {
  const theme = createTheme(Theme);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Input>({
    shouldFocusError: true,
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      PostNumber: "",
      detailAdress: ""
    }
  });


  const {
    address,
    errorNumber,
    zip,
    setZip,
    onGetPostAdress
  } = useGetPostNumber();

  const {
    firstNameValue,
    lastNameValue,
    onChangeFirstName,
    onChangeLastName
  } = useSetName();


  const onSubmit: SubmitHandler<Input> = (data) => {
    const costomer = {
      costmer_info: [data]
    };

    console.log(JSON.stringify(costomer));
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <ThemeProvider theme={theme}>
      <Header />
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <Box sx={{ mt: 12 }}>
            <Grid container spacing={2} display={"flex"} alignItems={"center"}>
              <Grid item xs={12} sm={2}>
                <h2>氏名</h2>
              </Grid>
              <Grid item xs={12} sm={4.5}>
                <BaseTextField
                  required
                  register={register}
                  label="firstName"
                  onChange={onChangeFirstName}
                />
              </Grid>
              <Grid item sm={1} />
              <Grid item xs={12} sm={4.5}>
                <BaseTextField
                  required
                  register={register}
                  label="lastName"
                  onChange={onChangeLastName}
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item sm={2} />
              <Grid item xs={12} sm={10}>
                <Typography
                  color="red"
                  fontFamily="monospace"
                  fontWeight="Bold"
                >
                  {(errors?.lastName && "氏名を入力してください") ||
                    (errors?.firstName && "氏名を入力してください")}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Grid container spacing={2} display={"flex"} alignItems={"center"}>
              <Grid item xs={12} sm={2}>
                <h2>郵便番号</h2>
              </Grid>
              <Grid item xs={12} sm={4.5}>
                <BaseTextField
                  value={zip}
                  required
                  register={register}
                  label="PostNumber"
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                />
              </Grid>
              <Grid item sm={0.5} />
              <Grid
                item
                xs={12}
                sm={1.5}
                container
                alignItems="center"
                justifyContent="center"
              >
                <Button onClick={onGetPostAdress} color="secondary"  variant="contained"fullWidth={true} style={{ borderRadius: 40 }}>
                  検索
                </Button>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item sm={2} />
              <Grid item xs={12} sm={10}>
                <Typography
                  color="red"
                  fontFamily="monospace"
                  fontWeight="Bold"
                >
                  {errorNumber}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={2} display={"flex"} alignItems={"center"}>
              <Grid item xs={12} sm={2}>
                <h2>詳細住所</h2>
              </Grid>
              <Grid item xs={12} sm={10}>
                <BaseTextField
                  required
                  register={register}
                  label="detailAdress"
                  value={address}
                />
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mt: 12 }}>
            <Grid item container>
              <Grid item sm={4} />
              <Grid
                item
                xs={12}
                sm={4}
                container
                alignItems="center"
                justifyContent="center"
              >
                <Button
                  type="submit"
                  color="info"
                  fullWidth={true}
                  style={{ borderRadius: 40 }}
                  variant="contained"
                  disabled={
                    firstNameValue === "" ||
                    lastNameValue === "" ||
                    address === "" ||
                    zip === ""
                  }
                >
                  申込み内容を送信
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mb: 12 }}></Box>
        </Container>
        <Footer />
      </ThemeProvider>
    </form>
  );
}

export default page
