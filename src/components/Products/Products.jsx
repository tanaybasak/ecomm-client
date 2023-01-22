import "./Products.scss";
import Product from './Product/Product';
const Products = ({ products, innerPage, headingText }) => {
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">
            {headingText}
        </div>}
        <div className="products">
            {products && products.map(item => (
                <Product key={item.id} id={item.id} data={item.attributes} />
            ))}

        </div>
    </div>;
};


Products.defaultProps = {
    products: [],
    innerPage : false,
    headingText : ''

}

export default Products;
