import React from "react";
import heroimg from "../images/Contact_Us.png";
import "./Contactus.css";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Container,
  Paper,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Height } from "@mui/icons-material";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  companyName: Yup.string().required("Required"),
  mobileNumber: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  projectType: Yup.string().required("Required"),
  projectCategory: Yup.string().required("Required"),
  requirement: Yup.string().required("Required"),
});

const Contactus = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      mobileNumber: "",
      email: "",
      country: "",
      city: "",
      projectType: "",
      projectCategory: "",
      requirement: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <img
            className="wow animate__animated animate__fadeInDown"
            data-wow-duration="1.5s"
            src={heroimg}
            alt="contactimg"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </Box>
        <Typography
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="1s"
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 425px)": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            "@media (max-width: 375px)": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          Let's kickstart your project together.
        </Typography>
        <Typography
          className="wow animate__animated animate__fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay="1s"
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          We promise to respond within a business day.
        </Typography>
      </section>

      <section>
        <Container maxWidth="md" sx={{ mb: "100px", marginTop: "50px"}}>
          <Paper
            elevation={3}
            sx={{ p: 4, mt: 4, borderRadius: 2, bgcolor: "#e5e5e5" }}
          >
            <Typography variant="h6" gutterBottom>
              1. Personal Information
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={2}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    {...formik.getFieldProps("fullName")}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                  />
                  <TextField
                    fullWidth
                    label="Company Name"
                    {...formik.getFieldProps("companyName")}
                    error={
                      formik.touched.companyName &&
                      Boolean(formik.errors.companyName)
                    }
                    helperText={
                      formik.touched.companyName && formik.errors.companyName
                    }
                  />
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    {...formik.getFieldProps("mobileNumber")}
                    error={
                      formik.touched.mobileNumber &&
                      Boolean(formik.errors.mobileNumber)
                    }
                    helperText={
                      formik.touched.mobileNumber && formik.errors.mobileNumber
                    }
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    select
                    label="Country"
                    {...formik.getFieldProps("country")}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                    onChange={(event) => {
                      const selectedCountry = event.target.value;
                      formik.setFieldValue("country", selectedCountry);

                      // Perform any action based on the selected country
                      console.log("Selected Country:", selectedCountry);

                      // Example: Auto-fill the city field based on the country
                      if (selectedCountry === "USA") {
                        formik.setFieldValue("city", "New York");
                      } else if (selectedCountry === "Canada") {
                        formik.setFieldValue("city", "Toronto");
                      }
                    }}
                  >
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    label="City"
                    {...formik.getFieldProps("city")}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Stack>
                <Typography variant="h6" gutterBottom>
                  2. What Is Your Next Project?
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    fullWidth
                    select
                    label="Project Type"
                    {...formik.getFieldProps("projectType")}
                    error={
                      formik.touched.projectType &&
                      Boolean(formik.errors.projectType)
                    }
                    helperText={
                      formik.touched.projectType && formik.errors.projectType
                    }
                  >
                    <MenuItem value="Website Design">Website Design</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    select
                    label="Project Category"
                    {...formik.getFieldProps("projectCategory")}
                    error={
                      formik.touched.projectCategory &&
                      Boolean(formik.errors.projectCategory)
                    }
                    helperText={
                      formik.touched.projectCategory &&
                      formik.errors.projectCategory
                    }
                  >
                    <MenuItem value="CMS Website">CMS Website</MenuItem>
                  </TextField>
                </Stack>
                <TextField
                  fullWidth
                  multiline
                  rows={1}
                  label="Requirement"
                  {...formik.getFieldProps("requirement")}
                  error={
                    formik.touched.requirement &&
                    Boolean(formik.errors.requirement)
                  }
                  helperText={
                    formik.touched.requirement && formik.errors.requirement
                  }
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ bgcolor: "#C8102E", color: "#fff", mt: 2 }}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Paper>
        </Container>
      </section>
    </div>
  );
};

export default Contactus;