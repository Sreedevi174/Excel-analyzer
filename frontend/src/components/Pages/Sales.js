import { Paper, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const rows=[
  {salesid:101,date:"01/04/2025", name:"anu", productname:"electronics",quantity:10,unitprice:100,totalamnt:1000,discount:5,tax:2,paymentmethod:"offline",status:"completed"},
  {salesid:102,date:"05/05/2025", name:"manu", productname:"clothes",quantity:5,unitprice:700,totalamnt:1200,discount:15,tax:2,paymentmethod:"online",status:"cancelled"},
  {salesid:103,date:"06/05/2025", name:"anju", productname:"books",quantity:10,unitprice:500,totalamnt:5000,discount:25,tax:2,paymentmethod:"offline",status:"completed"},
  {salesid:104,date:"06/06/2025", name:"anna", productname:"Groceries",quantity:5,unitprice:1000,totalamnt:5000,discount:15,tax:2,paymentmethod:"online",status:"pending"},
  
]
const Sales = () => {
  return (
    <div>
      <Paper>
        <table>
          <TableHead>
            <TableRow>
              <TableCell>salesId</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>productname</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total amount</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Tax</TableCell>
              <TableCell>Payment method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
        </table>
      </Paper>
      {/* <TableBody >
                {rows.map((row,idx)=>(
<TableRow key={idx} >
<TableCell sx={{color:"white"}}>
    {row.product}
</TableCell>
<TableCell sx={{color:"white"}}>
    {row.price}
</TableCell>
<TableCell sx={{color:"white"}}>
    {row.qty}
</TableCell>
<TableCell sx={{color:"white"}}>
    {row.amount}
</TableCell>
</TableRow>
                ))}
            </TableBody> */}
    </div>
  )
}

export default Sales
