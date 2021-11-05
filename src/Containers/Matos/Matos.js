import "./Matos.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

//imagesimport image1 from "../../images/matos1.jpg";
import image2 from "../../images/matos2.jpg";

//motion
import { motion } from "framer-motion";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Matos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="matosPage">
      <div className="bandMatos">
        <h1>Notre Matériel</h1>
      </div>

      <div className="textAboutOurJuices">
        <div className="TitleOfOurSelectionOfMatos"></div>
        <div className="whyIsItImportant">
          <h1>Essayer c'est l'adopter </h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Chaque vapoteur est différent, il est donc important de prendre un
              matériel qui vous convient.
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Possibilité de faire des kits "sur-mesures" correspondant à votre
              profil.
            </h2>
          </div>
        </div>
      </div>
      <div className="ImageAndTextAboutQuality">
        <div className="textAboutQuality">
          <div className="titleAboutQuality">
            <h1>Matériel de qualité</h1>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Marques de matériel reconnues pour leurs qualités.</h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Matériel préalablement testé par l'équipe pour garantir fiabilité
              et qualité.
            </h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Matériel adapté à tout type de vapoteur, débutant ou expert.
            </h2>
          </div>
        </div>
        <div className="imageAboutQuality">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="extraMatosPart">
        <div className="ExtraImageMatos"></div>
        <div className="whyIsItBetter">
          <h1>Les petits Extras </h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Vous cherchez un matériel en particulier? Nous avons accès à plus
              de 7000 références sur commande !
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Vous souhaitez vous initier au reconstructible? Notre équipe vous
              initierons avec le plus grand plaisir !
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
              history.push("/products/liquids");
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
export default Matos;
