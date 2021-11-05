//style
import "./Header.css";

import { useHistory } from "react-router-dom";

//motion
import { motion } from "framer-motion";

const Header = ({ isTabletOrMobile }) => {
  const history = useHistory();
  const totalheader = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const childrenHeader = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="headerBar">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={totalheader}
        className="functionalHeader"
      >
        <motion.div
          onClick={() => {
            history.push("/");
          }}
          variants={childrenHeader}
          className="headerLogoDiv"
        >
          <h1>OXY VAP</h1>
        </motion.div>
        <motion.div variants={childrenHeader} className="headerMenu">
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
            Nos Produits
          </motion.h2>
          <motion.h2
            onClick={() => {
              history.push("/shops");
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Les Boutiques
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
            Actus / Réseaux
          </motion.h2>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Header;
