import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';


const NavBar = () => {
  return (
    <div >
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'primary',height:"200"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Excel Analytics
          </Typography>
          <SearchIcon style={{ color: 'white', fontSize: 30 }} />
          <NotificationsIcon  sx={{fontSize:25 }}/>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  )
}

export default NavBar
