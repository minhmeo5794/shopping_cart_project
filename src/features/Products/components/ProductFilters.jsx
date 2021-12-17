import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'
import FilterByService from './Filters/FilterByService'

const useStyles = makeStyles(theme => ({
    root: {
        color: '#333',
    }
}))

const ProductFilters = ({ filters, onChange }) => {
    const classes = useStyles()

    const handleFilterByCategory = (category) => {
        const newFilters = {
            'category.id': category.id
        }

        onChange(newFilters)
    }

    const handleFilterByPrice = (values) => {
        onChange(values)
    }

    const handleFilterByService = (values) => {
        onChange(values)
        // const newValues = { ...values }
        // newValues.isFreeShip ? delete newValues.isFreeShip : newValues.isFreeShip = true
        // newValues.isPromotion ? delete newValues.isPromotion : newValues.isPromotion = true

        // onChange(newValues)
    }

    return (
        <Box className={classes.root}>
            <FilterByCategory onChange={handleFilterByCategory} />
            <FilterByPrice onChange={handleFilterByPrice} />
            <FilterByService filters={filters} onChange={handleFilterByService} />
        </Box>
    )
}

export default ProductFilters
