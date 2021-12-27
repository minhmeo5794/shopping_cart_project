import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/host'
import { formatPrice } from 'utils'
import { useHistory, useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    product: {
        cursor: 'pointer',
    },
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
    const history = useHistory()
    const { url } = useRouteMatch()

    const thumbnailValue = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail.url}`
        : THUMBNAIL_PLACEHOLDER


    const handleClick = () => {
        history.push(`${url}/${product.id}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box onClick={handleClick} className={classes.product}>
                <Box className={classes.boxImg}>
                    <img className={classes.thumbnail} src={thumbnailValue} alt={product.name} />
                </Box>
                <Typography className={classes.name}>
                    {product.name}
                </Typography>
                <Box className={classes.price}>
                    <Typography className="priceValue">
                        {formatPrice(product.salePrice)}
                    </Typography>
                    {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
                </Box>
            </Box>
        </Grid>
    )
}

export default Product
