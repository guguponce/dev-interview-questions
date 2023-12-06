import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav id="navbar">
      <Link
        style={{
          display: "inline-block",
          color: "inherit",
          textDecoration: "none",
        }}
        href={"/"}
      >
        <div id="logo">
          <h4>Dev</h4>
          <h6>Interview</h6>
          <h6>Questions</h6>
        </div>

        <div id="mobile-logo">
          <h5>Dev</h5>
          <h6>IQ</h6>
        </div>
      </Link>
    </nav>
  );
}
