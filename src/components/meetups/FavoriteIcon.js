import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import classes from "./FavoriteIcon.module.css";

const FavoriteIcon = (props) => {
  const favIcon = props.isFavorite ? farStar : faStar;
  const favText = props.isFavorite ? "Unfavorite" : "Favorite";

  return (
    <div className={classes.fav}>
      <FontAwesomeIcon icon={favIcon} />
      <span>{favText}</span>
    </div>
  );
};

export default FavoriteIcon;
