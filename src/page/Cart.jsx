import { CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Cart() {
    var cartItem = useSelector((state)=>state.cart.cartItem)
    return (  
      <div className='row justify-content-around'>
    {
        cartItem.map((ele, ind) => {
            return (
                <Card sx={{ maxWidth: 345 }} key={ind} className='mb-4'>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={ele.thumbnail}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {ele.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {ele.description}
                        </Typography>
                        <Typography variant="body2" color="text.primary" >
                            <span className='fs-4'>${ele.price}</span>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" >Remove from Cart</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            )
        })
    }


</div> 
    )
    
}
