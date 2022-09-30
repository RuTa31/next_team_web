import Box from "@mui/material/Box";
import Navbar from "../components/NavBar";

// next module
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Link href="/Post_page" color="secondary">
        Post page
      </Link>
    </Box>
  );
}
