import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.item);

  useEffect(() => {
    dispatch(fetchProductDetail(match.params.id));
  }, [dispatch, match.params.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product._id, 1));
  };

  return (
    <div>
      {product && (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
