import * as React from "react";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import vettoriale from "./img/logo_nero.png";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import min from "./img/min.png";




import fotoOlga from "./img/foto24/Olga.JPG";
import Giorgia from "./img/foto24/Giorgia.JPG";
import Cecilia from "./img/foto24/Cecilia.JPG";
import Jacopo from "./img/foto24/Jacopo.JPG";
import Ilaria from "./img/foto24/Ilaria.JPG";


import fisica from "./img/foto24/fisica2.JPG";
import respiro from "./img/foto24/respiro.jpg";
import teatro from "./img/foto24/teatro.JPG";
import coreo from "./img/foto24/coreo.jpg";

import Backdrop from "@mui/material/Backdrop";

import foto from "./img/gallery/foto2.JPG";
import foto2 from "./img/gallery/fotoCentro.png";
import foto3 from "./img/gallery/foto3.JPG";

import foto4 from "./img/gallery/foto4.JPG";
import foto5 from "./img/gallery/foto_insiemeCentro.png";
import foto6 from "./img/gallery/foto5.JPG";

import foto7 from "./img/foto24/3_.jpg";
import foto8 from "./img/gallery/foto_teatroCentro.jpg";
import foto9 from "./img/gallery/foto10.png";

import foto10 from "./img/gallery/foto22.png";
import foto11 from "./img/gallery/foto18_centro.jpg";
import foto12 from "./img/gallery/foto12.jpg";

import foto13 from "./img/gallery/foto19.jpg";
import foto14 from "./img/gallery/foto13_centro.jpg";
import foto15 from "./img/foto24/95.JPG";

import foto16 from "./img/gallery/no.png";
import foto17 from "./img/gallery/foto15_centro.jpg";
import foto18 from "./img/gallery/foto6.jpg";

import foto19 from "./img/foto24/5.JPG";
import foto20 from "./img/gallery/foto16_centro.jpg";
import foto21 from "./img/foto24/07.JPG";

import foto22 from "./img/foto24/08.JPG";
import foto23 from "./img/gallery/foto20_centro.jpg";
import foto24 from "./img/foto24/09.JPG";

import foto25 from "./img/foto24/89.JPG";
import foto26 from "./img/gallery/foto9_centro.jpg";
import foto27 from "./img/foto24/15.jpg";

import foto28 from "./img/foto24/16.JPG";
import foto29 from "./img/gallery/foto7_centro.jpg";
import foto30 from "./img/foto24/22.jpg";

import foto31 from "./img/foto24/85.JPG";
import foto32 from "./img/foto24/50.jpg";
import foto33 from "./img/foto24/93.JPG";

import foto34 from "./img/foto24/96.JPG";
import foto35 from "./img/foto24/51.jpg";
import foto36 from "./img/foto24/97.JPG";

import foto37 from "./img/foto24/98.JPG";
import foto38 from "./img/foto24/52.jpg";
import foto39 from "./img/foto24/90.JPG";
import Script from "next/script";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"°2023 ASSOCIAZIONE CULTURALE ANIME | CF: 90022540679 | GDC WebSite © "}
    </Typography>
  );
}

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const theme = useTheme();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
        
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
        
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Button sx={{ color: "#fff", position: "relative", left: 350 }} href="/">
        {" "}
        Home{" "}
      </Button>
      <Button
        name="nomeancora"
        sx={{ color: "#fff", position: "relative", left: 350 }}
        href="/#ancoraAbout"
      >
        {" "}
        About{" "}
      </Button>
      <Button
        sx={{ color: "#fff", position: "relative", left: 350 }}
        href="/#ancoraProgram"
      >
        {" "}
        Program{" "}
      </Button>
      <Button
        sx={{ color: "#fff", position: "relative", left: 350 }}
        href="/#ancoraCast"
      >
        {" "}
        Cast{" "}
      </Button>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",

      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem >
        <Button sx={{ color:"black"}} href='/' >HOME</Button>
      </MenuItem>
      <MenuItem>
        <Button sx={{ color:"black"}} href='/#ancoraAbout' >ABOUT</Button>
      </MenuItem>
      <MenuItem>
        <Button sx={{ color:"black"}} href='/#ancoraProgram' >PROGRAM</Button>
      </MenuItem>
      <MenuItem>
        <Button sx={{ color:"black"}} href='/#ancoraCast' >CAST</Button>
      </MenuItem>
    </Menu>
  );

 

 

  return (
    <>
    <Head>
    <title> GALLERIA </title>
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="black" />
    <link rel="icon" href="/logo_bianco.png" />
    

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        >
        </script>
        </Head>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#181818" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Image
              src={vettoriale}
              alt="animè"
              title="animè"
              style={{ position: "relative", left: 80, height: 80, width: 75 }}
            />

            <Box sx={{ flexGrow: 1, backgroundColor:"#181818" }} />
            <Box sx={{ display: { xs: "none", md: "flex"  } }}>
              <Button sx={{ color: "white", position: "relative", left: -450 }} href='/'>
                HOME
              </Button>
              <Button sx={{ color: "white", position: "relative", left: -450 }}href='/#ancoraAbout'>
                ABOUT
              </Button>
              <Button sx={{ color: "white", position: "relative", left: -450 }}href='/#ancoraProgram'>
                PROGRAM
              </Button>
              <Button sx={{ color: "white", position: "relative", left: -450 }}href='/#ancoraCast' >
                CAST
              </Button>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#181818",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Divider />
          <List>
            <List>
              <Button sx={{ color: "white" }} href="/galleria">
                {" "}
                GALLERIA{" "}
              </Button>
              <Divider sx={{ my: 1, color: "white" }} />
              <Button sx={{ color: "white" }} href="/produzioni">
                {" "}
                PRODUZIONI{" "}
              </Button>
              <Divider sx={{ my: 1, color: "white" }} />
              <Button sx={{ color: "white" }} href="/contattaci">
                {" "}
                CONTATTI{" "}
              </Button>
            </List>
          </List>
        </Drawer>
        <Main>
          <DrawerHeader />
        </Main>


        <section className="sezione-icone program text-center pt-2 ">
          <h1 className="mt-0 text-white"> GALLERIA </h1>
          <div className="container mt-5">

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto} alt='1'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto2} alt='2' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto3} alt='3' className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto4} alt='4' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto5} alt='5' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto6} alt='6' className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto7} alt='7' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto8} alt='8' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto9} alt='9' className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto10} alt='10' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto11} alt='11' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto12} alt='12' className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto13} alt='13'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto14} alt='14'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto15} alt='15'className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto16} alt='16' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto17} alt='17'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto18} alt='18'className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto19} alt='19'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto20} alt='20'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto21} alt='21' className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto22} alt='22'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto23} alt='23'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto24} alt='24' className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto25} alt='25' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto26} alt='26' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto27} alt='27' className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto28} alt='28' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto29}  alt='29' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto30} alt='30' className=" mb-2 widthimageRespiro mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto31} alt='31'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto32} alt='32' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto33} alt='33'className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto34} alt='34' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto35} alt='35' className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto36} alt='36'className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto37} alt='37'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto38} alt='38'className=" mb-2 widthimage mt-5" />
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={foto39} alt='39'className=" mb-2 widthimage mt-5" />
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className=" program bg-light text-center bg-black  pb-5 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={min} alt='logo'className=" mb3 widthimage mt-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sezione-icone  text-center text-grey">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <p className="lead mb-0 text-white">
                  2023° ASSOCIAZIONE CULTURALE ANIME | CF: 90022540679 | GDC
                  WebSite ©
                </p>
              </div>
            </div>
          </div>
        </section>

      </Box>
    </>
  );
}
