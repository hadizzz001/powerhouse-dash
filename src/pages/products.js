import Head from 'next/head';
import { Box, Container,Button, Grid, Pagination ,Typography} from '@mui/material';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Products | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
          {[{id:1},{id:2},{id:3},{id:4},{id:5}].map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={4}
                xs={6}
                sm={4}
              >
                  <Box sx={{width:'100%'}}>
                    <Box sx={{width:'100%',background:'red',height:'300px'}}>
                    <img src='' className='img' alt=''/>
                    </Box>
                      <Typography sx={{py:'.55em',fontWeight:'500'}}>
                                Acer 3 Gaming Laptop 2tb Nvme 32gb ram 2080ti
                      </Typography>
                      <Box className='flex gap-3' sx={{mt:'.35em'}}>
                        <Button sx={{border:'1px solid',py:'.25em'}}>View</Button>
                        <Button sx={{border:'1px solid',py:'.25em'}}>Edit</Button>
                        <Button sx={{border:'1px solid red',py:'.25em',color:'red'}}>Delete</Button>
                      </Box>

                  </Box>
                {/* <ProductCard product={product} /> */}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
