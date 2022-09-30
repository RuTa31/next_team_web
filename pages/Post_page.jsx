import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Cards from "../components/Cards";
import axios from "axios";
const Post = ({ post }) => {
  // console.log("add", post);
  return (
    <Box>
      <Typography variant="h3">Blog posts</Typography>
      <Typography variant="h6">
        Our latest updates and blogs about managing your team
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {post.map((Element, index) => {
          return (
            <div key={index}>
              <Cards data={Element} />
            </div>
          );
        })}
      </Box>
    </Box>
  );
};

Post.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("https://dummyapi.io/data/v1/post", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "app-id": "6336455296396a087298080d",
      },
    });
    const post = res.data.data;
    return { post };
  } catch (error) {
    return { error };
  }
};

export default Post;
