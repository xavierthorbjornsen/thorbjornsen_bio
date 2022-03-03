import React from "react";
import { Button } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((Theme) => ({
  nav: {
    backgroundColor: '#fafafa',
    position: 'sticky',
    top: 0,
    width: '100%',
    height: 80,
    zIndex: 1000,
    boxShadow: '0 4 14 0 rgba(0,0,0,0.15)',
  },
  navContent: {
    maxWidth: '900px',
    padding: '0rem 3rem',
    margin: 'auto',
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    height: '100%',
  },
  navHome: {
    height: '60px',
    width: '60px',
  },
  navItems: {
  },
  navItem: {
    display: "inline",
    marginLeft: '2rem',
    color: '#333',
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
          variant="outline"
          className={classes.navHome}
          onClick={scrollToTop}>Home
        </Button>
        <ul className={classes.navItems}>
          {pages.map((page) => (
            <li className={classes.navItem}>
              <Button>
                <Link
                  activeClass="active"
                  key={page}
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
        </ul>
      </div>
    </nav>
  );
};
