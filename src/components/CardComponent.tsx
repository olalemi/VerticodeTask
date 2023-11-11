import React from "react";
import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react";

// Define the types for the props the CardComponent will accept
interface CardProps {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  job: string;
  bio: string;
  city: string;
  country: string;
  longitude: string;
  latitude: string;
}

const CardComponent: React.FC<CardProps> = ({
  firstName,
  lastName,
  dateOfBirth,
  job,
  bio,
  city,
  country,
  longitude,
  latitude
}) => {
  // Format the date of birth to a readable format
  const dob = dateOfBirth ? dateOfBirth.toLocaleDateString() : "N/A";

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="sm">
      <VStack align="stretch" spacing={3}>
        <HStack justifyContent="space-between">
          <Text fontWeight="bold">
            {firstName} {lastName}
          </Text>
          <Badge colorScheme="green">{job}</Badge>
        </HStack>
        <Text color="gray.500">{dob}</Text>
        <Text>{bio}</Text>
        <Text>
          {city}, {country}
        </Text>
        <HStack justifyContent="space-between">
          <Text>Longitude: {longitude}</Text>
          <Text>Latitude: {latitude}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CardComponent;
