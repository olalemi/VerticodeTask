import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IPerson, ILocation } from "../models/person";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Grid,
  Text,
} from "@chakra-ui/react";

interface CustomInputProps {
  value?: string; // value can be undefined initially, hence marked as optional
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // onClick is an event handler
}

interface FormComponentProps {
  onFormSubmit: (data: IPerson) => void;
}
// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(
      /^[A-Za-z]{4,}$/,
      "First name must be at least 4 alphabetical letters",
    )
    .required("First name is required"),
  lastName: Yup.string()
    .matches(
      /^[A-Za-z]{4,}$/,
      "Last name must be at least 4 alphabetical letters",
    )
    .required("Last name is required"),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  job: Yup.string().required("Job title is required"),
  bio: Yup.string().required("Bio is required"),
  location: Yup.object().shape({
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    long: Yup.string().required("Longitude is required"),
    lat: Yup.string().required("Latitude is required"),
  }),
});

const calculateEstimatedScore = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

const FormComponent: React.FC<FormComponentProps> = ({ onFormSubmit }) => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      job: "",
      bio: "",
      location: {
        city: "",
        country: "",
        long: "",
        lat: "",
      },
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const estimatedScore = calculateEstimatedScore();

      const personData: IPerson = {
        ...values,
        dateOfBirth: values.dateOfBirth || new Date(), // Provide a default date if null
        estimatedScore,
        location: values.location as ILocation,
      };

      onFormSubmit(personData);
      resetForm();
      toast({
        title: "Form submitted successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    },
  });

  // Custom DatePicker input
  const CustomInput: React.FC<CustomInputProps> = ({ value, onClick }) => (
    <Button onClick={onClick}>{value || "Select date"}</Button>
  );

  return (
    <Box p={20} borderWidth="1px" flex="1" borderRadius="md">
      <Box>
        <Text
          color="#000"
          textAlign="center"
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight={700}
          mt="7px"
        >
          VERITICODE PERSON FORM DATA
        </Text>
      </Box>
      <Box boxShadow="md" p={20}>
        <form onSubmit={formik.handleSubmit}>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)" }}
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
              {formik.touched.firstName && formik.errors.firstName && (
                <Text
                  color="#FF0000"
                  fontSize={{ base: "10px", md: "10px" }}
                  mt="2px"
                  ml="10px"
                >
                  {formik.errors.firstName}
                </Text>
              )}
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
              {formik.touched.lastName && formik.errors.lastName && (
                <Text
                  color="#FF0000"
                  fontSize={{ base: "10px", md: "10px" }}
                  mt="2px"
                  ml="10px"
                >
                  {formik.errors.lastName}
                </Text>
              )}
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
              {formik.touched.job && formik.errors.job && (
                <Text
                  color="#FF0000"
                  fontSize={{ base: "10px", md: "10px" }}
                  mt="2px"
                  ml="10px"
                >
                  {formik.errors.job}
                </Text>
              )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Date of Birth</FormLabel>
              <DatePicker
                selected={formik.values.dateOfBirth}
                onChange={(date) => formik.setFieldValue("dateOfBirth", date)}
                customInput={<CustomInput />}
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                <Text
                  color="#FF0000"
                  fontSize={{ base: "10px", md: "10px" }}
                  mt="2px"
                  ml="10px"
                >
                  {formik.errors.dateOfBirth}
                </Text>
              )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                id="city"
                name="location.city"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.city}
              />
              {formik.touched.location?.city &&
                formik.errors.location?.city && (
                  <Text
                    color="#FF0000"
                    fontSize={{ base: "10px", md: "10px" }}
                    mt="2px"
                    ml="10px"
                  >
                    {formik.errors.location.city}
                  </Text>
                )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Country</FormLabel>
              <Input
                id="country"
                name="location.country"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.country}
              />
              {formik.touched.location?.country &&
                formik.errors.location?.country && (
                  <Text
                    color="#FF0000"
                    fontSize={{ base: "10px", md: "10px" }}
                    mt="2px"
                    ml="10px"
                  >
                    {formik.errors.location.country}
                  </Text>
                )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Longitude</FormLabel>
              <Input
                id="long"
                name="location.long"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.long}
              />
              {formik.touched.location?.long &&
                formik.errors.location?.long && (
                  <Text
                    color="#FF0000"
                    fontSize={{ base: "10px", md: "10px" }}
                    mt="2px"
                    ml="10px"
                  >
                    {formik.errors.location.long}
                  </Text>
                )}
            </FormControl>

            <FormControl isRequired mt={4}>
              <FormLabel>Latitude</FormLabel>
              <Input
                id="lat"
                name="location.lat"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location.lat}
              />
              {formik.touched.location?.lat && formik.errors.location?.lat && (
                <Text
                  color="#FF0000"
                  fontSize={{ base: "10px", md: "10px" }}
                  mt="2px"
                  ml="10px"
                >
                  {formik.errors.location.lat}
                </Text>
              )}
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
              {formik.touched.bio && formik.errors.bio && (
                <Text
                  color="#FF0000"
                  fontSize={{ base: "10px", md: "10px" }}
                  mt="2px"
                  ml="10px"
                >
                  {formik.errors.bio}
                </Text>
              )}
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
    </Box>
  );
};

export default FormComponent;
