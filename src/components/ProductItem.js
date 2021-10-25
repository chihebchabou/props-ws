import React from "react";

const ProductItem = ({
  product: { name, image, description, colors, sizes, price },
}) => {
  // const {
  //   product: { name, image, description, colors, sizes, price },
  // } = props;
  // console.log(props); // {product: {id, image, }}
  const handleClick = (event) => {
    event.preventDefault();
    alert(price);
  };
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img src={image} alt={name} className="card-image-top" />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <p className="card-text text-center">
            {sizes.map((size, i) => (
              <span key={i} style={{ padding: "0 .5rem" }}>
                {size}
              </span>
            ))}
          </p>
          <p className="card-text text-center">
            {Object.entries(colors).map(([key, value], i) => (
              <span
                key={i}
                title={key}
                style={{ ...colorStyle, background: value }}
                className="rounded-circle"
              ></span>
            ))}
          </p>
          <p className="card-text text-center">{description}</p>
          {/* <p className="card-text text-center">{props.product.price}</p> */}
          <p className="card-text text-center">
            <a href="" onClick={handleClick}>
              price
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
const colorStyle = {
  display: "inline-block",
  border: "1px solid black",
  width: "1.5rem",
  height: "1.5rem",
  margin: "0 .2rem",
};

export default ProductItem;
