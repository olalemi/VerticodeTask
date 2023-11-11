import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import CardComponent from "../components/CardComponent";
import FormComponent from "../components/FormComponent";

// Define the structure of the form's submitted data
interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  job: string;
  bio: string;
  city: string;
  country: string;
  long: string;
  lat: string;
}

const FormScreen = () => {
  // State to manage the form's submitted data
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  // Handler to be called when the form is successfully submitted
  const handleFormSubmit = (data: FormValues) => {
    setSubmittedData(data);
  };

  return (
    <Box>
      {submittedData ? (
        <CardComponent
          firstName={submittedData.firstName}
          lastName={submittedData.lastName}
          dateOfBirth={submittedData.dateOfBirth}
          job={submittedData.job}
          bio={submittedData.bio}
          city={submittedData.city}
          country={submittedData.country}
          longitude={submittedData.long}
          latitude={submittedData.lat}
        />
      ) : (
        <FormComponent onFormSubmit={handleFormSubmit} />
      )}
    </Box>
  );
};

export default FormScreen;
