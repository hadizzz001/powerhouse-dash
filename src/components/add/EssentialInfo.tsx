import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Select, Link, TextField,
  Typography, Checkbox, FormControlLabel } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddImage from './AddImage';
import { useState } from 'react';
import { useRouter } from 'next/router';
// import { Facebook as FacebookIcon } from '../icons/facebook';
// import { Google as GoogleIcon } from '../icons/google';

  const Index = ({state,saveState}:{state:any,saveState:any}) => {
  const [imgs, setImgs] = useState([''])
  const router= useRouter()
  const handleImgChange = (url:string[] | any) => {
    // console.log('imgs: ', imgs);
    if (url) {

      setImgs(url);

      // saveState({
      //   ...state,
      //   images: [...imgs] || url
      // })
    }
  }
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
    onSubmit:async (values,{ resetForm})=>{
      const tkn = localStorage.getItem('tkn');
      if (!tkn) {return};
      // saveState(values)
      // console.log('values: ', values);
    //   saveState({
      //     ...values,
    //     images: [...imgs]
    // });

    const req = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/save}`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({state:{...values,images:imgs}})
    })
    // console.log('state: ', state);
    const res = await req.json()
    // console.log('values: ', values);
    // console.log('res: ', res);
    if (res?.success) {


        resetForm();
        router.push('/products')
        return
    }
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
            {/* <TextField
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
            /> */}
            <FormControlLabel
            // helperText={formik.touched.isFeatured && formik.errors.isFeatured}
            label="Show On Homepage?"
            // error={Boolean(formik.touched.isFeatured && formik.errors.isFeatured)}
            name="isFeatured"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            control={<Checkbox
            // margin="normal"
            // fullWidth
            value={formik.values.isFeatured}  />}  />



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
              <AddImage  HandleImagesChange={handleImgChange}/>
          </form>
        {/* </Container> */}

      </Box>
    </>
  );
};

export default Index;
