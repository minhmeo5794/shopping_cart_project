import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { formatPrice } from 'utils'

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: '15px',
        borderBottom: `1px solid ${theme.palette.grey[300]}`
    },

    shortDescription: {
        fontSize: '14px',
        margin: '15px 0'
    },

    boxPrice: {
        padding: '10px',
        backgroundColor: theme.palette.grey[100]
    },

    salePrice: {
        fontSize: '35px',
        marginRight: '15px'
    },

    originalPrice: {
        marginRight: '15px',
        textDecoration: 'line-through'
    },

    promotionPercent: {

    },
}))

const ProductInfo = ({ product }) => {
    const classes = useStyles()
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product


    return (
        <Box className={classes.root}>
            <Typography component="h1" variant="h4">
                {name}
            </Typography>

            <Typography className={classes.shortDescription}>
                {shortDescription}
            </Typography>

            <Box className={classes.boxPrice}>
                <Typography className={classes.salePrice} component="span">
                    {formatPrice(salePrice)}
                </Typography>

                {promotionPercent > 0 && (
                    <>
                        <Typography className={classes.originalPrice} component="span">
                            {formatPrice(originalPrice)}
                        </Typography>

                        <Typography className={classes.promotionPercent} component="span">
                            {` -${promotionPercent}%`}
                        </Typography>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default ProductInfo
