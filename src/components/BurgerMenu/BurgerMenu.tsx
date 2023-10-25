import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from '../Navigation/Navigation';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event && event.type === 'keydown') {
        const keyboardEvent = event as React.KeyboardEvent;
        if (keyboardEvent.key === 'Tab' || keyboardEvent.key === 'Shift') {
          return;
        }
      }

      setIsOpen(open);
    };

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer(true)} edge="start">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Navigation />
        </div>
      </Drawer>
    </div>
  );
}
