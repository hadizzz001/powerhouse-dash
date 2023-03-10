import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Select, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Facebook as FacebookIcon } from '../icons/facebook';
// import { Google as GoogleIcon } from '../icons/google';

const Index = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      price : '',
      weight: '',
      description:'',
      isFeatured : false,
      category : 'electronics',
      // inStock: false,
      // Manufacturer
      // additionalInfo:'',
      // password: 'Password123'
    },
    validationSchema: Yup.object({
      title: Yup
        .string()
        // .email('Must be a valid email')
        .max(255)
        .required('Title is required'),

        price : Yup.number().max(1000000).min(0.1).required('Price is required'),
        description : Yup.string().max(122525).min(1).required('Description is required'),
        category : Yup.string().max(255).min(3).required('Category is required'),
        weight : Yup.string().max(255).min(3),
        isFeatured : Yup.boolean(),



        // password: Yup
      //   .string()
      //   .max(255)
      //   .required('Password is required')
    }),
    onSubmit:(values)=>{
      console.log('value: ', values);

    },
    // validate:(e) => {(console.log('e: ', e))}

  });

  return (
    <>

      <Box
        component="main"
        className='essential'
        sx={{
          maxWidth:'sm'
          // alignItems: 'center',
          // display: 'flex',
          // flexGrow: 1,
          // minHeight: '100%'
        }}
      >
        {/* <Container maxWidth='sm' > */}

          <form id='add-form' onSubmit={formik.handleSubmit}>


            <TextField
              error={Boolean(formik.touched.title && formik.errors.title)}
              fullWidth
              helperText={formik.touched.title && formik.errors.title}
              label="Title*"
              margin="normal"
              name="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.title}
              variant="filled"
            />
                        <TextField
              error={Boolean(formik.touched.price && formik.errors.price)}
              fullWidth
              helperText={formik.touched.price && formik.errors.price}
              label="Price* in $"
              margin="normal"
              name="price"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="number"
              value={formik.values.price}
              variant="filled"
            />
            <TextField
              error={Boolean(formik.touched.price && formik.errors.price)}
              fullWidth
              multiline
              rows={4}
              helperText={formik.touched.price && formik.errors.price}
              label="Description*"
              margin="normal"
              name="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.description}
              variant="filled"
            />
              <TextField
              error={Boolean(formik.touched.category && formik.errors.category)}
              fullWidth
              helperText={formik.touched.category && formik.errors.category}
              label="Category* | ex: microwaves, kitchen.. "
              margin="normal"
              name="category"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.category.toLocaleLowerCase()}
              variant="filled"
            />

<TextField
              error={Boolean(formik.touched.weight && formik.errors.weight)}
              fullWidth
              helperText={formik.touched.weight && formik.errors.weight}
              label="Product weight (add unit kg, liter..) "
              margin="normal"
              name="weight"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.weight.toLocaleLowerCase()}
              variant="filled"
            />
            <TextField
              error={Boolean(formik.touched.isFeatured && formik.errors.isFeatured)}
              fullWidth
              helperText={formik.touched.isFeatured && formik.errors.isFeatured}
              label="isFeatured"
              margin="normal"
              name="isFeatured"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.isFeatured}
              variant="filled"
            />



            {/* <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            /> */}

          </form>
        {/* </Container> */}

      </Box>
    </>
  );
};

export default Index;
