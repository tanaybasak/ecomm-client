import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return <div className="shop-by-category">
        <div className="categories">
            {categories?.map(({id, attributes}, index) => (
                <div key={id} className="category" onClick={() => navigate(`/category/${id}`)}>
                    <img src={attributes.img.data.attributes.url} alt="" />
                </div>
            ))}

        </div>
    </div>;
};

export default Category;
