import React from 'react'
import { Box } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/host'


const ProductThumbnail = ({ product }) => {

    const thumbnailValue = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail.url}`
        : THUMBNAIL_PLACEHOLDER


    console.log(product);


    return (
        <Box style={{ padding: '10px' }}>
            <img src={thumbnailValue} alt={product.name} width="100%" />
        </Box>
    )
}

export default ProductThumbnail
