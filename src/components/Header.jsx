import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'

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
    },
    cartIcon: {
        marginRight: theme.spacing(1),
    },
    // search: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: alpha(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: alpha(theme.palette.common.white, 0.25),
    //     },
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(1),
    //         width: 'auto',
    //     },
    // },
    // searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
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
                    <Box className={classes.logo}>
                        <ShoppingCartIcon className={classes.cartIcon} />
                        <Typography className={classes.title} variant="h6" noWrap>
                            Shopping Cart
                        </Typography>
                    </Box>

                    {/* <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div> */}

                    <Box>
                        <ShoppingBasketIcon className={classes.basketIcon} />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header