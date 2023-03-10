import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@mui/material';
import EssentialInfo from '../add/EssentialInfo';


const AddProduct = () => {
  return (

    <Card>
      <CardHeader
      subheader='Inputs marked with * are required '
        title="Fill the form"
      />
      <Divider />
      <CardContent>
        <EssentialInfo/>
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
