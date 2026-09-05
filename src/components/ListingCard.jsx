import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";

function ListingCard({ listing, onFavorite }) {
  const navigate = useNavigate();

  return (
    <article
      className="listing-card"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/listings/${listing.id}`)}
    >
      <div className="listing-image-wrap">
        <img
          src={listing.images}
          alt={listing.title}
          className="listing-image"
        />
        <IconButton
          className="favorite-button"
          aria-label={`Save ${listing.title}`}
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(listing.id);
          }}
        >
          {listing.isFavorite ? (
            <FavoriteIcon fontSize="inherit" sx={{ color: `red` }} />
          ) : (
            <FavoriteBorderIcon fontSize="inherit" />
          )}
        </IconButton>
      </div>
      <div className="listing-info">
        <h2 style={{ fontSize: 15 }}>{listing.title}</h2>
        <p>Comfortable home for your next trip</p>
        <strong>${listing.pricePerNight} night</strong>
      </div>
    </article>
  );
}

export default ListingCard;
