import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";

const BlogPage = () => {
  const blogPosts = [
    {
      title: "First Blog Post",
      description: "This is the description for the first blog post.",
      link: "/blog/first-post",
    },
    {
      title: "Second Blog Post",
      description: "This is the description for the second blog post.",
      link: "/blog/second-post",
    },
  ];

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Blog
      </Heading>
      <VStack spacing={4} align="start">
        {blogPosts.map((post, index) => (
          <Box key={index} p={4} borderWidth={1} borderRadius="md" width="100%">
            <Heading as="h2" size="md">
              {post.title}
            </Heading>
            <Text mt={2}>{post.description}</Text>
            <Link href={post.link} color="teal.500" mt={2}>
              Read more
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default BlogPage;
