import React, { useEffect, useState } from 'react'
import { Box, Chip, makeStyles } from '@material-ui/core'
import categoryApi from 'api/categoryApi'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '15px',
        textAlign: 'left'
    },
    chip: {
        marginRight: '15px',
    }
}))

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Miễn phí vận chuyển',
        isActive: (filters) => {
            return filters.isFreeShip
        },
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => false,
        onToggle: (filters) => {
            const newFilters = { ...filters }
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip
            } else {
                newFilters.isFreeShip = true
            }

            return newFilters
        },
    },
    {
        id: 2,
        getLabel: () => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (filters) => {
            return filters.isPromotion
        },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters }
            delete newFilters.isPromotion

            return newFilters
        },
        onToggle: () => false,
    },
    {
        id: 3,
        getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => {
            return Object.keys(filters).includes('salePrice_gte') && Object.keys(filters).includes('salePrice_lte')
        },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters }
            delete newFilters.salePrice_gte
            delete newFilters.salePrice_lte

            return newFilters
        },
        onToggle: () => false,
    },
    {
        id: 4,
        getLabel: (filters, categories) => {
            return categories.find(category => category.id === filters['category.id']).name
        },

        isActive: () => true,
        isVisible: (filters) => {
            return Object.keys(filters).includes('category.id')
        },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters }
            delete newFilters['category.id']


            return newFilters
        },
        onToggle: () => false,
    },
]

const FilterViewer = ({ filters, onChange }) => {
    const classes = useStyles()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const categoryList = await categoryApi.getAll()

                setCategories(categoryList.map(category => ({
                    id: category.id,
                    name: category.name
                })))
            } catch (error) {
                console.log('Failed to fetch categories: ', error);
            }
        })()
    }, [])

    return (
        <Box className={classes.root}>
            {FILTER_LIST.filter(item => item.isVisible(filters)).map(item => (
                <Chip
                    key={item.id}
                    className={classes.chip}
                    color={item.isActive(filters) ? 'primary' : 'default'}
                    label={item.getLabel(filters, categories)}
                    clickable={!item.isRemovable}
                    onClick={!item.isRemovable ? () => {
                        const newFilters = item.onToggle(filters)

                        onChange(newFilters)
                    } : null}
                    onDelete={item.isRemovable ? () => {
                        const newFilters = item.onRemove(filters)

                        onChange(newFilters)
                    } : null}
                />

            ))}
        </Box>
    )
}

export default FilterViewer
