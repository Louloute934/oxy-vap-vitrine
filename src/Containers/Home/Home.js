//style
import "./Home.css";

import { useHistory } from "react-router-dom";

import { useEffect } from "react";

//images
import juices from "../../images/juiceBand.png";
import contact from "../../images/contactUS.png";

//motion
import { motion } from "framer-motion";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();

  return (
    <div className="homePage">
      <motion.div className="firstPartHomeWithImage">
        <motion.div className="headerLogoDivInImage">
          <h1>OXY VAP</h1>
        </motion.div>
      </motion.div>
      <div className="ourGarantiesOfQuality">
        <div className="ourShops">
          <div className="titleOfOneGaranty">
            <h1>3 BOUTIQUES EN ILE-DE-FRANCE </h1>
          </div>

          <div className="our3shops">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="oneShop"
              onClick={() => {
                history.push("/shops");
              }}
            >
              <FontAwesomeIcon className="iconStore" icon="store" />
              <h1>YERRES</h1>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="oneShop"
              onClick={() => {
                history.push("/shops");
              }}
            >
              <FontAwesomeIcon className="iconStore" icon="store" />
              <h1>DRAVEIL</h1>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="oneShop"
              onClick={() => {
                history.push("/shops");
              }}
            >
              <FontAwesomeIcon className="iconStore" icon="store" />
              <h1>COMBS-LA-VILLE</h1>
            </motion.div>
          </div>
        </div>

        <div className="teamPictureAndLink">
          <div className="teamPicture"></div>
          <div className="teamLink">
            <div className="teamHead">
              <h1>UNE ??QUIPE DE PASSIONN??S</h1>
            </div>

            <div>
              <div className="listOfGaranties">
                <div className="oneGarantyOfList">
                  <FontAwesomeIcon icon="chevron-right" />
                  <h2>
                    Certifi??e CIMVAPE, premi??re certification des m??tiers de la
                    vape.
                  </h2>
                </div>
              </div>
              <div className="buttonOfOneGaranty">
                <motion.h1
                  onClick={() => {
                    history.push("/team");
                  }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Notre ??quipe
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
        <div className="juicesAndGaranties">
          <div className="juiceImage">
            <img src={juices} alt="" />
          </div>
          <div className="juiceGaranties">
            <div className="juicesOneGaranty">
              <h1>Qualit?? </h1>
              <h2>Normes Fran??aises et fabricants de confiance.</h2>
            </div>
            <div className="juicesOneGaranty">
              <h1>Diversit?? </h1>
              <h2>Plus de 150 saveurs disponibles en boutique.</h2>
            </div>

            <div className="juicesOneGaranty">
              <h1>Nicotine </h1>
              <h2>Disponibilit?? du 0 au 20 mg/ml.</h2>
            </div>
          </div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              history.push("/products/liquids");
            }}
            className="buttonOfContact"
          >
            <h1>Nos Liquides</h1>
          </motion.div>
        </div>
        <div className="teamMatosAndLink">
          <div className="matosLink">
            <div className="teamHead">
              <h1>DU MAT??RIEL ADAPT?? </h1>
            </div>
            <div className="listOfGaranties">
              <div className="oneGarantyOfList">
                <FontAwesomeIcon icon="chevron-right" />
                <h2>Test?? par l'??quipe pour un confort optimal.</h2>
              </div>
              <div className="oneGarantyOfList">
                <FontAwesomeIcon icon="chevron-right" />
                <h2>Fontionnement expliqu?? en boutique.</h2>
              </div>
              <div className="oneGarantyOfList">
                <FontAwesomeIcon icon="chevron-right" />
                <h2>Mat??riel pour d??butant jusqu'?? l'expert.</h2>
              </div>
            </div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                history.push("/products/matos");
              }}
              className="buttonOfContact"
            >
              <h1>Notre mat??riel</h1>
            </motion.div>
          </div>
          <div className="matosPicture"></div>
        </div>
        <div className="juicesAndGaranties">
          <div className="contactImage">
            <img src={contact} alt="" />
          </div>
          <div className="juiceGaranties">
            <div className="juicesOneGaranty">
              <h1>Formation </h1>
              <h2>
                Equipe form??e sur les mat??riels, liquides et m??canismes de
                l'addiction.
              </h2>
            </div>
            <div className="juicesOneGaranty">
              <h1>Disponibilit?? </h1>
              <h2>M??me en dehors des horaires d'ouverture.</h2>
            </div>
            <div className="juicesOneGaranty">
              <h1>Exp??rience </h1>
              <h2>Des milliers de personnes accompagn??es. Notre fiert??.</h2>
            </div>
          </div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              history.push("/medias");
            }}
            className="buttonOfContact"
          >
            <h1>Nous Contacter</h1>
          </motion.div>
        </div>
        <div className="teamPictureAndLink">
          <div className="communityPicture"></div>
          <div className="teamLink">
            <div className="teamHead">
              <h1>UNE FAMILLE </h1>
            </div>
            <div className="listOfGaranties">
              <div className="oneGarantyOfList">
                <FontAwesomeIcon icon="chevron-right" />
                <h2>
                  Plusieurs ??v??nements dans l'ann??e pour faire se rencontrer
                  tous les types de vapoteurs.
                </h2>
              </div>
              <div className="oneGarantyOfList">
                <FontAwesomeIcon icon="chevron-right" />
                <h2>
                  Toutes les actus et conseils des boutiques sur nos r??seaux
                  sociaux.
                </h2>
              </div>
            </div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                history.push("/medias");
              }}
              className="buttonOfOneGaranty"
            >
              <h1>Suivre nos Actualit??s</h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
