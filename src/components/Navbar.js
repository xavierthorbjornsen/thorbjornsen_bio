import React from "react";
import { Button } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import avatarXavier from './static/images/avatarXavier.jpg';

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
    paddingLeft:8,
    paddingRight: 8,
    margin: 0,
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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const pages = ["About", "Experience", "TimeLine", "Contact"];
  return (
    <nav className={classes.nav} id="navbar">
      <div className={classes.navContent}>
        <Button
          variant="outlined"
          className={classes.navHome}
          onClick={scrollToTop}>Home
        </Button>
        <ul className={classes.navItems}>
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
        </ul>

      </div>
    </nav>
  );
};
