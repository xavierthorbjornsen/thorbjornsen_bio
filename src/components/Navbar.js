import React, { useState } from "react";
import { Button, MenuItem, Menu } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import avatarXavier from '../static/images/avatarXavier.jpg';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: '#001B29',
    position: 'sticky',
    top: 0,
    width: '100%',
    height: theme.spacing(10),
    zIndex: 1000,
    boxShadow: '0px 4px 14px 0px rgba(0,0,0,0.15)',

    
  },
  navContent: {
    maxWidth:'1400px',
    margin: 'auto',
    paddingLeft:30,
    paddingRight:30,
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    height: '100%',
    color:"white",
    zIndex: 1,
  },
  navHome: {
  },
  navItems: {
  },
  navItem: {
    display: "inline",
    marginLeft: theme.spacing(1),
    color:'#333',
  }

}))
export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorE1 ] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const handleClose= () => {
    setAnchorE1(null);
  }
  const handleMenuItemClick = (event) => {
    setAnchorE1(null);
  };

  const isMonitor = useMediaQuery({ query: '(min-width: 1433px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1432px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  const pages = ["About", "Experience", "TimeLine", "Contact"];
  return (
    <nav className={classes.nav} id="navbar">
      <div className={classes.navContent}>
        <Button
          variant="outlined"
          className={classes.navHome}
          onClick={scrollToTop}>Home
        </Button>
        {isMonitor && <ul className={classes.navItems}>
          {pages.map((page) => (
            <li className={classes.navItem} key={page}>
              <Button variant="outlined" >
                <Link
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {page}
                </Link>
              </Button>
              
            </li>
          ))}
           <Avatar alt="X" src={avatarXavier} sx={{float:"right", ml:2, }}/>
        </ul>}
        {isTabletOrMobile && <div className={classes.navItems}><Button onClick={handleClick}><MenuIcon /></Button>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
          {pages.map((page) => (
            <MenuItem key={page}>
              <Button variant="outlined"  >
                <Link
                onClick={(event) => handleMenuItemClick(event)}
                  activeClass="active"
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {page}
                </Link>
              </Button>
            </MenuItem>
          ))}
          </Menu>
          </div>}
      </div>
    </nav>
  );
};
