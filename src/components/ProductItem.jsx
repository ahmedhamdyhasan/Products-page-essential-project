// import img from "./phones";
import "./ProductItem.css";
import { IoTrash } from "react-icons/io5";
const ProductItem = ({id,img, title, price,onClickHandler}) => {
  // const { id,img, title, price } = items;
// const itemDeleteHandler = ()=>{
  
// }
  return (
    <div className="item-container">
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <div className="item-degtails">
        <h4 className="title">{title}</h4>

        <span className="price">{price}</span>
        <button className="del-btn" onClick={()=>onClickHandler(id)}>
          <IoTrash className="del-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
