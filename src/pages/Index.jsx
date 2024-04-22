import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Text, VStack, useToast } from "@chakra-ui/react";
import { FaUserCheck } from "react-icons/fa";

const Index = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [hierarchy, setHierarchy] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchHierarchy = async () => {
    if (!username) {
      toast({
        title: "Error",
        description: "Username can't be empty",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (role !== "agent" && role !== "player") {
      toast({
        title: "Error",
        description: "Please select a valid role",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const isAgent = role === "agent";
    const isPlayer = role === "player";

    setLoading(true);
    try {
      const response = await fetch(`https://bridge.747lc.com/Default/GetHierarchy?username=${username}&isAgent=${isAgent}&isPlayer=${isPlayer}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Connection: "keep-alive",
          Host: "bridge.747lc.com",
          Origin: "https://tmtools-pkj0vv.b4a.app",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: "https://tmtools-pkj0vv.b4a.app/",
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Mobile/15E148 Safari/604.1",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Dest": "empty",
        },
      });

      const data = await response.json();
      if (response.ok) {
        setHierarchy(data);
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to fetch hierarchy",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack spacing={4} p={5}>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Role</FormLabel>
        <Select placeholder="Select role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="agent">Agent</option>
          <option value="player">Player</option>
        </Select>
      </FormControl>
      <Button leftIcon={<FaUserCheck />} colorScheme="blue" isLoading={loading} onClick={fetchHierarchy}>
        Check Hierarchy
      </Button>
      {hierarchy && (
        <Box>
          <Text fontWeight="bold">Hierarchy:</Text>
          <Text>{hierarchy.message}</Text>
        </Box>
      )}
    </VStack>
  );
};

export default Index;
