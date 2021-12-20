import React from 'react'
import { Box, Grid, makeStyles, Paper } from '@material-ui/core'
import ProductThumbnail from '../components/DetailsComponents/ProductThumbnail'
import { useProduct } from 'hooks'
import { useRouteMatch } from 'react-router-dom'
import ProductInfo from '../components/DetailsComponents/ProductInfo'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        display: 'flex',
        border: '1px solid red'
    },
    left: {
        width: '400px',
    },
    right: {
        flex: 1,
    },
    paperLeft: {
        padding: theme.spacing(2),
        borderRight: '1px solid #e0e0e0',
    },
    paperRight: {
        padding: theme.spacing(2),
    }
}))

const DetailPage = () => {
    const classes = useStyles()
    const {
        params: { productId }
    } = useRouteMatch()

    const { loading, product } = useProduct(productId)

    if (loading) {
        return <Box>Loading...</Box>
    }

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item className={classes.left}>
                    <Paper elevation={0} square className={classes.paperLeft}>
                        <ProductThumbnail product={product} />
                    </Paper>
                </Grid>
                <Grid item className={classes.right}>
                    <Paper elevation={0} square className={classes.paperRight}>
                        <ProductInfo product={product} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DetailPage
