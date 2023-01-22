import React, { useContext, useEffect, useState } from "react";
import "./Home.scss";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/Context";
const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);
    const [categoriesData, setCategoriesData] = useState([]);
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        fetchDataFromApi('/api/categories?populate=*').then(res => {
            const { data } = res.data;
            setCategories(data);
            setCategoriesData(data);
        });
    }, [setCategories])


    useEffect(() => {
        fetchDataFromApi('/api/products?populate=*').then(res => {
            const { data } = res.data;
            setProducts(data);
            setProductsData(data);
            console.log(data)
        });

    }, [setProducts])



    return <div className="home">
            <Banner />
            <div className="main-content">
                <div className="layout">
                {categoriesData &&<Category categories={categoriesData} /> }
                   {productsData && <Products headingText={'Popular Products'} products={productsData} /> }
                </div>
            </div>
        </div>;

};

export default Home;
