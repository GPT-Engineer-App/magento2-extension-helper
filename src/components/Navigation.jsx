import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box p={4} bg="gray.100">
      <Button as={Link} to="/" mr={4}>
        Home
      </Button>
      <Button as={Link} to="/product" mr={4}>
        Product Page
      </Button>
      <Button as={Link} to="/blog">
        Blog
      </Button>
    </Box>
  );
}

export default Navigation;
