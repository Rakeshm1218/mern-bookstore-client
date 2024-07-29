// import React, { useContext } from "react";

// import { Sidebar } from "flowbite-react";
// import { BiBuoy } from "react-icons/bi";
// import {
//   HiArrowSmRight,
//   HiChartPie,
//   HiHome,
//   HiInbox,
//   HiOutlineCloudUpload,
//   HiShoppingBag,
//   HiSupport,
//   HiTable,
//   HiUser,
//   HiViewBoards,
// } from "react-icons/hi";

// //font-awesome icons

// import Profile from "../assets/profile.jpg"
// import { AuthContext } from "../authentication/AuthProvider";

// const SideBar = () => {
//   const {user} = useContext(AuthContext)
//   return (
//     <Sidebar aria-label="Sidebar with content separator example" >
//       <Sidebar.Logo href="/" img={user?.photoURL}imgAlt="">
//         <p>
//           {
//             user?.displayName || "Demo User"
//           }
//         </p>
//       </Sidebar.Logo>
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
//             Dashboard
//           </Sidebar.Item>
//           <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
//             Upload Book
//           </Sidebar.Item>
//           <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
//             Manage Books
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiUser}>
//             Users
//           </Sidebar.Item>
//           <Sidebar.Item href="#" icon={HiShoppingBag}>
//             Products
//           </Sidebar.Item>
//           <Sidebar.Item href="/login" icon={HiArrowSmRight}>
//             Sign In
//           </Sidebar.Item>
//           <Sidebar.Item href="/logout" icon={HiTable}>
//             Log Out
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="/" icon={HiHome}>
//             Home
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// };

// export default SideBar;
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import UploadIcon from "@mui/icons-material/Upload";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation, useNavigate } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import { AuthContext } from "../authentication/AuthProvider";


const drawerWidth = 240;

export const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-300px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `-60px`,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: 0,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(()=> {
    setCurrentPath(location.pathname);

  },[location])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    if(path === currentPath) {
      window.location.reload();
    }
    setOpen(false);
  }
   
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar  position="fixed" open={open}>
        <Toolbar className="bg-black text-purple-700">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/admin/dashboard">
            <Typography variant="h6" noWrap component="div" >
              Dashboard
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backcolor: "black",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {[
            {
              link: "Home",
              path: "/",
              icon: <HomeIcon />,
            },
            {
              link: "Upload Book",
              path: "/admin/dashboard/upload",
              icon: <UploadIcon />,
            },
            
            {
              link: "Manage Book",
              path: "/admin/dashboard/manage",
              icon: <Inventory2Icon />,
            },
            { link: "Logout", path: "/logout" ,icon: <LogoutIcon/>},
          ].map((item, index) => (
            <Link to={item.path} onClick={handleLinkClick}>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.link} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        
      </Drawer>
      <Main open={open}></Main>
    </Box>
  );
}
