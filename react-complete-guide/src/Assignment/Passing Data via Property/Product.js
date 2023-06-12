import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.TITLE}</h2>
            <p className="price">${props.PRICE}</p>
            <p>{props.DESCRIPTION}</p>
        </article>
    );
}