//style
import "./Cbd.css";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";

//images
import image2 from "../../images/cbdSecondImage.jpg";

//motion
import { motion } from "framer-motion";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cbd = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="matosPage">
      <div className="bandCbd">
        <h1>Le CBD</h1>
      </div>

      <div className="textAboutOurJuices">
        <div className="TitleOfOurSelectionOfCbd"></div>
        <div className="whyIsItBetter">
          <h1>Le CBD c'est quoi ?</h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              La molécule "Bien-Être" du Chanvre avec ses effets apaisants.
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Sans effets psychotropes ni dépendance et 100% légal.</h2>
          </div>
        </div>
      </div>
      <div className="ImageAndTextAboutQuality">
        <div className="textAboutQuality">
          <div className="titleAboutQuality">
            <h1>Différentes formes en boutique</h1>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Gouttes à base d'huiles de chanvre et de coco.</h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Liquides à vaper </h2>
          </div>
          <div className="oneLineAboutSelection">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>CBD alimentaire: boissons, tisanes, bonbons, gummies...</h2>
          </div>
        </div>
        <div className="imageAboutQuality">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="extraCbdPart">
        <div className="extraCbdImage"></div>
        <div className="whyIsItImportant">
          <h1>Les petits Extras </h1>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>
              Un accompagnement personnalisé dans votre utilisation du CBD avec
              des conseils de dosage et d'admission.
            </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>Cosmétiques CBD: huiles de visage et crèmes pour sportifs. </h2>
          </div>
          <div className="OneWhy">
            <FontAwesomeIcon className="OneWhyIcon" icon="chevron-right" />
            <h2>CBD alimentaire pour chiens et chats </h2>
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
              history.push("/products/coffees");
            }}
            className="BenFlavourCategorySquaremini"
          >
            <div className="textButtonLinkmini">
              <h1>Ben FLavours</h1>
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
export default Cbd;
