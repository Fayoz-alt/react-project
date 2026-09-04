import { gql } from "@apollo/client"
import { useParams } from "react-router"

const LISTING_DETAILS = gql`
    query FeaturedListings($listingId: ID!) {
     listing(id: $listingId) {
       bathrooms
       bedrooms
       beds
       description
       guests
       id
       images
       location
       pricePerNight
       rating
       reviewsCount
       title
     }
}
`

function Details() {
    const {id} = useParams()
    return <div>

    </div>
}
export default Details