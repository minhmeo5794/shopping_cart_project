import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DetailPage from 'features/Products/pages/DetailPage'
import ListPage from 'features/Products/pages/ListPage'

const Products = () => {
    return (
        <Switch>
            <Route path="/products" component={ListPage} exact />
            <Route path="/products/:productId" component={DetailPage} />
            <Redirect from="/" to="/products" />
        </Switch>
    )
}

export default Products
