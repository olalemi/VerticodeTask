import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Grid
} from "@chakra-ui/react";

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
interface CustomInputProps {
  value?: string; // value can be undefined initially, hence marked as optional
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // onClick is an event handler
}

interface FormComponentProps {
  onFormSubmit: (data: FormValues) => void;
}
// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  job: Yup.string().required("Job title is required"),
  bio: Yup.string().required("Bio is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  long: Yup.string().required("Longitude is required"),
  lat: Yup.string().required("Latitude is required")
});

const FormComponent: React.FC<FormComponentProps> = ({ onFormSubmit }) => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      job: "",
      bio: "",
      city: "",
      country: "",
      long: "",
      lat: ""
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onFormSubmit(values);
      resetForm();
      toast({
        title: "Form submitted successfully!",
        status: "success",
        duration: 2000,
        isClosable: true
      });
    }
  });

  // Custom DatePicker input
  const CustomInput: React.FC<CustomInputProps> = ({ value, onClick }) => (
    <Button onClick={onClick}>{value || "Select date"}</Button>
  );

  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <form onSubmit={formik.handleSubmit}>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          <FormControl isRequired mt={4}>
            <FormLabel>First Name</FormLabel>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Last Name</FormLabel>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Job Title</FormLabel>
            <Input
              id="job"
              name="job"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.job}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Date of Birth</FormLabel>
            <DatePicker
              selected={formik.values.dateOfBirth}
              onChange={(date) => formik.setFieldValue("dateOfBirth", date)}
              customInput={<CustomInput />}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>City</FormLabel>
            <Input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Country</FormLabel>
            <Input
              id="country"
              name="country"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Longitude</FormLabel>
            <Input
              id="long"
              name="long"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.long}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Latitude</FormLabel>
            <Input
              id="lat"
              name="lat"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lat}
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Bio</FormLabel>
            <Textarea
              id="bio"
              name="bio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bio}
            />
          </FormControl>
        </Grid>
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formik.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FormComponent;
