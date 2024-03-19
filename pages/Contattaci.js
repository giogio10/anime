import Typography from "@mui/material/Typography";
import * as React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import vettoriale from "./img/logo_nero.png";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { SocialIcon } from "react-social-icons";
import instagram from "./img/instagram.png";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AppBar from "@mui/material/AppBar";
import MoreIcon from "@mui/icons-material/MoreVert";

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

export default function Fe() {
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

  const navItems = ["Home", "About", "Cast"];
  var mailtoHref =
    "mailto:progetto.anime@gmail.com?subject=SendMail&body=Salve sono...,vorrei contattarla perchè...";
  const Component = <SocialIcon url="https://Instagram.com" />;

  return (
    <>
      <Head>
        {" "}
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
              <Button sx={{ color: "white" }} href="/Galleria">
                {" "}
                GALLERIA{" "}
              </Button>
              <Divider sx={{ my: 1, color: "white" }} />
              <Button sx={{ color: "white" }} href="/Produzioni">
                {" "}
                PRODUZIONI{" "}
              </Button>
              <Divider sx={{ my: 1, color: "white" }} />
              <Button sx={{ color: "white" }} href="/Contattaci">
                {" "}
                CONTATTI{" "}
              </Button>
            </List>
          </List>
        </Drawer>
        <Main>
          <DrawerHeader />
        </Main>

        <section class="sezione-icone program text-center pt-2 ">
          <h1 class="mt-0 text-white"> CONTATTACI </h1>
          <div class="container mt-5">
            <div sx={{ backgroundColor: "black", height: 800, width: 1140 }}>
              <section class="sezione-icone program text-center">
                <div class="container mt-5">
                  <div class="row">
                    <div class="col-lg-6 ">
                      <div class="program-singola mx-auto mb-5 mb-lg-0 text-white ">
                        <p class="lead mb-0 text-white">
                          <a href={mailtoHref} style={{ color: "red" }}>
                            {" "}
                            progetto.anime@gmail.com{" "}
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="col-lg-6 ">
                      <div class=" mx-auto mb-5 mb-lg-4 text-white">
                        <p class="lead mb-0 text-white">C.F: 90022540679</p>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="program-singola mx-auto  mb-5 mb-lg-0 text-white">
                        <IconButton
                          style={{ color: "white" }}
                          href="https://www.facebook.com/profile.php?id=100091281176567"
                        >
                          <FacebookIcon fontSize="large" />
                        </IconButton>
                        <p class="lead mb-0 text-white">Facebook</p>

                        <div className="pt-5">
                          <IconButton
                            href="https://www.instagram.com/progetto_anime_/"
                            style={{ color: "white" }}
                          >
                            <InstagramIcon fontSize="large" />
                          </IconButton>
                          <p class="lead mb-0 text-white">Instagram</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="program-singola mx-auto mb-5 mb-lg-0 text-white">
                        <p class="lead mb-0 text-white">
                          {" "}
                          SEDE LEGALE: Via Monteverdi 44, Pineto(TE){" "}
                        </p>
                        <p class="lead mb-0 text-white">
                          {" "}
                          SEDE OPERATIVA: Body Dancing{" "}
                        </p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.694419268994!2d13.991280267999496!3d42.57445362465987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331be902758deef%3A0x50aad85e0ec614d2!2sBody%20Dancing!5e0!3m2!1sen!2sit!4v1699993349638!5m2!1sen!2sit"
                          width="400"
                          height="280"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section class="sezione-icone  text-center text-grey">
              <div class="container-fluid">
                <div class="row justify-content-center">
                  <div class="col-lg-6">
                    <p class="lead mb-0 text-white">
                      2023° ASSOCIAZIONE CULTURALE ANIME | CF: 90022540679 | GDC
                      WebSite ©
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Box>
    </>
  );
}
