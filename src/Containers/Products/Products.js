//style
import "./Products.css";

import { useHistory } from "react-router-dom";

import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="productsPage">
      <div className="productCategorieswithSquares">
        <div
          onClick={() => {
            history.push("/products/liquids");
          }}
          className="eLiquidsCategorySquare"
        >
          <div className="textButtonLink">
            <h1>Liquides</h1>
          </div>
        </div>
        <div
          onClick={() => {
            history.push("/products/matos");
          }}
          className="MatosCategorySquare"
        >
          <div className="textButtonLink">
            <h1>Matériel</h1>
          </div>
        </div>
        <div
          onClick={() => {
            history.push("/products/cbd");
          }}
          className="CBDCategorySquare"
        >
          <div className="textButtonLink">
            <h1>CBD</h1>
          </div>
        </div>
        <div
          onClick={() => {
            history.push("/products/mixologue");
          }}
          className="MixoCategorySquare"
        >
          <div className="textButtonLink">
            <h1>Le Mixologue</h1>
          </div>
        </div>
        <div
          onClick={() => {
            history.push("/products/coffees");
          }}
          className="BenFlavourCategorySquare"
        >
          <div className="textButtonLink">
            <h1>Ben FLavours</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
