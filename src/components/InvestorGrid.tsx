import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { InvestorDisplay } from '../models/types';


interface DataGridProps {
    data: InvestorDisplay[]; // Replace 'any' with the type of your data
}

const columns: GridColDef[] = [
    { field: 'firm_id', headerName: 'Firm ID', flex: 50 },
    { field: 'firm_name', headerName: 'Firm Name', flex: 100 },
    { field: 'date_added', headerName: 'Date Added', flex: 100 },
    { field: 'firm_type', headerName: 'Firm Type', flex: 100 },
    { field: 'address', headerName: 'Address', flex: 200 },
]; 


const InvestorGrid: React.FC<DataGridProps> = ({ data }) => {

    return (
        <div>
            <DataGrid 
            getRowId={(row) => row.firm_id.toString()}
            rows={data} 
            columns={columns} 
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