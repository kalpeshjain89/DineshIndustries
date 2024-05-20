import * as React from 'react';
import "../../styles/NavBar.scss";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../assets/images/logo.png';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';

const navItems = [
  {
    'id': 'home',
    'text': 'Home',
    'isExpandable': false,
    'routeTo': '/'
  },
  {
    'id': 'products',
    'text': 'Products',
    'isExpandable': true,
    'routeTo': '/products'
  },
  {
    'id': 'about',
    'text': 'About',
    'isExpandable': false,
    'routeTo': '/about'
  },
  {
    'id': 'contact',
    'text': 'Contact',
    'isExpandable': false,
    'routeTo': '/contact-us'
  }
];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expandList, setExpandList] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = async (e, item) => {
    if (item.isExpandable) {
      e.stopPropagation();
      setExpandList(!expandList);
    }
    else {
      await setMobileOpen(false);
      navigate(`${item.routeTo}`);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, pl: 2 }}>
        <img className="branding-logo" src={Logo} alt="logo" style={{ verticalAlign: 'top' }} />
        Dinesh Industries
      </Typography>
      <Divider />
      <List component="nav">
        <ListItemButton sx={{ pl: 2 }} onClick={(event) => handleClick(event, navItems[0])}>
          <ListItemText primary={navItems[0].text} />
        </ListItemButton>
        <ListItemButton sx={{ pl: 2 }} onClick={(event) => handleClick(event, navItems[1])}>
          <ListItemText primary={navItems[1].text} />
          {expandList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={expandList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/products">
              <ListItemText primary="All Products" />
            </ListItemButton>
            {props.categories.map((category, index) => (
              <ListItemButton sx={{ pl: 4, textTransform: 'capitalize' }} component={Link} to={category.routeTo} key={index}>
                <ListItemText primary={category.heading} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton sx={{ pl: 2 }} onClick={(event) => handleClick(event, navItems[2])}>
          <ListItemText primary={navItems[2].text} />
        </ListItemButton>
        <ListItemButton sx={{ pl: 2 }} onClick={(event) => handleClick(event, navItems[3])}>
          <ListItemText primary={navItems[3].text} />
        </ListItemButton>
      </List>
      <Divider />
      <div className="social-icons-wrapper">
        <a href="//api.whatsapp.com/send?phone=919987585976&text=https://dineshindustries.net.in/%0A%0AI'm interested in your products and I have a few questions. Can you help?" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> WhatsApp
        </a>
        <a href="https://m.facebook.com/1171466706257889/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />Facebook
        </a>
      </div>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <AppBar position="sticky" sx={{
      background: '#000'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 2, display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <img className="branding-logo" src={Logo} alt="logo" />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: 'none', sm: 'block' },
                color: 'inherit',
                textDecoration: 'none',
                fontSize: { sm: '1.25em', md: '1.5em' }
              }}
            >
              Dinesh Industries
            </Typography>
          </Box>

          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '300px' },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', flexGrow: 2 }}>
            <img className="branding-logo" src={Logo} alt="logo" />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { sm: 'flex', md: 'none' },
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '1.25em'
              }}
            >
              {/* Mobile Portrait Header */}
              Dinesh Industries
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.slice(1).map((item) => (
              <Button key={item.id} sx={{ color: '#fff' }} component={Link} to={item.routeTo}>
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default React.memo(NavBar);
