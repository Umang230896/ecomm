import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'
import { useSelector } from 'react-redux'

export default function Home() {

    var cartItem = useSelector( (state)=>state.cart.cartItem )

    const [allproducts, setallproducts] = useState('')
    const [search, setsearch] = React.useState('')

    function changeProducts(category) {
        setallproducts(category)
    }

    function seachProduct(value) {
        setsearch(value)
    }

    return (
        <div>
            <h1>hello = {cartItem.length}</h1>
            <Header seachProduct={seachProduct}/>
            {allproducts}
            <section className='row'>
                <div className='sidebar col-2 '>
                    <Sidebar changeProducts={changeProducts} />
                </div>
                <div className='products col-10 pt-3'>
                    <Products allproducts={allproducts}  search={search}/>
                </div>
            </section>
        </div>
    )
}
