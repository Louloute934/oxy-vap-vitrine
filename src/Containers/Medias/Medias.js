//style
import "./Medias.css";

//UseEffect
import { useEffect } from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Medias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mediasPage">
      <div className="firstPartMediasWithImage">
        <div className="textOverMediaFirst">
          <h1>Suivez-nous ! </h1>
        </div>
      </div>
      <div className="infosAboutOurMedias">
        <div className="oneInfoAboutOurMedias">
          <FontAwesomeIcon className="OneInfoIcon" icon="chevron-right" />
          <h1>
            Publications hebdomadaires sur le monde de la vape mais également
            sur les nouveautés dans vos boutiques et tous nos évènements.
          </h1>
        </div>

        <div className="oneInfoAboutOurMedias">
          <FontAwesomeIcon
            className="OneInfoIcon"
            rel="noreferrer"
            icon="chevron-right"
          />
          <h1>Joignables 7 jours sur 7 sur nos réseaux.</h1>
        </div>
      </div>

      <div className="mediasByShop">
        <div className="oneShopWithMedias">
          <div className="oneShopIconAndName">
            <FontAwesomeIcon
              className="iconStoreForMedia"
              rel="noreferrer"
              icon="store"
            />
            <h1>Oxy Vap Yerres</h1>
          </div>
          <div classname="mediasIconsInMediaPage">
            <a
              href="https://www.facebook.com/OxyVapYerres/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="socialMediasIcon"
                icon={["fab", "facebook-square"]}
              />
            </a>

            <a
              href="https://www.instagram.com/oxy_vap/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="socialMediasIcon"
                icon={["fab", "instagram-square"]}
              />
            </a>
          </div>
        </div>
        <div className="oneShopWithMedias">
          <div className="oneShopIconAndName">
            <FontAwesomeIcon
              className="iconStoreForMedia"
              rel="noreferrer"
              icon="store"
            />
            <h1>Oxy Vap Draveil</h1>
          </div>
          <div classname="mediasIconsInMediaPage">
            <a
              href="https://fr-fr.facebook.com/OxyVapDraveil/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="socialMediasIcon"
                icon={["fab", "facebook-square"]}
              />
            </a>
            <a
              href="https://www.instagram.com/oxy_vap/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="socialMediasIcon"
                icon={["fab", "instagram-square"]}
              />
            </a>
          </div>
        </div>
        <div className="oneShopWithMedias">
          <div className="oneShopIconAndName">
            <FontAwesomeIcon className="iconStoreForMedia" icon="store" />
            <h1>Oxy Vap Combs</h1>
          </div>
          <div
            classname="mediasIconsInMediaPage"
            rel="noreferrer"
            target="_blank"
          >
            <a href="https://www.facebook.com/oxyvapcombslaville/">
              <FontAwesomeIcon
                className="socialMediasIcon"
                icon={["fab", "facebook-square"]}
              />
            </a>

            <a
              href="https://www.instagram.com/oxy_vap/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="socialMediasIcon"
                icon={["fab", "instagram-square"]}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Medias;
