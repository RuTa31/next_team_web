import { Box, Typography } from "@mui/material";

const News = ({ data }) => {
  return (
    <Box sx={{ backgroundColor: "green", height: 1000, width: "100%" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{ backgroundColor: "red", width: "50%" }}
      >
        {data ? data.owner.firstName : "10 secrets for managing a remote team"}
      </Typography>
      <Typography>
        If you’re thinking of starting a blog of your own, but just don’t have a
        clue on what to blog about, then fear not! In this article, I have
        included a whole load of blog examples from a wide variety of different
        niches, all run on different blogging platforms like WordPress, Joomla!
        and Drupal. Since the beginning of the internet, millions and millions
        and millions of blogs have been created. Many have died due to lost
        interest or their owners giving up on the idea, while others have
        thrived and continue to grow, making money and earning their owners a
        steady income. It’s a constant evolution of content that keeps people
        coming back for more, especially if these blogs contact highly
        resourceful material that people find useful and interesting. Each
        example listed in this blog post are all different in some way and all
        bring something unique to their readers & subscribers. I want to show
        you what is possible and how you can take inspiration from them and
        create an awesome blog of your own. Some of these blogs make over $100k
        a month, others are just a hobby for their owners, but all have the same
        purpose at their core… the love of writing and sharing information. Some
        of these blogs make over $100k a month, others are just a hobby for
        their owners, but all have the same purpose at their core… the love of
        writing and Some of these blogs make over $100k a month, others are just
        a hobby for their owners, but all have the same purpose at their core…
        the love of writing and sharing information. Some of these blogs make
        over $100k a month, others are just a hobby for their owners, but all
        have the same purpose at their core… the love of writing and sharing
        information.
      </Typography>
    </Box>
  );
};
export default News;
