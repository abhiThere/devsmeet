import { useEffect, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import FavoriteImage from "../../assets/favorite.png";

import "./NoFavorites.css";

const NoFavorites = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="no-favorites">
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={inProp}
        timeout={300}
        classNames="slide-in"
      >
        <div className="favorite-star">
          <img src={FavoriteImage} alt="favorites star" />
        </div>
      </CSSTransition>

      <p>You got no favorites yet. Maybe start adding some?</p>
    </div>
  );
};

export default NoFavorites;
