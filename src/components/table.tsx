import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


interface DataTableProps {
    data: any[]; // Replace 'any' with the type of your data
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="data table">
                <TableHead>
                    <TableRow>
                        {/* Add table header cells here */}
                        {Object.keys(data[0]).map((key) => (
                            <TableCell key={key}>{key.replace('_', ' ')}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {/* Add table cells here */}
                            {Object.values(row).map((value, index) => (
                                <TableCell key={index}>{value as string}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;