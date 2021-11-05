//style
import "./Liquids.css";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//motion
import { motion } from "framer-motion";

//images
import image2 from "../../images/tireboul.jpg";

const Liquids = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="liquidsPage">
      <div className="bandJuices">
        <h1>Nos Liquides</h1>
      </div>

      <div className="textAboutOurJuices">
        <div className="TitleOfOurSelectionOfJuices"></div>
        <div className="whyIsItImportant">
          <h1>Une sélection importante pour VOUS </h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Trouver un liquide qui vous convient est vital dans votre arrêt du
              tabac.
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Notre équipe vous accompagne pour trouver votre taux de nicotine.
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Vous pouvez tester tous les liquides en boutique.</h2>
          </div>
        </div>
      </div>

      <div className="ImageAndTextAboutQuality">
        <div className="textAboutQuality">
          <div className="titleAboutQuality">
            <h1>Des liquides sélectionnés drastiquement </h1>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Fabricants de confiance et des liquides répondant aux Normes
              Françaises.
            </h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Une diversité de saveurs pour convenir à tous.</h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Une disponibilité dans tous les taux de nicotine.</h2>
          </div>
        </div>
        <div className="imageAboutQuality">
          <img src={image2} alt="" />
        </div>
      </div>

      <div className="downloadMenus">
        <div className="downloadOurMenuTitle">
          <h1>Téléchargez notre carte </h1>
        </div>
        <div className="shopMenus">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="iconAndShopMenu"
          >
            <FontAwesomeIcon className="menuIcon" icon="book-open" />
            <h1>Yerres</h1>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="iconAndShopMenu"
          >
            <FontAwesomeIcon className="menuIcon" icon="book-open" />
            <h1>Draveil</h1>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="iconAndShopMenu"
          >
            <FontAwesomeIcon className="menuIcon" icon="book-open" />
            <h1>Combs</h1>
          </motion.div>
        </div>
      </div>
      <div className="extraPart">
        <div className="extraImage"></div>
        <div className="whyIsItBetter">
          <h1>Les petits Extras </h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Vous ne trouvez pas votre liquide favori? Nous avons accès à plus
              de 3000 références sur commande !
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Nous organisons des livraisons en partenariat avec La Poste en
              48h.
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
export default Liquids;
