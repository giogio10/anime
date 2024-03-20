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

import foto from "./img/productions/Inquieti.png";
import foto1 from "./img/productions/comingSoon.png";

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
      <Button
        sx={{ color: "#fff", position: "relative", left: 350 }}
        href="/#ancoraAbout"
      >
        {" "}
        Home{" "}
      </Button>
      <Button
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
      <MenuItem>
        <Button sx={{ color: "black" }} href="/">
          HOME
        </Button>
      </MenuItem>
      <MenuItem>
        <Button sx={{ color: "black" }} href="/#ancoraAbout">
          ABOUT
        </Button>
      </MenuItem>
      <MenuItem>
        <Button sx={{ color: "black" }} href="/#ancoraProgram">
          PROGRAM
        </Button>
      </MenuItem>
      <MenuItem>
        <Button sx={{ color: "black" }} href="/#ancoraCast">
          CAST
        </Button>
      </MenuItem>
    </Menu>
  );

  const [c, setc] = React.useState(false);
  const handleCloseGio = () => {
    setc(false);
  };
  const handleOpenGio = () => {
    setc(true);
  };

  const [ceci, setCecilia] = React.useState(false);
  const handleCloseCecilia = () => {
    setCecilia(false);
  };
  const handleOpenCecilia = () => {
    setCecilia(true);
  };

  const [jac, setJac] = React.useState(false);
  const handleCloseJac = () => {
    setJac(false);
  };
  const handleOpenJac = () => {
    setJac(true);
  };

  const [Ila, setIla] = React.useState(false);
  const handleCloseIla = () => {
    setIla(false);
  };
  const handleOpenIla = () => {
    setIla(true);
  };

  const [Olga, setOlga] = React.useState(false);
  const handleCloseOlga = () => {
    setOlga(false);
  };
  const handleOpenOlga = () => {
    setOlga(true);
  };

  return (
    <>
      <Head>
        {" "}
        <title> HOMEPAGE </title>
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
        ></script>
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

            <Box sx={{ flexGrow: 1, backgroundColor: "#181818" }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ color: "white", position: "relative", left: -450 }}
                href="/"
              >
                HOME
              </Button>
              <Button
                sx={{ color: "white", position: "relative", left: -450 }}
                href="/#ancoraAbout"
              >
                ABOUT
              </Button>
              <Button
                sx={{ color: "white", position: "relative", left: -450 }}
                href="/#ancoraProgram"
              >
                PROGRAM
              </Button>
              <Button
                sx={{ color: "white", position: "relative", left: -450 }}
                href="/#ancoraCast"
              >
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


        <section className="sezione-icone program text-center pt-3 ">
        <href id="ancoraProgram"/>
          <h1 className="mt-0 text-white"> COM'È PESANTE QUESTA NOTTE  </h1>
          <h3 className="text-white"> (2024)</h3>
          <div className="container mt-5">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto1} alt=" COM'È PESANTE QUESTA NOTTE" className=" mb-2 widthimage mt-5" />
                </div>
              </div>
        </section>

        <section className="sezione-icone program text-center  mt-5 ">
        <href id="ancoraProgram"/>
          <h1 className="mt-0 text-white"> GLI INQUIETI </h1>
          <h3 className="text-white"> (2023)</h3>
          <div className="container mt-5">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={foto} alt=" Gli Inquieti" className=" mb-5 widthimage mt-5" />
                  <h3> TRAMA</h3>
                      <p className="font-weight-light mb-5 mt-4">
                        {" "}
                        14 pazienti psichiatrici rinchiusi in manicomio e
                        sottoposti a misure restrittive, raccontano la genesi
                        della loro pazzia, creando una narrazione fatta di
                        disturbi legati alle malattie, alla tossico dipendenza e
                        agli imprevisti della vita, mostrando tuttavia un lato
                        di una realtà comune e universale.
                      </p>

                      <h3 > BALLERINI </h3>
                      <p className="font-weight-light mb-0 mt-4">
                        {" "}
                        Benedetta Giorgini, Noemi D’Addazio, Martina Fasolino,
                        Sabrina Pallotta, Letizia Durantini, Angela Misantone,
                        Giulia Misanonte, Delinda Di Gregorio, Caterina Adriani,
                        Giulia Di Marco, Pierangelo Di Gregorio, Cecilia
                        Nercide, Alessia Rapacchia, Giorgia De Cristofaro.
                      </p>
                </div>
              </div>
        </section>

        <section className="sezione-icone  text-center text-grey">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <p className="lead mb-0 text-white">
                  2023° ASSOCIAZIONE CULTURALE ANIME | CF: 90022540679 
                  | GDC WebSite ©
                </p>
              </div>
            </div>
          </div>
        </section>

      </Box>
    </>
  );
}


