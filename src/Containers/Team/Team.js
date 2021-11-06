//Style
import "./Team.css";

import { useState, useEffect } from "react";

//components
import Onemember from "../../Components/Onemember/Onemember";

//images
import team1 from "../../images/teamPhoto1.jpg";
import team2 from "../../images/teamPhoto2.jpg";
import team3 from "../../images/teamPhoto3.jpg";
import team4 from "../../images/teamPhoto4.jpg";
import team5 from "../../images/Team5.jpg";
import team6 from "../../images/Team6.jpg";
import team7 from "../../images/Team7.jpg";
import team8 from "../../images/Team8.jpg";
import Cassio from "../../images/Cassio.jpg";
import Enzo from "../../images/Enzo.jpg";
import Allan from "../../images/Allan.jpg";
import Anto from "../../images/Anto.jpg";
import Bombar from "../../images/Bombar.jpg";
import Geoffrey from "../../images/Geoffrey.jpg";
import Debo from "../../images/debo.jpg";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);

  const onClick = () => {
    setHover(!hover);
  };
  const onClick1 = () => {
    setHover1(!hover1);
  };
  const onClick2 = () => {
    setHover2(!hover2);
  };
  const onClick3 = () => {
    setHover3(!hover3);
  };
  const onClick4 = () => {
    setHover4(!hover4);
  };
  const onClick5 = () => {
    setHover5(!hover5);
  };
  const onClick6 = () => {
    setHover6(!hover6);
  };

  const onHover = () => {
    setHover(true);
  };
  const onHover1 = () => {
    setHover1(true);
  };
  const onHover2 = () => {
    setHover2(true);
  };
  const onHover3 = () => {
    setHover3(true);
  };
  const onHover4 = () => {
    setHover4(true);
  };
  const onHover5 = () => {
    setHover5(true);
  };
  const onHover6 = () => {
    setHover6(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  const onLeave1 = () => {
    setHover1(false);
  };
  const onLeave2 = () => {
    setHover2(false);
  };
  const onLeave3 = () => {
    setHover3(false);
  };
  const onLeave4 = () => {
    setHover4(false);
  };
  const onLeave5 = () => {
    setHover5(false);
  };
  const onLeave6 = () => {
    setHover6(false);
  };

  const parent = {
    visible: {
      opacity: 0.9,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const children = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="teamPage">
      <div className="firstPartOfTeamPresentation">
        <h1>UNE ÉQUIPE, UNE FAMILLE...</h1>
      </div>

      <div className="pictureAndTextAboutOneMember">
        <Onemember
          onClick={onClick}
          children={children}
          onHover={onHover}
          onLeave={onLeave}
          hover={hover}
          parent={parent}
          Background={Cassio}
          realName="Cassio"
          backgroundPosition="right"
          bgc="#cc7e01"
          titleColor="white"
          textColor="black"
          name="Cassiopée A.K.A Cassio"
          killerSkill="Vous trouver le Setup parfait en apprennant à vous connaître."
          profile="Vapoteuse avec nous depuis 2 ans , dans l'équipe depuis
          Septembre 2021."
          bestKiff="La recherche du MEILLEUR Conseil à donner!"
          setUp="DRAG MAX, COCO NANAS et FREEZE MELON"
          hobbies="Crossfit, Photo et Cinéphile sur les bords."
        />

        <Onemember
          children={children}
          onClick={onClick1}
          onHover={onHover1}
          onLeave={onLeave1}
          hover={hover1}
          parent={parent}
          Background={Enzo}
          realName="Enzo"
          backgroundPosition="right"
          bgc="black"
          titleColor="#cc7e01"
          textColor="white"
          name="Enzo A.K.A Zozo"
          killerSkill="Être à l'écoute, trouver le bon matos ou le bon juice!"
          profile="Septembre 2021 pour 2 ans d'apprentissage."
          bestKiff="Grand fan du monde de la vape, il est comme un poisson dans l'eau."
          setUp="Tout les matos faits main! Et un liquide différent chaque jour"
          hobbies="La Vape pour changer."
        />

        <Onemember
          children={children}
          onHover={onHover2}
          onLeave={onLeave2}
          onClick={onClick2}
          hover={hover2}
          parent={parent}
          Background={Geoffrey}
          realName="Geoffrey"
          backgroundPosition="center"
          bgc="white"
          titleColor="#cc7e01"
          textColor="black"
          name="Geoffrey ou Geo"
          killerSkill="Un grand coeur toujours prêt à vous écouter!"
          profile="Vapoteur depuis 7ans, dans l'équipe depuis avril 2021."
          bestKiff="Échanger avec ses clients, les accompagner et avoir des retours positifs."
          setUp="Une Drag X et du Pinkman"
          hobbies="Casquettes, baskets et grand fan de musique."
        />

        <Onemember
          children={children}
          onHover={onHover3}
          onLeave={onLeave3}
          onClick={onClick3}
          hover={hover3}
          parent={parent}
          Background={Allan}
          realName="Allan"
          bgc="white"
          titleColor="#cc7e01"
          textColor="black"
          name="Allan Alias Le Testeur"
          killerSkill="Tester des liquides et découvrir toujours plus de saveurs!"
          profile="Client OXYVAP depuis 7 ans, dans l'équipe depuis septembre 2020. "
          bestKiff="Retrouver une équipe et des clients géniaux!"
          setUp="DotSquonk et l'Hypnose"
          hobbies="Nager, l'art, le cinéma et la pop-culture."
        />

        <Onemember
          children={children}
          onHover={onHover4}
          onLeave={onLeave4}
          onClick={onClick4}
          hover={hover4}
          parent={parent}
          Background={Bombar}
          realName="Anthony"
          bgc="black"
          titleColor="#cc7e01"
          textColor="white"
          name="Anthony alias Bombar"
          killerSkill=" Fou de photographie des plus beaux setups."
          profile="Chez nous depuis 2018,  une superbe rencontre!"
          bestKiff="Echanger avec vous et vous trouvez les toutes dernières nouveautés sorties avant tout le monde!"
          setUp="Un Matos par jour, avec un bon gourmand"
          hobbies="Insta avec des #Vapshootings et le Rap."
        />

        <Onemember
          children={children}
          onHover={onHover5}
          onLeave={onLeave5}
          onClick={onClick5}
          hover={hover5}
          parent={parent}
          Background={Anto}
          realName="Antonin"
          backgroundPosition="right"
          bgc="#cc7e01"
          titleColor="white"
          textColor="black"
          name="Antonin ou Anto le bricolo"
          killerSkill=" Le scotch, la patafix et les élastiques. Réparations en tous genres. "
          profile="Depuis 2015, il est tombé dedans quand il était petit! "
          bestKiff="Vous faire tester des milliers de combinaisons au Mixologue!"
          setUp="Un Nautilus avec du Bruce ou de La Chose. "
          hobbies="Vaper sur tout et n'importe quoi et kiffer ça! "
        />

        <Onemember
          children={children}
          onHover={onHover6}
          onLeave={onLeave6}
          onClick={onClick6}
          hover={hover6}
          parent={parent}
          Background={Debo}
          realName="Deborah"
          backgroundPosition="center"
          bgc="white"
          titleColor="#cc7e01"
          textColor="black"
          name="Debo ou La Fondatrice"
          killerSkill="Décorer les boutiques encore mieux que chez elle ,un vrai talent caché!"
          profile="Créatrice d'Oxy Vap en 2014 et toujours aussi passionnée!"
          bestKiff="Bosser avec son équipe et apprécier chaque récit de réussite!"
          setUp="Un kit Tarot Nano et du red Moon"
          hobbies="Courrir , manger heathly et dirty dancing!"
        />
      </div>
      <div className="firstPartOfTeamPresentation">
        <h1>QUI GRANDIT AVEC VOUS !</h1>
      </div>
      <div className="photoBlock">
        <div className="blockOfTeamPhotos">
          <div className="halfPartOfBlock">
            <div className="bigBlock">
              <img src={team1} alt="" />
            </div>
            <div className="littleBlock">
              <img src={team2} alt="" />
            </div>
          </div>
          <div className="halfPartOfBlock">
            <div className="littleBlock">
              <img src={team3} alt="" />
            </div>
            <div className="bigBlock">
              <img src={team4} alt="" />
            </div>
          </div>
        </div>
        <div className="blockOfTeamPhotos">
          <div className="halfPartOfBlock">
            <div className="littleBlock">
              <img src={team5} alt="" />
            </div>
            <div className="bigBlock">
              <img src={team6} alt="" />
            </div>
          </div>
          <div className="halfPartOfBlock">
            <div className="bigBlock">
              <img src={team7} alt="" />
            </div>
            <div className="littleBlock">
              <img src={team8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
