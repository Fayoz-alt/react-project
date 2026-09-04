import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

function ListingCard({ listing, onFavorite }) {
  console.log(listing.isFavorite);

  return (
      <article className="listing-card" style={{cursor: `pointer`}}>
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
            {listing.isFavorite ? (
              <FavoriteIcon fontSize="inherit" sx={{ color: `red` }} />
            ) : (
              <FavoriteBorderIcon fontSize="inherit" />
            )}
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
