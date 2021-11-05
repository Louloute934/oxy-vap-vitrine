import "./Onemember.css";

//motion
import { motion } from "framer-motion";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Onemember = ({
  children,
  onHover,
  onLeave,
  hover,
  parent,
  Background,
  name,
  killerSkill,
  profile,
  bestKiff,
  setUp,
  hobbies,
  bgc,
  titleColor,
  textColor,
  backgroundPosition,
  realName,
  onClick,
}) => {
  const sectionStyle = {
    backgroundImage: `url(  ${Background}  )`,
    backgroundPosition: backgroundPosition,
  };
  const textStyle = {
    backgroundColor: bgc,
  };

  const titleStyle = {
    color: titleColor,
  };
  const paragraphStyle = {
    color: textColor,
  };
  return (
    <div
      className="pictureOfOneMember"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={sectionStyle}
    >
      {!hover && (
        <motion.div variants={children} className="realNameOfMember">
          <h1>{realName}</h1>
        </motion.div>
      )}

      {hover && (
        <motion.div
          variants={parent}
          style={textStyle}
          initial="hidden"
          animate="visible"
          className="textOfOneMember"
        >
          <motion.div variants={children} className="nameOfMember">
            <h1 style={titleStyle}>{name}</h1>
          </motion.div>
          <motion.div variants={children} className="oneCategorySkill">
            <div className="iconAndDescription" style={titleStyle}>
              <FontAwesomeIcon className="iconAboutOneMember" icon="hammer" />
              <h2>Killer Skill : </h2>
            </div>

            <h2 className="textAboutOneMember" style={paragraphStyle}>
              {killerSkill}
            </h2>
          </motion.div>
          <motion.div variants={children} className="oneCategorySkill">
            <div className="iconAndDescription" style={titleStyle}>
              <FontAwesomeIcon className="iconAboutOneMember" icon="user-md" />
              <h2>Profil : </h2>
            </div>

            <h2 className="textAboutOneMember" style={paragraphStyle}>
              {profile}
            </h2>
          </motion.div>
          <motion.div variants={children} className="oneCategorySkill">
            <div className="iconAndDescription" style={titleStyle}>
              <FontAwesomeIcon
                className="iconAboutOneMember"
                icon="heartbeat"
              />
              <h2>Best Kiff: </h2>
            </div>

            <h2 className="textAboutOneMember" style={paragraphStyle}>
              {bestKiff}
            </h2>
          </motion.div>
          <motion.div variants={children} className="oneCategorySkill">
            <div className="iconAndDescription" style={titleStyle}>
              <FontAwesomeIcon className="iconAboutOneMember" icon="user-tie" />
              <h2>Setup des grands soirs : </h2>
            </div>

            <h2 className="textAboutOneMember" style={paragraphStyle}>
              {setUp}
            </h2>
          </motion.div>
          <motion.div variants={children} className="hobyCategorySkill">
            <div className="iconAndDescription" style={titleStyle}>
              <FontAwesomeIcon
                className="iconAboutOneMember"
                icon="football-ball"
              />
              <h2>Hobbies: </h2>
            </div>

            <h2 className="textAboutOneMember" style={paragraphStyle}>
              {hobbies}
            </h2>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Onemember;
