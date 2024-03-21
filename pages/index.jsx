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
import { grey } from "@mui/material/colors";

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

        <section className=" program bg-light text-center bg-black  pb-5 ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={min} alt='50'className=" mb3 widthimage mt-5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sezione-icone bg-grey text-center sfondoAbout ">
          <href id="ancoraAbout" />
          <h1 className="mt-0 text-white"> ABOUT US </h1>
          <div className="container-fluid mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <p className="lead mb-0 text-white">
                  Animè nasce dall'idea collettiva di voler creare un percorso
                  professionale, attraverso cui avvicinare i giovani danzatori e
                  danzatrici allo studio intensivo delle molteplici proiezioni
                  della danza nel mondo contemporaneo. Con lo scopo principale
                  di creare una memoria tecnica e artistica in ciascuno, il
                  progetto ha come obiettivo quello di far acquisire una
                  coscienza coreutica, raggiunta attraverso l'analisi del
                  linguaggio corporeo. La formazione dei ragazzi, basata su un
                  adeguato programma fisico e mentale consentirà loro di entrare
                  in contatto con una molteplicità di forme e stili della danza
                  contemporanea, affinché sarà conseguita da loro una maturità
                  artistica, tale da rendere più naturale l'approccio con la
                  coreografia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sezione-icone program text-center sfondoProgram ">
          <href id="ancoraProgram" />
          <h1 className="mt-0 text-white"> PROGRAM </h1>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={fisica} alt='fisica' className=" mb-2 widthimage mt-5" />
                  <h3> Preparazione Fisica</h3>
                  <p className="font-weight-light mb-0 mt-4">
                    {" "}
                    La preparazione di un danzatore e di una danzatrice non può
                    prescindere da quella fisica. Un allenamento duro e sodo è
                    necessario per rinforzare i principali gruppi muscolari e
                    predisporli ad un movimento più morbido e lineare.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 ">
                <div className=" mx-auto mb-5 mb-lg-4 text-white">
                  <Image src={respiro} alt='respiro' className=" mb-2 widthimageRespiro mt-0" />
                  <h3> Respiro</h3>
                  <p className="font-weight-light mb-0 mt-4 ">
                    {" "}
                    Per un danzatore ed una danzatrice, respirare è fondamentale
                    per ossigenare il corpo e per rinforzare l’animo. È
                    importante accompagnare i ragazzi in un percorso verso la
                    conoscenza della respirazione, utilizzando naso e bocca, per
                    percepire le vibrazioni della propria energia.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="program-singola mx-auto  mb-5 mb-lg-0 text-white">
                  <Image src={coreo} alt='coreografia' className=" mb-2 widthimage mt-4" />
                  <h3> Laboratorio Coreografico </h3>
                  <p className="font-weight-light mb-0 mt-4 ">
                    {" "}
                    L’obiettivo di un laboratorio coreografico non è solo quello
                    di abituare le ragazze e i ragazzi all’esecuzione di una
                    coreografia, bensì di consegnare loro gli strumenti per
                    creare autonomamente le proprie creazioni, rendendoli
                    soprattutto disinvolti nell’improvvisazione.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white">
                  <Image src={teatro} alt='teatro' className="mb-2 widthimage mt-5" />
                  <h3> Laboratorio Teatrale </h3>
                  <p className="font-weight-light mb-0 mt-4">
                    {" "}
                    Partecipare ad un laboratorio teatrale significa
                    intraprendere un percorso grazie al quale conoscere i mezzi
                    per esprimere la propria arte, gestire lo spazio e
                    raggiungere una piena consapevolezza del sé e dell’altro.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sezione-icone program bg-light text-center bg-black bg-opacity-10">
          <href id="ancoraCast" />
          <h1 className="mt-2 text-white"> CAST </h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mt-5">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                  <Image src={Giorgia} alt='Giorgia' className="rounded-circle mb-2 widthimage" />
                  <h3 onClick={handleOpenGio}> GIORGIA DE CRISTOFARO </h3>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={c}
                    onClick={handleCloseGio}
                  >
                    <h1> DIREZIONE ARTISTICA & WEB DEVELOPER </h1>
                  </Backdrop>
                </div>
              </div>

              <div className="col-lg-6 mt-5">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white">
                  <Image src={Cecilia} alt='Cecilia' className="rounded-circle mb-2 widthimage" />
                  <h3 onClick={handleOpenCecilia}> CECILIA NERCIDE </h3>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={ceci}
                    onClick={handleCloseCecilia}
                  >
                    <h1> DIREZIONE ARTISTICA & GRAPICH DESIGNER </h1>
                  </Backdrop>
                </div>
              </div>

              <div className="col-lg-6 mt-5">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white">
                  <Image src={Jacopo} alt='Jacopo' className="rounded-circle mb-2 widthimage" />
                  <h3 onClick={handleOpenJac}> JACOPO D'ALLEVA </h3>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={jac}
                    onClick={handleCloseJac}
                  >
                    <h1> AIUTO ALLA SCENEGGIATURA </h1>
                  </Backdrop>
                </div>
              </div>

              <div className="col-lg-6 mt-5">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white">
                  <Image src={Ilaria} alt='Ilaria' className="rounded-circle mb-2 widthimage" />
                  <h3 onClick={handleOpenIla}> ILARIA MONACO </h3>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={Ila}
                    onClick={handleCloseIla}
                  >
                    <h1> PRESIDENTE ASSOCIAZIONE </h1>
                  </Backdrop>
                </div>
              </div>

              <div className="col-lg-6 mt-5">
                <div className="program-singola mx-auto mb-5 mb-lg-0 text-white">
                  <Image alt='Olga'
                    src={fotoOlga}
                    className="rounded-circle mb-2 widthimage"
                  />
                  <h3 onClick={handleOpenOlga}> OLGA MERLINI </h3>
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                    open={Olga}
                    onClick={handleCloseOlga}
                  >
                    <h1> LABORATORIO TEATRALE </h1>
                  </Backdrop>
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
                  2023° ASSOCIAZIONE CULTURALE ANIME 
                  
                </p>
                <p className="lead mb-0 text-white">
                   CF:90022540679| GDCWebSite ©
                </p>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </>
  );
}
