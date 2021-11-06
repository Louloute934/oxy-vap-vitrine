//Style
import "./Shops.css";

import { useState, useEffect } from "react";

//motion
import { motion } from "framer-motion";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const onHover1 = () => {
    setHover1(!hover1);
  };
  const onHover2 = () => {
    setHover2(!hover2);
  };
  const onHover3 = () => {
    setHover3(!hover3);
  };

  return (
    <div className="shopsPage">
      <div className="firstPartShopsWithPhoto">
        <div className="textOverPhotoForShops">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="firstPartOfTitleWithImage"
          >
            <h1>BIENVENUE</h1>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="secondPartOfTitleWithImage"
          >
            <h1>CHEZ</h1>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="thirdPartOfTitleWithImage"
          >
            <h1>VOUS !</h1>
          </motion.div>
        </div>
      </div>
      <div className="firstShop">
        <div onClick={onHover1} className="VisiblePart">
          <div className="oneShopHiddenWithIcon">
            <h1>Yerres</h1>
            <div className="discoverOurShop">
              <div className="YourShop">
                <h2>Votre boutique</h2>
              </div>
              {hover1 ? (
                <FontAwesomeIcon className="iconDown" icon="times" />
              ) : (
                <FontAwesomeIcon className="iconDown" icon="chevron-down" />
              )}
            </div>
          </div>
          {hover1 && (
            <motion.div
              initial={{ x: "1000" }}
              animate={{ x: 0 }}
              className="hiddenPartAboutShop"
            >
              <div className="infoShop">
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon
                    className="iconAboutShop"
                    icon="map-marked-alt"
                  />
                  <h2>169 Avenue du Général Leclerc 91330 Yerres</h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="clock" />
                  <h2>
                    Le lundi de 14h à 19h30, du mardi au vendredi de 10h30 à 13h
                    et de 14h à 19h30 et le samedi de 10h30 à 19h30 sans
                    interruption.
                  </h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="phone-alt" />
                  <h2>01.72.49.40.43</h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="envelope" />
                  <h2>oxyvap@outlook.com</h2>
                </div>
                <div className="socialMediasPart">
                  <a
                    href="https://www.facebook.com/OxyVapYerres/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="fbAndInsta"
                      icon={["fab", "facebook-square"]}
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/oxy_vap/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fbAndInsta"
                      icon={["fab", "instagram-square"]}
                    />
                  </a>
                </div>
              </div>
              <div className="productShop"></div>
            </motion.div>
          )}
        </div>
      </div>
      <div className="firstShop">
        <div className="VisiblePart" onClick={onHover2}>
          <div className="oneShopHiddenWithIcon">
            <h1>Draveil</h1>
            <div className="discoverOurShop">
              <div className="YourShop">
                <h2>Votre boutique</h2>
              </div>

              {hover2 ? (
                <FontAwesomeIcon className="iconDown" icon="times" />
              ) : (
                <FontAwesomeIcon className="iconDown" icon="chevron-down" />
              )}
            </div>
          </div>
          {hover2 && (
            <motion.div
              initial={{ x: "1000" }}
              animate={{ x: 0 }}
              className="hiddenPartAboutShop"
            >
              <div className="infoShop">
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon
                    className="iconAboutShop"
                    icon="map-marked-alt"
                  />
                  <h2>192 Bis Boulevard Henri Barbusse 91210 Draveil </h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="clock" />
                  <h2>
                    Le lundi de 14h à 19h30, du mardi au vendredi de 10h30 à
                    13h30 et de 14h30 à 19h30 et le samedi de 10h30 à 19h30 sans
                    interruption.
                  </h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="phone-alt" />
                  <h2>01.72.49.41.42</h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="envelope" />
                  <h2>oxyvap@outlook.com</h2>
                </div>
                <div className="socialMediasPart">
                  <a
                    href="https://fr-fr.facebook.com/OxyVapDraveil/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="fbAndInsta"
                      icon={["fab", "facebook-square"]}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/oxy_vap/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      className="fbAndInsta"
                      icon={["fab", "instagram-square"]}
                    />
                  </a>
                </div>
              </div>
              <div className="productShop2"></div>
            </motion.div>
          )}
        </div>
      </div>
      <div className="firstShop">
        <div className="VisiblePart" onClick={onHover3}>
          <div className="oneShopHiddenWithIcon">
            <h1>Combs-La-Ville</h1>
            <div className="discoverOurShop">
              <div className="YourShop">
                <h2>Votre boutique</h2>
              </div>
              {hover3 ? (
                <FontAwesomeIcon className="iconDown" icon="times" />
              ) : (
                <FontAwesomeIcon className="iconDown" icon="chevron-down" />
              )}
            </div>
          </div>
          {hover3 && (
            <motion.div
              initial={{ x: "1000" }}
              animate={{ x: 0 }}
              className="hiddenPartAboutShop"
            >
              <div className="infoShop">
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon
                    className="iconAboutShop"
                    icon="map-marked-alt"
                  />
                  <h2>92 Rue Sommeville 77380 Combs </h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="clock" />
                  <h2>
                    Du mardi au vendredi de 10h30 à 13h30 et de 14h30 à 19h30 et
                    le samedi de 10h30 à 19h30 sans interruption.
                  </h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="phone-alt" />
                  <h2>01.75.13.71.86</h2>
                </div>
                <div className="iconAndTextAboutThisShop">
                  <FontAwesomeIcon className="iconAboutShop" icon="envelope" />
                  <h2>oxyvap@outlook.com</h2>
                </div>
                <div className="socialMediasPart">
                  <a
                    href="https://www.facebook.com/oxyvapcombslaville/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fbAndInsta"
                      icon={["fab", "facebook-square"]}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/oxy_vap/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      className="fbAndInsta"
                      icon={["fab", "instagram-square"]}
                    />
                  </a>
                </div>
              </div>
              <div className="productShop3"></div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Shops;
