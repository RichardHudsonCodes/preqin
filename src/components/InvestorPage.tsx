import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AssetClass, Commitment } from '../models/types';
import { useParams } from 'react-router-dom';
import { InvestorAPI } from '../api/api';
import DataTable from './table';

const InvestorPage: React.FC = () => {

    const [displayMenu, setDisplayMenu] = React.useState(false);
    const { id } = useParams<{ id: string }>();
    const buttonRef = React.useRef(null);
    const [data, setData] = React.useState<Commitment[]>([]);
    const [assetClass, setAssetClass] = React.useState<string | undefined>(undefined);

    const fetchData = async (assetClass: string) => {
        if (!assetClass) return;
        const response = await InvestorAPI.getCommitments(id as string, assetClass)
        setData(response);
    };

    React.useEffect(() => { }, [displayMenu]);
    React.useEffect(() => { fetchData(assetClass as string)}, [assetClass] );

    return (
        <div className='App-header'>
            <h1>Investor {id} </h1>
            <h2>{assetClass ?? 'Choose Asset Class'}</h2>
            <Button ref={buttonRef} variant="contained" onClick={() => setDisplayMenu(!displayMenu)} >
                Asset Class
            </Button>
            <Menu
                anchorEl={buttonRef.current}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={displayMenu}
                onClose={() => setDisplayMenu(false)}>
                {
                    Object.keys(AssetClass).map((key) => {
                        const assetKey = key as keyof typeof AssetClass;
                        return (<MenuItem key={key} onClick={() => setAssetClass(AssetClass[assetKey])}>{key.replace('_', ' ')}</MenuItem>)
                    })
                }
            </Menu>
            <DataTable data={data}/>
        </div>     
    );
}

export default InvestorPage;