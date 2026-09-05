import { gql } from "@apollo/client";
import { useMutation, useQuery } from "@apollo/client/react";
import { useState } from "react";
import ListingCard from "./components/ListingCard";
import ListingsToolbar from "./components/ListingsToolbar";
import Pagination from "./components/Pagination";
import { toast, ToastContainer } from "react-toastify";

const listingsQuery = gql`
  query Listings($limit: Int, $page: Int, $search: String) {
    listings(limit: $limit, page: $page, search: $search) {
      items {
        id
        title
        pricePerNight
        images
      }
      pagination {
        total
        totalPages
        limit
        page
      }
    }
  }
`;
const ADD_FAVORITE = gql`
  mutation AddFavorite($listingId: ID!) {
    addFavorite(listingId: $listingId) {
      id
    }
  }
`;

const handleComplated = () => {
  toast.success("added duccesfully");
};

function Listings() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(``);

  const { data, loading, error } = useQuery(listingsQuery, {
    variables: { limit: 5, page: page, search: search },
  });
  const [addFavorite] = useMutation(ADD_FAVORITE, {
    onCompleted: (data) => toast.success(data),
    onError: (err) => toast.message(err),
  });

  const totalPages = data?.listings?.pagination?.totalPages;

  return (
    <ToastContainer>
      <section className="listings-section">
        <ListingsToolbar search={search} onSearchChange={setSearch} />
        <div className="listing-grid">
          {loading && <h2>Loading...</h2>}
          {error && <p className="listing-message">{error.message}</p>}

          {data?.listings?.pagination.total == 0 && (
            <h2 className="listing-message">No Results</h2>
          )}
          {data?.listings?.items?.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              onFavorite={(listingId) =>
                addFavorite({ variables: { listingId } })
              }
            />
          ))}
        </div>
        {!loading && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        )}
      </section>
    </ToastContainer>
  );
}
export default Listings;
