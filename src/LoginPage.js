import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API_URL } from './App';

export function LoginPage() {
  const history = useHistory();
  const formvalidationschema = yup.object({
    email: yup.string().min(5, "need a bigger email").required(),
    password: yup.string().min(5).max(12).required(),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formvalidationschema,

    onSubmit: (newlogin) => {
      console.log("onsubmit", newlogin);
      addData(newlogin);
    }
  });

  const addData = (newlogin) => {
    console.log(newlogin);
    fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(newlogin),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.status === 401) {
        history.push("/loginfailed");
      } else {
        history.push("/loginsuccess");
      }

    });

  };

  return (
    <form className="login-page" onSubmit={handleSubmit}>

      <h1 className="login-head">Login</h1>
      <h4 className="please">Please enter your e-mail id and Password</h4>

      <TextField id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        error={errors.email && touched.email}
        helperText={errors.email && touched.email && errors.email}
        placeholder="Enter your Email" />


      <TextField id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        autoComplete="current-password"
        error={errors.password && touched.password}
        helperText={errors.password && touched.password && errors.password}
        placeholder="Enter your Password" />

      <Button variant="outlined" type="submit">log in</Button>
    </form>

  );
}
export function LoginSuccess() {
  return (
    <div>
      <img className="success" src="https://tse4.mm.bing.net/th?id=OIP.kPQ0PJHdeZL0H9HLZfbsGQAAAA&pid=Api&P=0&w=214&h=177" alt="Login success" />
      <h2>Successfully logged in</h2>
    </div>
  );
}
export function LoginFailed() {
  return (
    <div>
      <img className="failed" src="https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-27.jpg" alt="Login failed" />
      <h2>Invalid Credentials</h2>
    </div>
  );
}
