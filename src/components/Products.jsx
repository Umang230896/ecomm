import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Addtocart } from '../slice/cart/cartSlice';

export default function Products(props) {

    const [products, setproducts] = React.useState([])
    const [isdata, setisdata] = React.useState(false)

    var dispatch = useDispatch()

    React.useEffect(() => {

        if (props.allproducts == '' && props.search == '') {

            axios.get('https://dummyjson.com/products')
                .then((res) => {
                    // console.log(res.data.products);
                    setTimeout(() => {
                        setproducts(res.data.products)
                        setisdata(true)
                    }, 2000);
                })

        } else if (props.search == '' && props.allproducts != '') {

            axios.get(`https://dummyjson.com/products/category/${props.allproducts}`)
                .then((res) => {
                    console.log(res.data.products);
                    setproducts(res.data.products)
                    setisdata(true)
                })

        } else if (props.allproducts == '' && props.search != '') {

            axios.get(`https://dummyjson.com/products/search?q=${props.search}`)
                .then((res) => {
                    console.log(res.data.products);
                    setproducts(res.data.products)
                    setisdata(true)

                })
        }
        else {

            axios.get(`https://dummyjson.com/products/search?q=${props.search}`)
                .then((res) => {
                    console.log(res.data.products);
                    setproducts(res.data.products)
                    setisdata(true)

                })

            }
    }, [props.allproducts, props.search])

    return isdata != [] ? <div className='row justify-content-around'>
        {
            products.map((ele, ind) => {
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
                            <Button size="small" onClick={() => dispatch(Addtocart(ele))}>Add to Cart</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )
            })
        }


    </div> : <span class="loader"></span>
   
}
