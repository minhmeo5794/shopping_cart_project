import React from 'react'
import { Box, Link, makeStyles } from '@material-ui/core'
import { NavLink, useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2, 0, 2, 0),
        padding: 0,
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& > li': {
            margin: theme.spacing(0, 4)
        },

        '& > li > a': {
            textDecoration: 'none',
            color: '#333'
        },

        '& > li > a.active': {
            textDecoration: 'underline',
            color: theme.palette.primary.main
        }
    }
}))

const ProductMenu = () => {
    const classes = useStyles()
    const { url } = useRouteMatch()

    return (
        <Box component="ul" className={classes.root}>
            <li>
                <Link to={url} component={NavLink} exact>
                    Description
                </Link>
            </li>

            <li>
                <Link to={`${url}/additional`} component={NavLink} exact>
                    Additional Information
                </Link>
            </li>

            <li>
                <Link to={`${url}/reviews`} component={NavLink} exact>
                    Reviews
                </Link>
            </li>
        </Box>
    )
}

export default ProductMenu
