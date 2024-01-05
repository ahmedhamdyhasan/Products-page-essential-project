import "./Products.css";
import ProductItem from "./ProductItem";
import { useState } from "react";
// import { IoTrash } from "react-icons/io5";

const Products = () => {
  const allProducts = [
    {
      id: 1,
      img: "public/phones/A76.png",
      title: "Samsung A76",
      price: "200$",
      category: "Phones",
    },
    {
      id: 2,
      img: "public/phones/9i.png",
      title: "Redmi 9i",
      price: "150$",
      category: "Phones",
    },
    {
      id: 3,
      img: "public/phones/I13.png",
      title: "Iphone 13",
      price: "700$",
      category: "Phones",
    },
    {
      id: 4,
      img: "public/phones/Honor 70.jpg",
      title: "Honor 70",
      price: "400$",
      category: "Phones",
    },
    {
      id: 5,
      img: "public/phones/lg.jpg",
      title: "LG TV",
      price: "300$",
      category: "TVs",
    },
    {
      id: 6,
      img: "public/phones/Samsung.png",
      title: "Samsung TV",
      price: "400$",
      category: "TVs",
    },
    {
      id: 7,
      img: "public/phones/toshiba_50_inch.jpg",
      title: "Toshiba TV",
      price: "600$",
      category: "TVs",
    },
    {
      id: 8,
      img: "public/phones/A76.png",
      title: "Samsung A76",
      price: "200$",
      category: "Phones",
    },
  ];
  const [items, setItems] = useState(allProducts);

 
  const allCategories = ["All", ...new Set(items.map((i) => i.category))];
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log(category);
    if (category === "All") {
      setItems(allProducts);
    
    } else {
      const newItems = allProducts.filter((item) => item.category === category);
      setItems(newItems);
    }
  };

  const onClickHandler = (id)=>{
    const newArr = items.filter((i)=>i.id !== id)
    setItems(newArr)
  }
  return (
    <section className="content">
      <div className="btns-container">
      
        {categories.map((category) => {
          return (
            <button
              type="button"
              className="btn"
              key={category}
              onClick={() => {
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
        <button
          className="btn btn-delete"
          onClick={() => {
            setItems([]);
            
          }}
        >
          Delete All
        </button>
      </div>
      <div className="products-container">
        {items.map((item) => {
          return <ProductItem key={item.id} {...item} onClickHandler={onClickHandler}/>;
        })}
      </div>
    </section>
  );
};

export default Products;
