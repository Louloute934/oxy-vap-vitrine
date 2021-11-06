//style
import "./Header.css";

import { useHistory } from "react-router-dom";

//motion
import { motion } from "framer-motion";

const Header = ({ isTabletOrMobile }) => {
  const history = useHistory();

  return (
    <div className="headerBar">
      <motion.div className="functionalHeader">
        <motion.div
          onClick={() => {
            history.push("/");
          }}
          className="headerLogoDiv"
        >
          <h1>OXY VAP</h1>
        </motion.div>
        <motion.div className="headerMenu">
          <motion.h2
            onClick={() => {
              history.push("/");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Accueil
          </motion.h2>
          <motion.h2
            onClick={() => {
              history.push("/products");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Produits
          </motion.h2>
          <motion.h2
            onClick={() => {
              history.push("/shops");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Boutiques
          </motion.h2>
          <motion.h2
            onClick={() => {
              history.push("/team");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            L'Équipe
          </motion.h2>
          <motion.h2
            onClick={() => {
              history.push("/medias");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Réseaux
          </motion.h2>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Header;
