import React from "react";
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProductCategories = React.lazy(() => import("./ProductCategories"));
const HeroImage = React.lazy(() => import("./Navigation/HeroImage"));

const Homepage = ({ productCategories }) => {
  return (
    <div>
      <Helmet>
        <title>Dinesh Industries - Home</title>
        <meta name="description" content="Shubham Computers Mumbai is a leading supplier of electronic components including IC's , Programmers, Reballing Solutions, DC Jacks and much more." />
        <meta name="keywords" content="Shubham Computers, Shubham Computers Mumbai, Computer Accessories." />
      </Helmet>
      <HeroImage />
      <Box sx={{
        px: { xs: 2, md: 4 },
        pt: 4,
        backgroundColor: '#FAFAFA'
      }}
      >
        <Typography
          variant="h2"
          noWrap
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.5em', sm: '2em', md: '3.75em' }
          }}
        >
          Welcome to Dinesh Industries
        </Typography>
        <Box sx={{
          mt: 1
        }}>
          <strong>DINESH INDUSTRIES</strong> are a reputed manufacturers, wholesalers and exporters of a range of domestic
          <strong>Mixer Grinders &amp; its spare parts, Mixer Motors, Mixer Motor Brackets, Juicer Jars and Tower Fans</strong>.
          Since its establishment in 1995, innovation and customer centric approach has been the focus
          of our company. At DINESH INDUSTRIES we believe in quality, hence our products are manufactured
          under strict quality control and supervision.
          <p class="marginT10">All our products are user friendly
            and are based on industry laid parameters to ensure their flawlessness and shock proof body.
            Customers can avail our products in various standard designs, colors, sizes, specifications
            and also in custom designed form. Finally we are proud to state that we are
            an <strong>ISO 9001:2008</strong> certified company and also authorized by
            <strong>Bureau of Indian Standards</strong>. Customer satisfaction by our
            quality products and prompt after sales service sets us apart from other brands.</p>
          <p class="clearfix marginT5">
            <a class="floatR" href="about.html" title="Know more About Us">Know more About Us</a>
          </p>
        </Box>
      </Box>
      <ProductCategories categories={productCategories} />
    </div>
  );
}

export default React.memo(Homepage);