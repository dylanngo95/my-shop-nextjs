import { useProductQuery } from "@framework/product/get-product";
import { getProductDataFromUrlKey } from "@utils/url";
import { useRouter } from "next/router"
import { useEffect } from "react";

function Product() {
    const route = useRouter()
    const { urlKey } = route.query
    const productUrlKey = getProductDataFromUrlKey(urlKey);

    useEffect(() => {
        console.log(productUrlKey)
        const data = useProductQuery('breathe-easy-tank')
    }, [])

    return(
        <>
            <p>Product detail</p>
        </>
    )
}

export default Product