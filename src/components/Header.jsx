import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: '#fff',
        textDecoration: 'none',
    },
    cartIcon: {
        marginRight: theme.spacing(1),
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    basketIcon: {
    }
}))

const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <Box className={classes.logo} component={Link} to="/">
                        <ShoppingCartIcon className={classes.cartIcon} />
                        <Typography className={classes.title} variant="h6" noWrap>
                            Shopping Cart
                        </Typography>
                    </Box>

                    <Box>
                        <ShoppingBasketIcon className={classes.basketIcon} />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header