import React, { useState } from "react";
import { Container, VStack, Text, Input, Select, Button, Box, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const fabricPrices = {
  cotton: 10,
  silk: 20,
  linen: 15,
  polyester: 8,
};

const Index = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [fabric, setFabric] = useState("");
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    if (width && height && fabric) {
      const area = width * height;
      const fabricPrice = fabricPrices[fabric];
      const estimatedPrice = area * fabricPrice;
      setPrice(estimatedPrice);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Curtain Shop
        </Heading>
        <Text fontSize="lg">Enter your window dimensions and select a fabric to get an estimate price.</Text>
        <FormControl id="width">
          <FormLabel>Width (in meters)</FormLabel>
          <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
        </FormControl>
        <FormControl id="height">
          <FormLabel>Height (in meters)</FormLabel>
          <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </FormControl>
        <FormControl id="fabric">
          <FormLabel>Fabric</FormLabel>
          <Select placeholder="Select fabric" value={fabric} onChange={(e) => setFabric(e.target.value)}>
            <option value="cotton">Cotton - $10/m²</option>
            <option value="silk">Silk - $20/m²</option>
            <option value="linen">Linen - $15/m²</option>
            <option value="polyester">Polyester - $8/m²</option>
          </Select>
        </FormControl>
        <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculatePrice}>
          Calculate Price
        </Button>
        {price !== null && (
          <Box p={4} mt={4} borderWidth={1} borderRadius="md" width="100%">
            <Text fontSize="lg">Estimated Price: ${price.toFixed(2)}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
