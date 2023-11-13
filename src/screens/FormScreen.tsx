import React, { useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";
import { IPerson } from "../models/person";

const FormScreen = () => {
  // State to manage the form's submitted data
  const [submittedData, setSubmittedData] = useState<IPerson | null>(null);

  // Handler to be called when the form is successfully submitted
  const handleFormSubmit = (data: IPerson) => {
    setSubmittedData(data);
  };

  return (
    <Box>
      <Flex
        direction={{ base: "row" }}
        justifyContent={{ base: "center" }}
        alignContent="center"
      >
        {submittedData ? (
          <Box>
            <CardComponent {...submittedData} />
            <Button mt={4} colorScheme="teal" onClick={() => !submittedData}>
              Go back
            </Button>
          </Box>
        ) : (
          <FormComponent onFormSubmit={handleFormSubmit} />
        )}
      </Flex>
    </Box>
  );
};

export default FormScreen;
