import React from 'react'
import { Box, Tab, Tabs, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '20px'
    }
}))

const ProductSort = ({ filters, onChange }) => {
    const classes = useStyles()

    const handleSortChange = (e, newSortValue) => {
        onChange(newSortValue)
    }

    return (
        <Box className={classes.root}>
            <Tabs
                value={filters._sort}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleSortChange}
            >
                <Tab label="Giá thấp tới cao" value="salePrice:ASC" />
                <Tab label="Giá cao tới thấp" value="salePrice:DESC" />
            </Tabs>
        </Box>
    )
}

export default ProductSort