/*

import Head from 'next/head';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from "@mui/material/Container";
import { useEffect } from "react";

import Image from 'next/image';
import vettoriale from "./img/logo_nero.png";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

import foto from "./img/productions/Inquieti.png";
import foto1 from "./img/foto24/coomingsoon.jpg";

import {
  FacebookShareButton,
  WhatsappShareButton
} from "react-share";


import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'°2023 ASSOCIAZIONE CULTURALE ANIME | CF: 90022540679 | GDC WebSite © '}
    </Typography>
  );
}


const shareUrl = "https://www.anime/Produzioni"

export default function  Fe() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navItems = ['Home', 'About', 'Cast'];

  function GetURL() { 
    var gfg = window.location.href; 
    document.getElementById("url").innerHTML = gfg; 
} 


    return (
      
      <>
      <Head> <title> PRODUZIONI </title>
    
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="black"/>
    <link rel="icon" href="/logo_bianco.png"/>
    </Head>

    <div style={{ display: "grid"}}> 

      <div> 
      <Box sx={{ display: "flex"}}>
      <Container> 
        
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: "#181818"}}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }} >
                  <MenuIcon />
                </IconButton>
                <Image src={vettoriale} alt='vettoriale' style={{  position: "relative", left: 80, height: 80, width: 75}} /> 
              <Box >
              <Button  sx={{ color: '#fff', position: 'relative', left: 350 }} href='/'> Home </Button>
              <Button name="nomeancora"  sx={{ color: '#fff', position: 'relative', left: 350 }} href='/#ancoraAbout'> About </Button>
            <Button  sx={{ color: '#fff', position: 'relative', left: 350 }}  href='/#ancoraProgram'> Program </Button>
            <Button  sx={{ color: '#fff', position: 'relative', left: 350 }} href='/#ancoraCast'> Cast </Button>
          </Box>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  backgroundColor: "#181818"
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader >
                <IconButton onClick={handleDrawerClose} sx={{color: "white"}}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </DrawerHeader>
              <Divider  />
              <Divider />
              <List >
              <List >
                 <Button sx={{ color: "white"}} href='/Gallery' > GALLERIA </Button> 
                  <Divider sx={{ my: 1, color: "white" }} />
                  <Button sx={{ color: "white"}} href='/Produzioni' > PRODUZIONI </Button> 
                  <Divider sx={{ my: 1, color: "white" }} />
                  <Button sx={{ color: "white"}}  href='/Contattaci' > CONTATTI </Button> 
                </List>
              </List>
            </Drawer>
            <Main >
              <DrawerHeader />    
        </Main> 
        </Container> 
    </Box>
    </div>

    <Typography variant="h4" color={'white'} align='center' > PRODUCTIONS </Typography>
    
    <Box> 
    <Container> 
   <Card sx={{ height: 1400, width: 1150, position: 'relative', top: -50, left: 10, backgroundColor: "white"}}>
      <CardContent  >
      <Typography fontFamily= "Helvetica" gutterBottom variant="h5" component="div" style={{position: "relative", top: 10, left: 330}} >
         Come è pesante questa notte (2024)
        </Typography>

        <Image  src={foto1} alt='Come è pesante questa notte'title= 'Come è pesante questa notte'height={850} width={900}  style={{position: "relative", top: 2, left: 110}} /> 
        <Typography fontFamily= "Helvetica" gutterBottom variant="h5" component="div"pt={5} >
        TRAMA
        </Typography>
        <Typography fontFamily= "Helvetica" variant="body2" color="text.secondary">
        Ognuno attraversa il buio della propria mente cercando una calma apparente, una luce profonda o una  fonte di calore. 
        Questa è la storia di chi cerca di camminare sui propri passi, scosso dal vento freddo dei propri pensieri. 
        Un malessere costante che viene raccontato nella vita di tutti i giorni, attraverso il contatto con gli altri e con la quotidianità.
        D’altronde ciascuno di noi affronta una notte, tormentato o coccolato da un solenne silenzio.
        </Typography>

        <Typography fontFamily= "Helvetica" gutterBottom variant="h5" component="div" pt={3}>
          BALLERINI
        </Typography>
        <Typography  fontFamily= "Helvetica" variant="body2" color="text.secondary">
        Benedetta Giorgini, Noemi D’Addazio, Martina Fasolino, Sabrina Pallotta,
        Letizia Durantini, Angela Misantone, Giulia Misanonte, Delinda Di Gregorio,
        Caterina Adriani, Giulia Di Marco, Pierangelo Di Gregorio, Cecilia Nercide,
        Alessia Rapacchia, Giorgia De Cristofaro, Angelica Sorricchio, Alessia Botta.
        </Typography>
        </CardContent>


      <CardActions>
        <Button size="small" sx={{ backgroundColor: "black", color:"white", position:"relative", left:8}}>Tickets</Button>
       
        <FacebookShareButton  > 
          <FacebookIcon fontSize="large" sx={{ position:"relative", left:20, top:5 }} /> 
        </FacebookShareButton>

        <WhatsappShareButton  > 
          <WhatsAppIcon fontSize="large" sx={{ position:"relative", left:30, top:5 }}  /> 
        </WhatsappShareButton>
      </CardActions>

    </Card>

    
    </Container>
    </Box>




    <Box> 
    <Container> 
   <Card sx={{ height: 1400, width: 1150, position: 'relative', top: 50, left: 10, backgroundColor: "white"}}>
      <CardContent  >
      <Typography gutterBottom variant="h5" component="div" style={{position: "relative", top: 10, left: 450}}  >
          Gli Inquieti (2023)
        </Typography>

        <Image  src={foto} alt='Inquieti'title='Inquieti' priority='true' height={900} width={1000}  style={{position: "relative", top: 2, left: 50}}  /> 
        <Typography gutterBottom variant="h5" component="div" >
          TRAMA
        </Typography>
        <Typography variant="body2" color="text.secondary">
        14 pazienti psichiatrici rinchiusi in manicomio e sottoposti 
        a misure restrittive, raccontano la genesi della loro pazzia, 
        creando una narrazione fatta di disturbi legati alle malattie, 
        alla tossico dipendenza e agli imprevisti della vita, 
        mostrando tuttavia un lato di una realtà comune e universale. 
        </Typography>

        <Typography gutterBottom variant="h5" component="div" pt={3}>
          BALLERINI
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Benedetta Giorgini, Noemi D’Addazio, Martina Fasolino, Sabrina Pallotta,
        Letizia Durantini, Angela Misantone, Giulia Misanonte, Delinda Di Gregorio,
        Caterina Adriani, Giulia Di Marco, Pierangelo Di Gregorio, Cecilia Nercide,
        Alessia Rapacchia, Giorgia De Cristofaro.
        </Typography>
        </CardContent>
        
      <CardActions>
        <FacebookShareButton > 
          <FacebookIcon fontSize="large" sx={{ position:"relative", left:5, top:5 }}/> 
        </FacebookShareButton>

        <WhatsappShareButton  > 
          <WhatsAppIcon fontSize="large" sx={{ position:"relative", left:15, top:5 }}  /> 
        </WhatsappShareButton>
      </CardActions>
    
    </Card>
    </Container>
    </Box>
  
    


   <div style={{ position: 'relative', top: 200}}>
   <Copyright sx={{ pt: 4 }} /> 
   </div>

    </div>
    </>
   
    );
};



*/
