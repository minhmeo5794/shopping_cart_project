import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, makeStyles } from '@material-ui/core'
import QuantityField from 'components/form-controls/QuantityField'

const useStyles = makeStyles(theme => ({
    root: {
    },

    submit: {
        margin: theme.spacing(1, 0, 1, 0),
        height: '50px',
        width: '200px',
    },
}))


function AddToCartForm({ onSubmit }) {
    const classes = useStyles()

    const schema = yup.object().shape({
        quantity: yup.number().required('Please enter quantity').min(1, 'Minimum is 1').typeError('Please enter a number')
    })

    const form = useForm({
        defaultValues: {
            quantity: 1
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <div className={classes.root}>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <QuantityField name="quantity" label="Quantity" form={form} />

                <Button type="submit" variant="contained" color="primary" className={classes.submit} fullWidth>
                    Add To Cart
                </Button>
            </form>
        </div>
    )
}

export default AddToCartForm