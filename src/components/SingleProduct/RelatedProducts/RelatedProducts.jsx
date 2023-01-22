import { useState } from "react";
import { useEffect } from "react";
import { fetchDataFromApi } from "../../../utils/api";
import Products from "../../Products/Products";
const RelatedProducts = ({ productId, categoryId }) => {
    const [relatedProductsData, setRelatedProducts] = useState([]);
    useEffect(() => {
        fetchDataFromApi(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}
        &pagination[start]=0&pagination[limit]=4`).then(res => {
            const { data } = res.data;
            setRelatedProducts(data);
        });
    }, [productId, categoryId])
    return (<div className="related-products">
        <Products headingText={'Related Products'} products={relatedProductsData} />
    </div>);
};

export default RelatedProducts;
