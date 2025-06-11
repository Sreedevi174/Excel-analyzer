import BarChart from '@mui/icons-material/BarChart'
import { Box, Grid, Paper, Tooltip, Typography, colors } from '@mui/material'
import React from 'react'
import { Bar, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'


const lineData = [
  { name: 'Jan', sales: 3000 },
  { name: 'Feb', sales: 4000 },
  { name: 'Mar', sales: 6000 },
  { name: 'Apr', sales: 5000 },
  { name: 'May', sales: 8000 },
];

const pieData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Groceries', value: 300 },
  { name: 'Books', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const SalesChart = () => {
   
    
  return (
    <div style={{width:"100%", height:400}}>
<Grid container spacing={5}>
      <Grid item xs={12} md={8} width={800}
      sx={{ transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: 6,
        borderRadius:"5px"
      },}}  >
        <Paper sx={{ p: 2 ,backgroundColor:"white"}}>
          <Typography variant="h6" gutterBottom style={{color:'black'}}>
            Monthly Sales Overview
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData} >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} sx={{ transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6,
                borderRadius:"5px"
              },}} >
      <Paper sx={{ p: 3 ,backgroundColor:"white"}}>
      <Box sx={{ width: '100%', height: 300, backgroundColor:"white" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={({ percent }) =>`${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>

      {/* Custom Legend */}
      <Grid container spacing={1} mt={2}>
        {pieData.map((entry, index) => (
          <Grid
            item
            xs={6}
            key={entry.name}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: COLORS[index % COLORS.length],
              }}
            />
            <Typography variant="body2">{entry.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
      </Grid>
    </Grid>
    </div>
  )
}

export default SalesChart

