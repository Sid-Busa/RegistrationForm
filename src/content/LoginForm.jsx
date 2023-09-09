import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/Form/TextInput';
import { Button, Container, Grid, Typography } from '@mui/material';

const LoginForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email is invalid').required('email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <Container maxWidth="xs">
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              {...formik.getFieldProps('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              {...formik.getFieldProps('password')}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginForm;
