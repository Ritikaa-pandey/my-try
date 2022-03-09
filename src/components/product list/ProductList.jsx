import "./productlist.css"
import Product from "../product/Product"
import {products} from "../../data"
const ProductList=() => {
    return (
        <div className="p1">
            <div className="p1-texts">
                <h1 className="p1-title">Think and create! </h1>
                <p className="p1-desc">
                    Some of the designs created by me
                </p>
            </div>
            <div className="p1-list">
            {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
               
            </div>
        </div>
    );
};
export default ProductList