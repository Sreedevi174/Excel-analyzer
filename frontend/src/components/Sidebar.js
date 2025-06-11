import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/PersonAdd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
;



const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />,path:'/dashboard' },
    { text: 'File Uploader', icon: <AttachMoneyIcon />,path:'/fileuploader' },
    // { text: 'Sales', icon: <BarChartIcon />,path:'/sales' },
    { text: 'Users', icon: <PeopleIcon />,path:'/users' },
    { text: 'Help', icon: <HelpIcon />,path:'/help' },
    { text: 'Settings', icon: <SettingsIcon />,path:'/settings' },
    { text: 'Report', icon: <ReportIcon />,path:'/report' },
     {text: "Login",icon:<PersonIcon/>,path:"/login"},
]
const Sidebar = () => {
    return (
    
            <Drawer
            variant="permanent"
            sx={{
              width: 240,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
                backgroundColor: '#28273e',
                color: 'yellow',
              },
            }}>
                <Typography variant='h6' color='grey' fontFamily={"Segoe UI"} textAlign={"center"}  sx={{marginTop:"15px" }} >
                    Excel Analyzer
                </Typography>
                <List>
                    {
                        menuItems.map(({ text, icon,path }) => (
                            <ListItem key={text} component={Link} to={path} sx={{ '&:hover': { backgroundColor:"#7178bd",color:''},marginTop:"7px" }}>
                                <ListItemIcon sx={{color:'#2196f3'}}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{color:'#2196f3'}} />
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
     
    )
}

export default Sidebar
