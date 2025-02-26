import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  TextField,
  CardContent,
  Card,
  Avatar,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import heroImg from "../images/Industries.png";
import callusimg from "../images/Call us.png";
import locationimg from "../images/Location.png";
import emailimg from "../images/Email.png";
import mockUpImg from "../images/Mockup.png";
import customSolutionsImg from "../images/Custom Solutions.svg";
import fullStackImg from "../images/Full-Stack Expertise.svg";
import scalabilityImg from "../images/Scalability.svg";
import userCenterImg from "../images/User-Centered Design.svg";
import caseStudiesImg from "../images/Case Study.png";
import arrowImg from "../images/right-arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./Industries.css";
import { useState, useRef, useEffect } from "react";

function Industries() {
  const services = [
    {
      title: "Custom Solutions",
      description:
        "We create customized web solutions designed to meet your unique business needs and goals, ensuring your site stands out and performs optimally.",
      img: customSolutionsImg,
    },
    {
      title: "Full-Stack Expertise",
      description:
        "With comprehensive expertise in both front-end and back-end development, we deliver seamless, high-performance web applications from start to finish.",
      img: fullStackImg,
    },
    {
      title: "User-Centered Design",
      description:
        "Our focus on user experience ensures your website is not only visually appealing but also intuitive, driving higher engagement and conversions.",
      img: userCenterImg,
    },
    {
      title: "Scalability",
      description:
        "We build scalable web platforms that can grow with your business, accommodating future expansions and evolving market demands.",
      img: scalabilityImg,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("animated-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.disconnect(); // Stop observing after first trigger
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Client Name",
      position: "Company Name",
      feedback:
        "❝ They consistently provide innovative web solutions tailored to our evolving needs. Their strategic approach and technical expertise have significantly enhanced our digital presence. ❞",
    },
    {
      name: "Kristin Watson",
      position: "Human Resource Manager",
      feedback:
        "❝ Their team exceeded our expectations, delivering a highly scalable solution that perfectly aligned with our business goals. Their commitment to excellence and attention to detail made all the difference. ❞",
    },
    {
      name: "Client Name",
      position: "Company Name",
      feedback:
        "❝ From initial consultation to final delivery, their team demonstrated unmatched professionalism and expertise. They not only met our expectations but helped us achieve substantial growth. ❞",
    },
  ];

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    requirement: Yup.string().required("Requirement is required"),
  });

  return (
    <div>
      <section className="home">
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, sm: 6, md: 6, lg: 11, xl: 13.5 },
            py: { xs: 4, md: 5 },
            overflow: "hidden",
            width: "100%", // Ensures it stretches across full width
          }}
        >
          {/* Left Content (Text) */}
          <Box
          className="wow animate__animated animate__fadeInLeft"
            data-wow-duration="1.5s"
            sx={{
              flex: { xs: 1, sm: 1.2, md: 1.3 }, // More space for text, especially on tablets
              textAlign: { xs: "center", sm: "center", md: "left" },
              maxWidth: { xs: "100%", sm: "65%", md: "55%" }, // Adjust width dynamically
              p: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "22px",
                  md: "24px",
                  lg: "25px",
                  xl: "32px",
                },
                display: "inline-block",
                p: 1, // Padding inside the heading border
              }}
            >
              {`Ecommerce & Marketplace`}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              mb={3}
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "15px",
                  lg: "17px",
                  xl: "20px",
                },
                display: "inline-block",
                maxWidth: {
                  xs: "312px",
                  sm: "413px",
                  md: "514px",
                  lg: "605px",
                  xl: "704px",
                },
                p: 1,
              }}
            >
              "Building secure, scalable eCommerce platforms with smooth product
              management and great user experiences to boost online sales."
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 3, md: 4 }, // Adjust spacing between buttons
                flexDirection: { xs: "column", sm: "row" }, // Stack buttons on small screens
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Button
                sx={{
                  backgroundColor: "black",
                  textTransform: "none",
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
                variant="contained"
              >
                Get a Expert Advise
              </Button>
              <Button
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid black",
                  boxShadow: "none",
                  color: "black",
                  textTransform: "none",
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.25, md: 1.5 },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
                variant="contained"
              >
                Case Studies
              </Button>
            </Box>
          </Box>

          {/* Right Content (Image) */}
          <Box
            sx={{
              flex: { xs: 1, sm: 0.8, md: 0.9 }, // Less space for image on tablets but keeps it balanced
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { xs: "100%", sm: "75%", md: "45%" }, // Increase size on tablets
              p: 2,
            }}
          >
            <img
              src={heroImg}
              className="wow animate__animated animate__fadeInRight"
              data-wow-duration="1.5s"
              alt="Hero"
              style={{
                width: "100%", // Ensures image fills its given space
                maxWidth: "599px", // Prevents excessive stretching
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </section>

      <section id="animated-section" style={{padding: "20px"}}>
        <Box
        className={`animated-box ${isVisible ? "fade-in" : ""}`}
              data-wow-duration="1.5s"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e5e5e5",
            height: { xs: "auto",sm: "400px", md: "300px", lg: "320px" , xl: "450px"}, // Auto height on small screens, fixed 350px on medium and up
            width: {xs: "auto",  sm: "auto", md: "700px", lg: "1000px", xl: "1420px"},
            p: 3,
            borderRadius: 2,
            maxWidth: 1420,
            margin: "auto",
            flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
            textAlign: { xs: "center", md: "left" }, // Center text on small screens
          }}
        >
          {/* Image Section */}
          <Box
            component="img"
            src={mockUpImg} // Replace with your image URL
            alt="Example"
            sx={{
              width: { xs: "70%",sm: "30%", md: "40%", lg: "40%", xl: "40%" }, // Full width on small screens
              height: {xs: "auto", sm: "190px", md: "auto", lg: "auto", xl: "auto"},
              borderRadius: "8px",
              marginRight: { xs: 0, md: 2 },
              marginBottom: { xs: 2, md: 0 }, // Add spacing below image on small screens
            }}
          />

          {/* Text Section */}
          <Box sx={{ width: { xs: "100%", md: "60%" } }}>
            <Typography 
            sx={{
              fontSize: {xs: "14px", sm: "auto", md: "18px", lg: "22px", xl: "28px"}
            }}
            variant="h6" 
            fontWeight="bold">
              "Creating cutting-edge eCommerce apps that are revolutionizing the
              online shopping experience!"
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginTop: "10px",
                fontSize: {xs: "12px", sm: "auto", md: "14px", lg: "16px", xl: "20px"}
               }}
            >
              KDigitalCurry is a leading eCommerce app development company,
              specializing in designing, developing, testing, launching, and
              optimizing eCommerce apps. We empower businesses to succeed in the
              rapidly growing online shopping market, delivering apps that
              delight users with exceptional features.
            </Typography>
          </Box>
        </Box>
      </section>

      <section
        className="web-services"
        style={{
          backgroundColor: "#fff",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="languages">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "28px" }, // Responsive font size
              fontWeight: "bold",
              textAlign: "center",
              mb: 3,
              marginTop: "40px",
            }}
          >
            Why Us KDigitalCurry
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: 3, // Keeps vertical spacing consistent
              justifyContent: "center",
              p: { xs: 0.1, sm: 1, md: 1 },
            }}
          >
            {services.map((service, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "calc(45% - 46px)", // Slightly increases horizontal spacing
                    minWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    mx: "9px", // Adds more space between cards
                    my: "-15px",
                    mb: { xs: "8px", sm: "10px", md: "16px", lg: "10px" }, // Adds vertical spaci
                  }}
                >
                  <Card
                    sx={{
                      bgcolor: "#FFF",
                      borderRadius: 3,
                      boxShadow: 0,
                      width: {
                        xs: "250px",
                        sm: "300px",
                        md: "520px",
                        lg: "600px",
                        xl: "698px",
                      },
                      height: {
                        xs: "178px",
                        sm: "240px",
                        md: "228px",
                        lg: "240px",
                        xl: "230px",
                      },
                      p: {
                        xs: "4px",
                        sm: "12px",
                        md: "12px",
                        lg: "18px",
                        lx: "20px",
                      },
                    }}
                  >
                    <CardContent>
                      <Avatar
                        src={service.img}
                        alt={service.title}
                        sx={{
                          width: { xs: 40, sm: 48, md: 50, lg: 54, xl: 64 }, // Responsive width
                          height: { xs: 40, sm: 48, md: 50, lg: 54, xl: 64 }, // Responsive height
                          mb: { xs: 1, sm: 2, md: 3 }, // Adjust spacing
                        }}
                      />

                      {/* Service Title */}
                      <Typography
                        variant="h6"
                        fontWeight="500"
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "18px",
                            md: "21px",
                            lg: "22px",
                            xl: "24px",
                          }, // Responsive font size
                          marginBottom: "8px",
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Service Description */}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                            xl: "20px",
                          }, // Smaller font on mobile
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </div>
      </section>

      <section style={{ padding: "20px"}}>
        <Box
          sx={{
            textAlign: "left",
            maxWidth: "1400px",
            width: {xs: "auto", sm: "auto", md: "1000px",},
            margin: "auto",
            marginBottom: "20px",
            paddingLeft: "20px",
          }}
        >
          <Typography 
          sx={{
            fontSize: {xs: "18px", sm: "18px", md: "21px", lg: "26px", xl: "33px"}
          }}
          variant="h5" 
          fontWeight="bold">
            Case Studies
          </Typography>
        </Box>
        <Box
          sx={{
            width: {xs: "auto", sm: "auto", md: "1000px",},
            height: {xs: "auto", sm: "auto", md: "auto", lg: "autp", xl: "auto"},
            maxWidth: "1400px",
            minHeight: {  xs: "auto" }, // Ensures height on larger screens
            margin: "auto",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on small screens
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Left Section (Text) */}
          <Box sx={{ flex: "1 1 60%", marginLeft: "20px" }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginTop: {xs: "10px", md: "-100px"},
                fontSize: {xs: "17px", sm: "20px", md: "24px", lg: "27px", xl: "30px"}
               }}
            >
              Project Name
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, mb: { md: "2"},
              fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "19px", xl: "22px"}
             }}>
              Lorem ipsum dolor sit amet consectetur. Metus auctor mauris non
              hac pellentesque. Ut mi lectus quis curabitur amet curabitur
              viverra orci faucibus. Magna lorem vitae quis fusce varius
              volutpat commodo nisl.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#C8102E",
              height: {xs: "25px"},
              width: {xs: "155px"},
              fontSize: {xs: "11px"},
              marginTop: {xs: "15px"},
              marginBottom: {sm: "-30px"}
             }}>
              Explore More
              <img
                src={arrowImg}
                alt="Start"
                style={{ width: 18, height: 18, marginLeft: 10 }}
              />
            </Button>
          </Box>

          {/* Right Section (Image) */}
          <Box
            sx={{
              flex: "1 1 40%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={caseStudiesImg}
              alt="Placeholder"
              sx={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "10px",
                fontSize: {xs: "", sm: "", md: "", lg: "", xl: "33px"}
              }}
            />
          </Box>
        </Box>
      </section>

      <section className="testimonials">
        <div className="what-our-clients-say">
          <h2>What Our Clients Say</h2>

          <div className="boarder">
            <Box
              sx={{
                width: "100%",
                maxWidth: "1900px",
                mx: "auto",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                height: "500px",
              }}
            >
              <Swiper
                style={{
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={window.innerWidth < 768 ? 5 : 10}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 5,
                  depth: 120,
                  modifier: 1,
                  scale: 0.9,
                  slideShadows: false,
                }}
                pagination={
                  window.innerWidth <= 1024 ? { clickable: true } : false
                }
                modules={[EffectCoverflow, Pagination]}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "100%",
                      maxWidth: "670px",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1px",
                    }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: "92%",
                          sm: "88%",
                          md: "87%",
                          lg: "90%",
                          xl: "670px",
                        },
                        height: {
                          xs: "240px",
                          sm: "250px",
                          md: "260px",
                          lg: "200px",
                        },
                        bgcolor: "#F4F4F4",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        borderRadius: 3,
                        boxShadow: 3,
                        textAlign: "left",
                        p: { xs: 1.5, sm: 2, md: 3 },
                        mx: { xs: 1, sm: 2, md: 1 },
                      }}
                    >
                      <Typography
                        variant="body1"
                        mt={1.5}
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          lineHeight: { xs: "1.3", sm: "1.5", md: "1.6" },
                        }}
                      >
                        {testimonial.feedback}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                          marginTop: "15px",
                          mb: 0.5,
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                          mb: 0.5,
                        }}
                      >
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#e5e5e5",
          paddingTop: "40px",
          paddingBottom: "30px",
          marginBottom: "50px",
        }}
      >
        <div className="contact-us">
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
              textAlign: "center",
              marginBottom: 4,
            }}
          >
            Contact us
          </Typography>

          <Box
            sx={{
              padding: { xs: 2, sm: 4 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, md: 4 },
            }}
          >
            {/* Left Section */}
            <Stack
              spacing={3}
              sx={{
                width: { xs: "100%", md: "40%" },
                position: "relative",
                top: { xs: "-40px", md: "-80px" }, // Adjusts text position based on screen size
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  fontWeight: "bold",
                }}
              >
                Need Assistance? Contact Us Today
              </Typography>

              {/* Contact Details */}
              {[
                {
                  img: locationimg,
                  title: "Location:",
                  text: "Office No. 10, 2nd Floor, Chandra Pushpa, Hirachand Desai Rd, Opp. Ghatkopar Metro Station, Ghatkopar West, Mumbai, Maharashtra - 400086",
                },
                {
                  img: emailimg,
                  title: "Email:",
                  text: "info@kdigitalcurry.com",
                },
                { img: callusimg, title: "Call Us:", text: "+91 970 246 4242" },
              ].map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <img
                    src={item.img}
                    alt={item.title.toLowerCase()}
                    style={{ width: 40, height: 40, marginTop: "15px" }}
                  />
                  <Stack>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      sx={{
                        marginLeft: "5px",
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        width: { xs: "100%", sm: "80%", md: "300px" },
                        marginLeft: "5px",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>

            {/* Right Section - Contact Form */}
            <Paper
              elevation={3}
              sx={{
                padding: { xs: 2, sm: 4 },
                width: { xs: "100%", md: "40%" },
                backgroundColor: "#fff",
                borderRadius: "10px",
                marginTop: "-40px"
              }}
            >
              <Formik
                initialValues={{
                  fullName: "",
                  companyName: "",
                  mobileNumber: "",
                  email: "",
                  country: "",
                  city: "",
                  requirement: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log("Form Submitted", values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Stack spacing={4}>
                      <Field
                        name="fullName"
                        as={TextField}
                        label="Full Name"
                        fullWidth
                        error={touched.fullName && Boolean(errors.fullName)}
                        helperText={touched.fullName && errors.fullName}
                        sx={{
                          fontSize: { xs: "0.8rem", sm: "1rem" },
                          height: { xs: 40, sm: 50 },
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // Set the border-radius here
                          },
                          minHeight: "6px",
                        }}
                      />
                      <Field
                        name="companyName"
                        as={TextField}
                        label="Company Name"
                        fullWidth
                        error={
                          touched.companyName && Boolean(errors.companyName)
                        }
                        helperText={touched.companyName && errors.companyName}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // Set the border-radius here
                          },
                        }}
                      />
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                      >
                        <Field
                          name="mobileNumber"
                          as={TextField}
                          label="Mobile Number"
                          fullWidth
                          error={
                            touched.mobileNumber && Boolean(errors.mobileNumber)
                          }
                          helperText={
                            touched.mobileNumber && errors.mobileNumber
                          }
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px", // Set the border-radius here
                            },
                          }}
                        />
                        <Field
                          name="email"
                          as={TextField}
                          label="Email"
                          fullWidth
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px", // Set the border-radius here
                            },
                          }}
                        />
                      </Stack>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                      >
                        <Field
                          name="country"
                          as={TextField}
                          label="Country"
                          fullWidth
                          error={touched.country && Boolean(errors.country)}
                          helperText={touched.country && errors.country}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px", // Set the border-radius here
                            },
                          }}
                        />
                        <Field
                          name="services"
                          as={TextField}
                          label="Services"
                          fullWidth
                          error={touched.city && Boolean(errors.city)}
                          helperText={touched.city && errors.city}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "10px", // Set the border-radius here
                            },
                          }}
                        />
                      </Stack>
                      <Field
                        name="requirement"
                        as={TextField}
                        label="Requirement"
                        multiline
                        rows={1}
                        fullWidth
                        error={
                          touched.requirement && Boolean(errors.requirement)
                        }
                        helperText={touched.requirement && errors.requirement}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // Set the border-radius here
                          },
                        }}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#C8102E" }}
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Box>
        </div>
      </section>
    </div>
  );
}

export default Industries;
