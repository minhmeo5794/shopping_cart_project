import productApi from 'api/productApi'
import { useEffect, useState } from 'react'

export function useProduct(productId) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const result = await productApi.get(productId)
                setProduct(result)
            } catch (error) {
                console.log('Failed to fetch product: ', error)
            }
        })()

        setLoading(false)
    }, [productId])

    return { loading, product }
}