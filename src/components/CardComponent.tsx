import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import {IPerson} from "../models/person";



const CardComponent: React.FC<IPerson> = ({
  firstName,
  lastName,
  dateOfBirth,
  job,
  bio,
  location: { city, country, long, lat }
}) => {
  // Format the date of birth to a readable format
  const dob = dateOfBirth ? dateOfBirth.toLocaleDateString() : "N/A";

  return (
    <Box
      p={5}
      mt="200px"
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      width="sm"
    >
      <VStack align="stretch" spacing={3}>
        <HStack justifyContent="space-between">
          <Text fontWeight="bold">
            {firstName} {lastName}
          </Text>
        </HStack>
        <Text colorScheme="green">Job: {job}</Text>

        <Text color="gray.500">Date of Birth: {dob}</Text>
        <Text>Bio: {bio}</Text>
        <Text>
          Location: {city}, {country}
        </Text>
        <HStack justifyContent="space-between">
          <Text>Longitude: {long}</Text>
          <Text>Latitude: {lat}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CardComponent;
