import React, { useState } from "react";
import { Box, HStack, Input, Button, Text, Flex } from "@chakra-ui/react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const copyTasks = [...tasks];

    copyTasks.splice(index, 1);

    setTasks(copyTasks);
  };

  return (
    <Box
      p={4}
      maxW="400px"
      borderRadius="lg"
      borderWidth="1px"
      mt={10}
      mx="auto"
    >
      <HStack>
        <Input
          placeholder="Add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTask} colorScheme="blue">
          Add
        </Button>
      </HStack>
      {tasks.map((input, index) => {
        return (
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap={4}
            borderWidth={1}
            borderRadius="md"
            p={4}
            boxShadow="md"
          >
            <Text key={index}>{input}</Text>
            <Button
              colorScheme="red"
              size="md"
              onClick={() => removeTask(index)}
            >
              -
            </Button>
          </Flex>
        );
      })}
    </Box>
  );
};

export default ToDoList;
