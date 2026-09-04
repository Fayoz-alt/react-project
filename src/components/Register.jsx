import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "./Auth";

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      accessToken
      user {
        id
        email
        name
      }
    }
  }
`;

function Register({ open, setOpen }) {
  const { setAccessToken, setUser } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: ``,
      name: ``,
      password: ``,
    },
  });

  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  const onSubmit = (data) => {
    register({
      variables: data,
      onCompleted: handleRegisterCompleted,
      onError: (error) => toast.error(error.message),
    });
  };

  const handleRegisterCompleted = (data) => {
    toast.success(`Registered Succesfully!`);
    navigate(-1);
    setAccessToken(data?.register?.accessToken);
    setUser(data?.register?.user);
  };

  const handleClose = (e) => {
    // const a = e.onKeyDown((key) => key === "esc")
    // console.log(a);
    navigate(-1);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{ className: "register-dialog" }}
    >
      <Stack spacing={2} className="register-content">
        <DialogTitle>
          <Typography>Welcome to AirBn</Typography>
        </DialogTitle>
        <DialogContent style={{ paddingTop: `6px` }}>
          <Stack spacing={2}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: `Enter the Name!`,
              }}
              render={({ field: { ref, ...field }, fieldState: { error } }) => {
                return (
                  <TextField
                    {...field}
                    size="small"
                    inputRef={ref}
                    error={error}
                    label="Name"
                    helperText={error && error.message}
                    type="text"
                  />
                );
              }}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: `Enter the Email!`,
              }}
              render={({ field: { ref, ...field }, fieldState: { error } }) => {
                return (
                  <TextField
                    size="small"
                    {...field}
                    inputRef={ref}
                    error={error}
                    label="Email"
                    helperText={error && error.message}
                    type="email"
                  />
                );
              }}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                minLength: {
                  value: 10,
                  message: `Password Must Contain More Than 10 Characters!`,
                },
                required: `Enter the Password!`,
              }}
              render={({ field: { ref, ...field }, fieldState: { error } }) => {
                return (
                  <TextField
                    size="small"
                    {...field}
                    inputRef={ref}
                    error={error}
                    label="Password"
                    helperText={error && error.message}
                    type="password"
                  />
                );
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleSubmit(onSubmit)}
            loading={loading}
          >
            Register
          </Button>
          <Link to={`/`}>
            <Button variant="outlined" color="error">
              Cancel
            </Button>
          </Link>
        </DialogActions>
      </Stack>
    </Dialog>
  );
}
export default Register;
