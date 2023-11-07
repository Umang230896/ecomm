import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Sidebar(props) {

    const [categories, setcategories] = useState([])
    const [isdata, setisdata] = useState(false)

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                // console.log(res.data);
                setTimeout(()=>{
                    setcategories(res.data)
                },4000) 
                setisdata(true)
            })


    }, [])

    const all =  <h3 onClick={() => { props.changeProducts('') }}><span className='btn col-12'>All Products</span></h3>

   

    return isdata ? <div className='bg-info pt-3'>
        {all}
        {
            categories.map((ele, ind) => {
                return <h3 key={ind} onClick={() => { props.changeProducts(ele) }}><span className='btn col-12'>{ele}</span></h3>
            })
        }
    </div> : <span className='loader'></span>


}
