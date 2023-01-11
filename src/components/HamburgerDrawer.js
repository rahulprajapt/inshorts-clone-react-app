import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import categories from '../data/category';
import { Category } from '@mui/icons-material';
import { borderRadius } from '@mui/system';


export default function SwipeableTemporaryDrawer(setCategory) {
  const [state, setState] = React.useState({
    left: false,
  });

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
      <ListItem>Categories</ListItem>
    </List>
    <Divider/>
      <List>
      {/* ['Inbox', 'Starred', 'Send email', 'Drafts', ] */}
        {categories.map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton 
            style={{height:40, borderRadius: 7}}
            onClick={()=> setCategory(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/></Button>
          <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
      ))}
    </div>
  );
}