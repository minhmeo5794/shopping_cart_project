import React, { useEffect, useState } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import categoryApi from 'api/categoryApi'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    title: {
        margin: '0 0 10px 0',
        paddingTop: '14px'
    },
    categoryList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    categoryItem: {
        padding: '5px 0',
        transition: 'all 0.5s ease',
        '&:hover': {
            cursor: 'pointer',
            color: theme.palette.primary.main,
        }
    }
}))

const FilterByCategory = ({ onChange }) => {
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

    const handleCategoryFilter = (category) => {
        onChange(category)
    }

    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>
                DANH MỤC SẢN PHẨM
            </Typography>

            <ul className={classes.categoryList}>
                {categories.map(category => (
                    <li
                        key={category.id}
                        className={classes.categoryItem}
                        onClick={() => handleCategoryFilter(category)}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
        </Box>
    )
}

export default FilterByCategory
