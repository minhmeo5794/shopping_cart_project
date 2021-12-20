import React from 'react'
import { Box, Typography, makeStyles, Checkbox, FormControlLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        color: '#333',
        borderTop: `1px solid ${theme.palette.grey[300]}`
    },
    listService: {
        margin: 0,
        padding: 0,
        listStyleType: 'none'
    }
}))

const FilterByService = ({ filters, onChange }) => {
    const classes = useStyles()

    const handleServiceChange = (e) => {
        const { name, checked } = e.target
        // const newFilters = { ...filters }
        // if (checked) {
        //     delete newFilters[name]
        // } else {
        //     newFilters[name] = true
        // }

        // onChange(newFilters)
        onChange({
            [name]: checked
        })
    }

    return (
        <Box className={classes.root}>
            <Typography>
                DỊCH VỤ
            </Typography>

            <ul className={classes.listService}>
                {[
                    {
                        value: 'isPromotion',
                        label: 'Có khuyến mãi',
                    },
                    {
                        value: 'isFreeShip',
                        label: 'Miễn phí vận chuyển',
                    }
                ].map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleServiceChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}

            </ul>
        </Box>
    )
}

export default FilterByService
