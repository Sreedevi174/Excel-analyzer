import { Box, Container } from '@mui/material'
import React from 'react'
import SummaryCard from '../SummaryCard'
import SalesChart from '../SalesChart'
import ProductTable from '../ProductTable'
import NavBar from '../NavBar'


const Dashboard = () => {
  return (
    <div style={{backgroundColor:"#e3f2fd",  overflow: 'hidden'}}  >
      <Container maxWidth={false}
    disableGutters
    sx={{
      height: '100%',
      width: '100%',
      overflowY: 'auto', // Scroll only vertically
      padding: 2,        // Optional spacing
    }}>
        <SummaryCard/>
        <Box sx={{mt:4}}>
          <SalesChart/>
        </Box>
        <ProductTable/>
      </Container>
      
    </div>
  )
}

export default Dashboard
