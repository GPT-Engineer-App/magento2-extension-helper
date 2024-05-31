import { useState } from "react";
import { Container, VStack, Text, Heading, Input, Button, Box, IconButton, useToast } from "@chakra-ui/react";
import { FaMagento } from "react-icons/fa";

const Index = () => {
  const [extensionName, setExtensionName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [version, setVersion] = useState("");
  const toast = useToast();

  const handleGenerate = () => {
    if (!extensionName || !description || !author || !version) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const extensionCode = `
<?php
namespace ${author}\\${extensionName};

use Magento\\Framework\\Component\\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    '${author}_${extensionName}',
    __DIR__
);
?>
    `;

    navigator.clipboard.writeText(extensionCode).then(() => {
      toast({
        title: "Success",
        description: "Magento 2 extension code copied to clipboard.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <IconButton aria-label="Magento Icon" icon={<FaMagento />} size="lg" isRound />
        <Heading as="h1" size="xl">
          Magento 2 Extension Generator
        </Heading>
        <Input placeholder="Extension Name" value={extensionName} onChange={(e) => setExtensionName(e.target.value)} />
        <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Input placeholder="Version" value={version} onChange={(e) => setVersion(e.target.value)} />
        <Button colorScheme="teal" onClick={handleGenerate}>
          Generate Extension
        </Button>
        <Box p={4} borderWidth={1} borderRadius="md" width="100%">
          <Text>Generated Extension Code:</Text>
          <Text as="pre" whiteSpace="pre-wrap">
            {`
<?php
namespace ${author}\\${extensionName};

use Magento\\Framework\\Component\\ComponentRegistrar;

ComponentRegistrar::register(
    ComponentRegistrar::MODULE,
    '${author}_${extensionName}',
    __DIR__
);
?>
            `}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
