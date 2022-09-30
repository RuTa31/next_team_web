import Box from "@mui/material/Box";
import Appbar from "./components/Appbar";
import Image_com from "./components/image_com";
// next module
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Appbar />
      {/* <Image_com /> */}
      <Link href="/post/first_post" color="secondary">
        text run
      </Link>
    </Box>
  );
}
