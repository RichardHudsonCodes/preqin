import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { InvestorDisplay } from '../models/types';
import { InvestorAPI } from '../api/api';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'firm_id', headerName: 'Firm ID', flex: 50 },
    { field: 'firm_name', headerName: 'Firm Name', flex: 100 },
    { field: 'date_added', headerName: 'Date Added', flex: 100 },
    { field: 'firm_type', headerName: 'Firm Type', flex: 100 },
    { field: 'address', headerName: 'Address', flex: 200 },
]; 

const InvestorGrid: React.FC = () => {

    const [data, setData] = useState<InvestorDisplay[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await InvestorAPI.getInvestors();
        setData(data.map( d => {return {
          firm_id: d.firm_id, 
          firm_name: d.firm_name,
          date_added: new Date(d.date_added).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
          firm_type: d.firm_type,
          address: `${d.address}, ${d.city}, ${d.country}, ${d.postal_code}`
        } as InvestorDisplay}))
      }
      fetchData();
    }, [])

    let navigate = useNavigate();

    const handleRowClick: GridEventListener<'rowClick'> = (params) => { 
        navigate(`/investor/${params.row.firm_id}`);
    };
    
    return (
        <div>
            <DataGrid 
            getRowId={(row) => row.firm_id.toString()}
            rows={data} 
            columns={columns} 
            onRowClick={handleRowClick}
            initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
            pageSizeOptions={[5, 10, 20]}
           />
        </div>
    );
};

export default InvestorGrid;