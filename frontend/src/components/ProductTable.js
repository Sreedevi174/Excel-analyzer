import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box
  } from '@mui/material';
  import React from 'react';
  
  const rows = [
    { product: "Product A", price: 10, qty: 100, amount: 100 },
    { product: "Product B", price: 10, qty: 200, amount: 200 },
    { product: "Product C", price: 20, qty: 200, amount: 200 },
    { product: "Product D", price: 10, qty: 200, amount: 200 },
  ];
  
  const ProductTable = () => {
    return (
      <Box sx={{ mt: 4, width: '100%', overflowX: 'auto' }}>
        <Paper sx={{ backgroundColor: 'white' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#1ABC9C' }}>Product</TableCell>
                <TableCell sx={{ color: '#1ABC9C' }}>Price</TableCell>
                <TableCell sx={{ color: '#1ABC9C' }}>Quantity</TableCell>
                <TableCell sx={{ color: '#1ABC9C' }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ color: 'black' }}>{row.product}</TableCell>
                  <TableCell sx={{ color: 'black' }}>{row.price}</TableCell>
                  <TableCell sx={{ color: 'black' }}>{row.qty}</TableCell>
                  <TableCell sx={{ color: 'black' }}>{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    );
  };
  
  export default ProductTable;
  