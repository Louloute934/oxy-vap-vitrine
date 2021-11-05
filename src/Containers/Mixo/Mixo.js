// style
import "./Mixo.css";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";

//motion
import { motion } from "framer-motion";

//images
import image2 from "../../images/mixo3.jpg";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mixo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="matosPage">
      <div className="bandMixo">
        <h1>Le Mixologue</h1>
      </div>

      <div className="textAboutOurJuices">
        <div className="TitleOfOurSelectionOfMixo"></div>
        <div className="whyIsItImportant">
          <h1>Un concept Unique</h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Créer, associer des saveurs et de composer un cocktail unique
              parmis des dizaines. Tel un brasseur ou un cuisinier ! C'est votre
              liquide !
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Mélanges à tester selon vos proportions, pour un mix parfait.
            </h2>
          </div>
        </div>
      </div>
      <div className="ImageAndTextAboutQuality">
        <div className="textAboutQuality">
          <div className="titleAboutQuality">
            <h1>Personnalisable à l'extrême:</h1>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Plusieurs formats disponibles: 10, 30, 60, 120 et 200 ml !</h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Plus de 10 000 combinaisons différentes possibles. </h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Pour tous les goûts! des liquides gourmands, fruités, frais et
              classiques.
            </h2>
          </div>
        </div>
        <div className="imageAboutQuality">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="extraMixoPart">
        <div className="extraMixoImage"></div>
        <div className="whyIsItBetter">
          <h1>Les petits Extras :</h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Nous proposons avec votre aide des créations et des idées de
              cocktails sur nos réseaux.
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
          <h1>Accéder à nos autres produits :</h1>
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
              <h1>Liquide</h1>
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
              history.push("/products/coffees");
            }}
            className="BenFlavourCategorySquaremini"
          >
            <div className="textButtonLinkmini">
              <h1>Ben FLavours</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Mixo;
