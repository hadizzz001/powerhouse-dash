import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
// import { SettingsNotifications } from '../components/settings/settings-notifications';
// import { SettingsPassword } from '../components/settings/settings-password';
import AddProduct from '../components/product/AddProduct';

const Page = () => (
  <>
    <Head>
      <title>
        Add New Product
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Add a new Product
        </Typography>
        <AddProduct/>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page:any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
