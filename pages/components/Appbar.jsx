import { Toolbar, AppBar, Button } from "@mui/material";
import { Box } from "@mui/system";
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Appbar = () => {
    const appItems = ['Product', 'Services', 'Contact', 'Log in'];
    return (
        <Box>
            <AppBar sx={{ background: 'transparent' }}>
                <Toolbar>
                    <Box sx={{height:70, width:70}} component='img' src="https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op" alt="amg"></Box>
                    <Box  display='flex'sx={{ justifyContent: 'flex-end' }} >
                            {appItems.map((text, index) => {
                                return (
                                    <Box key={index} sx={{m: 2, color: 'white'}}>{text}</Box>
                                )
                            })}
                        <Button sx={{ borderColor: 'white', border: '2px solid #FFFFFF'}} variant="outlined">Get Access</Button>
                    </Box>    
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Appbar;