import {useRouter} from "next/router"

function ProductDetail(){

    const router = useRouter()
    const productID = router.query.productId

    return(
        <div>
            <h1>Product deatail of {productID}</h1>
        </div>
    )
}

export default ProductDetail