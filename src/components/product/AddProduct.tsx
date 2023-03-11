import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,

} from '@mui/material';
import EssentialInfo from '../add/EssentialInfo';
import { useState } from 'react';


const AddProduct = () => {
  const [product, setProduct] = useState({})
  // console.log('product: ', product);

  return (

    <Card>
      <CardHeader
      subheader='Inputs marked with * are required '
        title="Fill the form"
      />
      <Divider />
      <CardContent>
        <EssentialInfo state={product} saveState={setProduct}/>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
        type='submit'
        form='add-form'
        color="primary"
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Card>
  )
}

export default AddProduct
