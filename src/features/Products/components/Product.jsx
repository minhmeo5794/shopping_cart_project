import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/host'


const useStyles = makeStyles(theme => ({
    boxImg: {
        padding: '5px',
    },
    thumbnail: {
        width: '100%',
        border: '1px solid #EFF0F2',
        borderRadius: '5px',
        verticalAlign: 'middle'
    },
    name: {
        textTransform: 'lowercase'
    },
    price: {
        '& > .priceValue': {
            display: 'inline',
            margin: 0,
            fontWeight: 'bold',
            color: '#555'
        }
    }
}))

const Product = ({ product }) => {
    const classes = useStyles()

    const thumbnailValue = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail.url}`
        : THUMBNAIL_PLACEHOLDER

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box className={classes.boxImg}>
                <img className={classes.thumbnail} src={thumbnailValue} alt={product.name} />
            </Box>
            <Box className={classes.name}>
                {product.name}
            </Box>
            <Box className={classes.price}>
                <Typography className="priceValue">
                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Typography>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
            </Box>
        </Grid>
    )
}

export default Product
