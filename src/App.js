import "./App.css";

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Responsive
import { useMediaQuery } from "react-responsive";

//Components
import Header from "./Components/Header/Header";

//Containers
import Home from "./Containers/Home/Home";
import Team from "./Containers/Team/Team";
import Shops from "./Containers/Shops/Shops";
import Products from "./Containers/Products/Products";
import Medias from "./Containers/Medias/Medias";
import Liquids from "./Containers/Liquids/Liquids";
import Matos from "./Containers/Matos/Matos";
import Cbd from "./Containers/Cbd/Cbd";
import Mixo from "./Containers/Mixo/Mixo";
import Coffees from "./Containers/Coffees/Coffees";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faStore,
  faBars,
  faHammer,
  faUserMd,
  faHeartbeat,
  faUserTie,
  faFootballBall,
  faChevronDown,
  faAngleDoubleDown,
  faMapMarkedAlt,
  faClock,
  faPhoneAlt,
  faChevronRight,
  faBookOpen,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelope,
  faKey,
  faStore,
  faBars,
  faHammer,
  faUserMd,
  faHeartbeat,
  faUserTie,
  faFootballBall,
  faChevronDown,
  faAngleDoubleDown,
  faMapMarkedAlt,
  faClock,
  faPhoneAlt,
  faFacebookSquare,
  faInstagramSquare,
  faChevronRight,
  faBookOpen,
  faTimes
);

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  return (
    <Router>
      <Header isTabletOrMobile={{ isTabletOrMobile }} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/shops">
          <Shops />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/liquids">
          <Liquids />
        </Route>
        <Route exact path="/products/matos">
          <Matos />
        </Route>
        <Route exact path="/products/cbd">
          <Cbd />
        </Route>
        <Route exact path="/products/mixologue">
          <Mixo />
        </Route>
        <Route exact path="/products/coffees">
          <Coffees />
        </Route>
        <Route exact path="/medias">
          <Medias />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
