import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { FavoritesContext } from "./../../store/favorites-context";
import FavoriteIcon from "./FavoriteIcon";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
        date: props.date,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
          <p>{props.date}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            <FavoriteIcon isFavorite={itemIsFavorite} />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
