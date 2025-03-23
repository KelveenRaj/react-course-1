import React, { useState } from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="auto"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        borderWidth={1}
        borderRadius="md"
        p={4}
        boxShadow="md"
      >
        <Text fontSize="xl">{count}</Text>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => setCounter(count + 1)}
        >
          +
        </Button>
        <Button
          colorScheme="red"
          size="md"
          onClick={() => setCounter(count - 1)}
        >
          -
        </Button>
      </Flex>
    </Box>
  );
};

export default Counter;
