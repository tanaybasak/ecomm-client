import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import prod from '../../../assets/products/earbuds-prod-1.webp';
import "./Search.scss";
import 
 useFetch  from '../../../hooks/useFetch';
import { useNavigate } from "react-router-dom";
import { fetchDataFromApi } from "../../../utils/api";
const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState('');
    const [products, setProductsData] = useState([]);
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    // let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

    useEffect(() => {
        fetchDataFromApi(`/api/products?populate=*&filters[title][$contains]=${query}`).then(res => {
            const { data } = res.data;
            setProductsData(data);
        });
    }, [query])


    if (!products.length) {
        return null
    }

    return <div className="search-modal">
        <div className="form-field">
            <input
                type={"text"}
                autoFocus
                placeholder="Search for Product..."
                value={query}
                onChange={(e) => onChange(e)}

            />
            <MdClose onClick={() => setShowSearch(false)} />
        </div>

        <div className="search-result-content">
            <div className="search-results">
                {products.map(item => (
                    <div key={item.id} className="search-result-item" onClick={() => {
                        navigate("/product/" + item.id);
                        setShowSearch(false);
                        }}>
                        <div className="img-container">
                            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name"> {item.attributes.title}</span>
                            <span className="description"> {item.attributes.desc}</span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>;
};

export default Search;