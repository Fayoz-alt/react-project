import Listings from "./Listings";
import Button from "@mui/material/Button";
import { Link } from "react-router";
import SiteHeader from "./SiteHeader";

function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />
      <Listings />
      <div className="home-action">
        <Link to={`/register`}>
          <Button variant="contained">Register</Button>
        </Link>
      </div>
    </main>
  );
}
export default Home;
