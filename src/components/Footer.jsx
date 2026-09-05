import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  return (
    <>
      <div
        style={{
          marginTop: 250,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#f7f7f7",
          alignItems: "center",
          height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 500,
          }}
        >
          <p>© 2026 Airbnb, Inc.</p>
          <p> Конфиденциальность</p>
          <p>Условия</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 100,
          }}
        >
          <FacebookIcon />
          <XIcon />
          <InstagramIcon />
        </div>
      </div>
    </>
  );
}

export default Footer;
