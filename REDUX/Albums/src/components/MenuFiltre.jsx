import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch } from 'react-redux';
import { trieClear, trierAZ, trierZA, trierScoreCROI, trierScoreDCROI } from '../eAlbums/eAlbumSlice';

const MenuFiltre = () => {

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };

    const filtreAZ = () => {
       dispatch(trierAZ());
       handleClose(); 
    }

    const filtreZA = () => {
        dispatch(trierZA())
        handleClose(); 
    }

    const filtreCROI = () => {
        dispatch(trierScoreCROI());
        handleClose(); 
    }

    const filtreDCROI = () => {
        dispatch(trierScoreDCROI())
        handleClose(); 
    }

    const filtreClear = () => {
        dispatch(trieClear());
    }

    return (
        <>
            <div>
      <Button
        variant='contained'
        color='success'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Trier
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={filtreClear}>pas de trie</MenuItem>
        <MenuItem onClick={filtreAZ}>A <ArrowRightAltIcon /> Z</MenuItem>
        <MenuItem onClick={filtreZA }>Z <ArrowRightAltIcon /> A</MenuItem>
        <MenuItem onClick={filtreCROI }>Score croissant</MenuItem>
        <MenuItem onClick={filtreDCROI }>Score décroissant</MenuItem>
      </Menu>
    </div>

        </>
    )
}

export default MenuFiltre