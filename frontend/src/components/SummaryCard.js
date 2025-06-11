import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'





const cards = [
  { title: 'TOTAL PROFIT', value: "$50k", color: "green", icon: < AttachMoneyIcon />, desc: "Profit generated after expense" },
  { title: "TOTAL SALES", value: "$40k", color: "blue", icon: <TrendingUpIcon />, desc: "All products sold this month" },
  { title: "TOTAL PURCHASE", value: "$60k", color: "purple", icon: <ShoppingCartIcon />, desc: "Cost of items" }
]

const SummaryCard = () => {
  return (
    <div>
      <Grid container spacing={6}>

        {cards.map(({ title, value, color, icon, desc }) => (
          <Grid item xs={12} sm={4} key={title} >
            <Card sx={{
              backgroundColor:"white",
              width: 350,
              color:" #1ABC9C",
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6,
                borderRadius:"5px"
              },
            }}>
              <CardContent>
                <Box display={'flex'} alignItems={'center'} mb={1} gap={1} >
                  <Box>
                    {icon}
                  </Box>
                  <Typography variant='subtitle2' color='black'>
                    {title}
                  </Typography>
                </Box>
                <Typography variant='body2' color='grey'>
                  {desc}
                </Typography>
                <Typography variant='h6' sx={{ color }}>
                  {value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default SummaryCard
