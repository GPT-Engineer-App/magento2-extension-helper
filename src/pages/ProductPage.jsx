import { useState } from "react";
import { Input, Button, Box, Image, Grid } from "@chakra-ui/react";

function ProductPage() {
  const [isbn, setIsbn] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSearch = async () => {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${isbn}+book+cover&searchType=image&key=YOUR_API_KEY&cx=YOUR_CX`);
    const data = await response.json();
    setImages(data.items);
  };

  return (
    <Box p={4}>
      <Input placeholder="Enter ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
      <Button onClick={handleSearch} mt={2}>
        Search
      </Button>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={4}>
        {images.map((image) => (
          <Box key={image.link} onClick={() => setSelectedImage(image.link)}>
            <Image src={image.link} alt="Book cover" />
          </Box>
        ))}
      </Grid>
      {selectedImage && (
        <Box mt={4}>
          <Image src={selectedImage} alt="Selected book cover" />
        </Box>
      )}
    </Box>
  );
}

export default ProductPage;
