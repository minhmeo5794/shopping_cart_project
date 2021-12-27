import React from 'react'
import { Box, Grid, LinearProgress, makeStyles, Paper } from '@material-ui/core'
import ProductThumbnail from '../components/DetailsComponents/ProductThumbnail'
import { useProduct } from 'hooks'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import ProductInfo from '../components/DetailsComponents/ProductInfo'
import AddToCartForm from '../components/DetailsComponents/AddToCartForm'
import ProductMenu from '../components/DetailsComponents/ProductMenu'
import ProductDescription from '../components/DetailsComponents/ProductDescription'
import ProductAdditional from '../components/DetailsComponents/ProductAdditional'
import ProductReviews from '../components/DetailsComponents/ProductReviews'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    left: {
        padding: theme.spacing(2),
        width: '400px',
        borderRight: '1px solid #e0e0e0',
    },
    right: {
        padding: theme.spacing(2),
        flex: 1,
    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    }
}))

const DetailPage = () => {
    const classes = useStyles()
    const {
        url,
        params: { productId }
    } = useRouteMatch()

    const { loading, product } = useProduct(productId)

    if (loading) {
        return (
            <Box className={classes.loading}>
                <LinearProgress />
            </Box>
        )
    }

    const handleAddToCartForm = (values) => {
        console.log('Form values: ', values)
    }

    return (
        <Box className={classes.root}>
            <Paper elevation={0} square>
                <Grid container>
                    <Grid item className={classes.left}>
                        <ProductThumbnail product={product} />
                    </Grid>
                    <Grid item className={classes.right}>
                        <ProductInfo product={product} />
                        <AddToCartForm onSubmit={handleAddToCartForm} />
                    </Grid>
                </Grid>
            </Paper>

            <ProductMenu product={product} />

            <Switch>
                <Route path={url} exact>
                    <ProductDescription product={product} />
                </Route>
                <Route path={`${url}/additional`} component={ProductAdditional} exact />
                <Route path={`${url}/reviews`} component={ProductReviews} exact />
            </Switch>
        </Box>
    )
}

export default DetailPage
