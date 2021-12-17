import React from 'react'
import { Box, Grid } from '@material-ui/core'
import Product from './Product'

const ProductList = ({ productList }) => {
    return (
        <Box>
            <Grid container spacing={3}>
                {productList.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </Grid>
        </Box>
    )
}

export default ProductList
