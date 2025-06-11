import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow,Paper,Box,Typography} from '@mui/material'

const rows = [
  { name: "Anu", email: "anu@gmail.com", phoneno: 9656415263, product: "Electronics", quantity: 5, price: 100 },
  { name: "Manu", email: "manu@gmail.com", phoneno: 8596456932, product: "Clothes", quantity: 5, price: 100 },
  { name: "Manu", email: "manu@gmail.com", phoneno: 9656847596, product: "Groceries", quantity: 5, price: 100 },
  { name: "Manu", email: "manu@gmail.com", phoneno: 8552125212, product: "Books", quantity: 5, price: 100 },
];
const Users = () => {
  return (
    <Box
      sx={{
        minHeight: '180vh',
        minWidth:'180vh',
        backgroundColor:"#e3f2fd",
        padding: 4,
        textAlign:'center'
      }}
    >

      <Paper
        elevation={4}
        sx={{
          backgroundColor: 'white',
          borderRadius: 3,
          overflow: 'hidden',
          width: '600%', 
          height:'200%', 
          marginBottom:"15px",            // Make table wide
          maxWidth: 1000,             // Limit maximum width
                     // Center horizontally (marginX: auto)
             marginLeft:"100px"
        }}
      >
        <Table >
          <TableHead>
            <TableRow sx={{ backgroundColor: 'white' }}>
              <TableCell sx={{ color: '#1ABC9C', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ color: '#1ABC9C', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ color: '#1ABC9C', fontWeight: 'bold' }}>Phone No</TableCell>
              <TableCell sx={{ color: '#1ABC9C', fontWeight: 'bold' }}>Product</TableCell>
              <TableCell sx={{ color: '#1ABC9C', fontWeight: 'bold' }}>Quantity</TableCell>
              <TableCell sx={{ color: '#1ABC9C', fontWeight: 'bold' }}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{
                  backgroundColor:"white",
                  '&:hover': {
                    backgroundColor: '#e0f2fe',
                  },
                }}
              >
                <TableCell style={{color:"black"}}>{row.name}</TableCell>
                <TableCell style={{color:"black"}}>{row.email}</TableCell>
                <TableCell style={{color:"black"}}>{row.phoneno}</TableCell>
                <TableCell style={{color:"black"}}>{row.product}</TableCell>
                <TableCell style={{color:"black"}}>{row.quantity}</TableCell>
                <TableCell style={{color:"black"}}>₹{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};
export default Users
