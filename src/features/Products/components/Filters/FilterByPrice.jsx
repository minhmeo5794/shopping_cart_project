import React, { useState } from 'react'
import { Box, Typography, makeStyles, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        color: '#333',
        borderTop: `1px solid ${theme.palette.grey[300]}`
    },
    boxField: {
        margin: '5px 0 15px 0',
        display: 'flex',
        alignItems: 'center',
    },
    button: {

    }
}))

const FilterByPrice = ({ onChange }) => {
    const classes = useStyles()
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })

    const handlePriceChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handlePriceFilter = () => {
        onChange(values)
    }

    return (
        <Box className={classes.root}>
            <Typography>
                CHỌN KHOẢNG GIÁ
            </Typography>

            <Box className={classes.boxField}>
                <TextField value={values.salePrice_gte} name="salePrice_gte" onChange={handlePriceChange} />

                <span style={{ margin: '0 10px' }}>-</span>

                <TextField value={values.salePrice_lte} name="salePrice_lte" onChange={handlePriceChange} />
            </Box>

            <Button
                className={classes.button}
                variant="outlined"
                color="primary"
                onClick={handlePriceFilter}
            >
                Áp dụng
            </Button>
        </Box>
    )
}

export default FilterByPrice
