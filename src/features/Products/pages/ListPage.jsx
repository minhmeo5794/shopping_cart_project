import React, { useEffect, useState } from 'react'
import { Box, Grid, makeStyles, Paper } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import productApi from 'api/productApi'
import FilterViewer from '../components/FilterViewer'
import ProductFilters from '../components/ProductFilters'
import ProductSort from '../components/ProductSort'
import ProductSkeleton from '../components/ProductSkeleton'
import ProductList from '../components/ProductList'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    paperLeft: {
        color: theme.palette.text.secondary,
    },
    paperRight: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    boxPagination: {
        marginTop: theme.spacing(4),
        paddingBottom: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
    }
}))

const ListPage = () => {
    const classes = useStyles()
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 9,
        _sort: 'salePrice:ASC',
        isPromotion: false,
        isFreeShip: false,
    })
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 9,
        total: 10
    })

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters)

                console.log(filters);

                setProductList(data)
                setPagination(pagination)
            } catch (err) {
                console.log('Failed to fetch api: ', err)
            }

            setLoading(false)
        })()
    }, [filters])

    const handlePageChange = (e, page) => {
        setFilters({
            ...filters,
            _page: page,
        })
    }

    const handleSortChange = (sort) => {
        setFilters({
            ...filters,
            _sort: sort
        })
    }

    const handleFilterChange = (newFilters) => {
        setFilters({
            ...filters,
            ...newFilters
        })
    }

    const handleFilterViewer = (newFilters) => {
        setFilters(newFilters)
    }


    return (
        <Box className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paperLeft}>
                        <ProductFilters filters={filters} onChange={handleFilterChange} />
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paperRight}>
                        <ProductSort filters={filters} onChange={handleSortChange} />
                        <FilterViewer filters={filters} onChange={handleFilterViewer} />

                        {loading ? <ProductSkeleton length={9} /> : <ProductList productList={productList} />}

                        <Box className={classes.boxPagination}>
                            <Pagination
                                color="primary"
                                page={pagination.page}
                                count={Math.ceil(pagination.total / pagination.limit)}
                                onChange={handlePageChange}
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ListPage
