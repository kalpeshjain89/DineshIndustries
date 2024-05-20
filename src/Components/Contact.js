import React from "react";
import { Helmet } from 'react-helmet-async';
import "../styles/Contact.scss";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const GoogleMaps = React.lazy(() => import("./GoogleMaps"));

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Dinesh Industries - Contact Us</title>
        <meta name="description" content="Dinesh Industries - Contact Us" />
      </Helmet>
      <Box sx={{
        px: { xs: 2, md: 4 },
        py: 2,
        backgroundColor: '#FAFAFA'
      }}
      >
        <Box sx={{
          mt: 1
        }} className="contact-details-wrapper">
          <div className="map-wrapper">
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.5em',
                borderBottom: '2px solid #CCC',
                letterSpacing: 1,
                mb: '0.75em',
                pb: 0.5
              }}
            >
              FIND US ON GOOGLE MAPS
            </Typography>
            <GoogleMaps />
          </div>
          <div className="address-details-wrapper">
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.5em',
                borderBottom: '2px solid #CCC',
                letterSpacing: 1,
                mb: 1,
                pb: 0.5
              }}
            >
              OFFICE ADDRESS
            </Typography>
            <address>
              104, Kopergaon Estate, <br />
              Stable No. 2, Shed No. 8, 9, 10 <br />
              Sheth Motisha Lane, Mazgaon, <br />
              Mumbai 400 010, <br />
              Maharashtra, India <br />
            </address>
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.5em',
                borderBottom: '2px solid #CCC',
                letterSpacing: 1,
                mb: 1,
                mt: 3,
                pb: 0.5
              }}
            >
              CONTACT DETAILS
            </Typography>
            <a href="tel:9987585976">
              <CallIcon /> +91 9987585976
            </a>
            <a href="mailto:parshv83jain@gmail.com?subject=Inquiry%20about%20Dinesh%20Industries'%20Products%20&body=Hi Paresh, %0D%0A%0D%0A">
              <EmailIcon /> parshv83jain@gmail.com
            </a>
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.5em',
                borderBottom: '2px solid #CCC',
                letterSpacing: 1,
                mb: 1,
                mt: 3,
                pb: 0.5
              }}
            >
              OPERATING HOURS
            </Typography>
            <div>
              Monday - Saturday: 9:30am - 7:30pm
            </div>
            <div style={{ marginTop: '8px' }}>
              Sunday & Public Holidays: Closed
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default React.memo(Contact);