import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function ListingCard({ listing, onFavorite }) {
  return (
    <article className="listing-card">
      <div className="listing-image-wrap">
        <img
          src={listing.images}
          alt={listing.title}
          className="listing-image"
        />
        <IconButton
          className="favorite-button"
          aria-label={`Save ${listing.title}`}
          onClick={() => onFavorite(listing.id)}
        >
          <FavoriteBorderIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="listing-info">
        <h2>{listing.title}</h2>
        <p>Comfortable home for your next trip</p>
        <strong>${listing.pricePerNight} night</strong>
      </div>
    </article>
  );
}

export default ListingCard;
