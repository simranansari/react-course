import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {

    const products = [
        {
         TITLE: "Product 1",
         PRICE: 10,
         DESCRIPTION:"First Product"
        },
        {
            TITLE: "Product 2",
            PRICE: 20,
            DESCRIPTION:"Second Product"
           }
        ];
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product TITLE={products[0].TITLE} PRICE={products[0].PRICE} DESCRIPTION={products[0].DESCRIPTION}/>
            <Product TITLE={products[1].TITLE} PRICE={products[1].PRICE} DESCRIPTION={products[1].DESCRIPTION}/>
        </div>
    );
}