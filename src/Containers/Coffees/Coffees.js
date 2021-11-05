// style
import "./Coffees.css";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";

//images
import image2 from "../../images/ben3.jpg";

//motion
import { motion } from "framer-motion";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Coffees = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="matosPage">
      <div className="bandCoffees">
        <div className="textPartOnPhotoJuice">
          <h1>Ben Flavours</h1>
        </div>
      </div>

      <div className="textAboutOurJuices">
        <div className="TitleOfOurSelectionOfCoffees"></div>
        <div className="whyIsItImportant">
          <h1>Des cafés et thés d'exception </h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Cafés et thés soigneusement sélectionnés afin de sublimer le
              palais des vapoteurs.
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Une plage de 800 arômes pour le café et une infinité pour le thé.
            </h2>
          </div>
        </div>
      </div>
      <div className="ImageAndTextAboutQuality">
        <div className="textAboutQuality">
          <div className="titleAboutQuality">
            <h1>Des cafés adaptés aux liquides que vous vapez</h1>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              3 gammes qui se marie avec les goûts tabacs , mentholés et
              gourmands / fruités.
            </h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Venez tester en boutique, quel café ou thé vous préférez avec vos
              liquides favoris.
            </h2>
          </div>
        </div>
        <div className="imageAboutQuality">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="extraCoffeesPart">
        <div className="extraCoffeeImage"></div>
        <div className="whyIsItBetter">
          <h1>Les petits Extras </h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Nous proposons vos créations personnalisées et des idées de
              cocktails régulièrement sur nos réseaux.
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Conseil en boutique sur les associations possibles, n'hésitez pas
              à demander!
            </h2>
          </div>
        </div>
      </div>
      <div className="otherMediasPart">
        <div className="titleAboutQuality">
          <h1>Accéder à nos autres produits </h1>
        </div>
        <div className="wrapOfCategories">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              history.push("/products/matos");
            }}
            className="eLiquidsCategorySquaremini"
          >
            <div className="textButtonLinkmini">
              <h1>Liquides</h1>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              history.push("/products/matos");
            }}
            className="MatosCategorySquaremini"
          >
            <div className="textButtonLinkmini">
              <h1>Matériel</h1>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              history.push("/products/cbd");
            }}
            className="CBDCategorySquaremini"
          >
            <div className="textButtonLinkmini">
              <h1>CBD</h1>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              history.push("/products/mixologue");
            }}
            className="MixoCategorySquaremini"
          >
            <div className="textButtonLinkmini">
              <h1>Le Mixologue</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Coffees;
