import "./Category.scss";
import Products from "../Products/Products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
const Category = () => {
    const { id } = useParams();
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetchDataFromApi(`/api/products?populate=*&[filters][categories][id]=${id}`).then(res => {
            const { data } = res.data;
            setProductsData(data);
        });
    }, [id])

    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {productsData?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
            </div>
            <Products innerPage={true} products={productsData} />
        </div>
    </div>;
};

export default Category;
