import React from 'react'
import { Box, Grid, makeStyles } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
    skeleton: {
        borderRadius: '5px'
    }
}))

const ProductSkeleton = ({ length }) => {
    const classes = useStyles()

    return (
        <Box>
            <Grid container spacing={3}>
                {Array.from({ length }, (u, idx) => (
                    <Grid key={idx} item sm={6} md={4} lg={3}>
                        <Skeleton className={classes.skeleton} variant="rect" width="100%" height={160} />
                        <Skeleton className={classes.skeleton} />
                        <Skeleton className={classes.skeleton} width="60%" />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ProductSkeleton
