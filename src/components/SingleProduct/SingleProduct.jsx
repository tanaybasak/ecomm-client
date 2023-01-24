import "./SingleProduct.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus
} from 'react-icons/fa';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { useParams } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import {Context} from '../../utils/Context';
const SingleProduct = () => {
    const [productsData, setProductsData] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const {handleAddToCart} = useContext(Context);

    useEffect(() => {
        fetchDataFromApi(`/api/products?populate=*&[filters][id]=${id}`).then(res => {
            const { data } = res.data;
            console.log(res);
            setProductsData(data);
        });
    }, [id])

    const products = productsData[0]?.attributes;

    const increment = () => {
        setQuantity(prevState => prevState + 1);
    }

    const decrement = () => {
        setQuantity(prevState => {
            if (prevState === 1) {
                return 1
            }
            return prevState - 1

        });
    }
    // {productsData[0].attributes.title}

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                      <img src={products &&  products.img.data[0].attributes.url} alt="" />
                    </div>
                    <div className="right">
                        {products && <>
                            <span className="name">{products && products.title}</span>
                            <span className="price"> { products && products.price}</span>
                            <span className="desc">{ products && products.desc}</span>
                        </>}
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className="add-to-cart-button" onClick={() =>{ 
                                handleAddToCart(productsData[0], quantity);
                                setQuantity(1)
                            }}>
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>
                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category: {' '}
                              <span>
                                    { products && products.categories?.data?.[0]?.attributes?.title}
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />

                                </span>
                            </span>
                        </div>
                    </div>
                </div>

               {products && <RelatedProducts productId={productsData[0].id} categoryId={products.categories?.data?.[0].id} />}


            </div>
        </div>);
};

export default SingleProduct;
