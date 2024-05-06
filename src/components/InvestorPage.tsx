import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AssetClass } from '../models/types';
import { useParams } from 'react-router-dom';

const InvestorPage: React.FC = () => {

    const [displayMenu, setDisplayMenu] = React.useState(false);
    const { id } = useParams<{ id: string }>();
    const buttonRef = React.useRef(null);

    React.useEffect(() => { }, [displayMenu]);

    return (
        <div className='App-header'>
            <h1>Investor {id} </h1>
            <Button ref={buttonRef} variant="contained" onClick={() => setDisplayMenu(!displayMenu)} >
                Asset Class
            </Button>
            <Menu
                anchorEl={buttonRef.current}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={displayMenu}
                onClose={() => setDisplayMenu(false)}>
                {Object.keys(AssetClass).map((key) => <MenuItem  key={key}>{key.replace('_', ' ')}</MenuItem>)}
            </Menu>
        </div>
    );
}

export default InvestorPage;