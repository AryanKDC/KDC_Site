import React, { useState } from "react";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import AboutUsImg from "../images/About_us.png";
import CaseStudyImg from "../images/Case Study.png";
import ContactUsImg from "../images/Contact_Us.png";
import HomeBannerImg from "../images/Home_Banner_Image.png";
import IndustriesImg from "../images/Industries.png";
import MissionImg from "../images/Mission.png";
import MockUpImg from "../images/Mockup.png";
import OverValuesImg from "../images/Our Values.png";

const portfolioItems = [
  {
    id: 1,
    src: AboutUsImg,
    tags: ["Mobile App"],
    fileLink: "https://kdigitalcurry.com/",
  },
  { id: 2, src: CaseStudyImg, tags: ["Website"] },
  { id: 3, src: ContactUsImg, tags: ["Ecommerce"] },
  { id: 4, src: HomeBannerImg, tags: ["Logistics"] },
  { id: 5, src: IndustriesImg, tags: ["Mobile App"] },
  { id: 6, src: MissionImg, tags: ["Website"] },
  { id: 7, src: MockUpImg, tags: ["Logistics"] },
  { id: 8, src: OverValuesImg, tags: ["Ecommerce"] },
];

const filters = ["All", "Mobile App", "Website", "Ecommerce", "Logistics"];

const PortfolioSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredItems =
    selectedFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(selectedFilter));

  return (
    <section>
      <Box
        sx={{
          px: { xs: 0, md: 10, lg: 1, xl: 5 },
          py: 4,
          mx: { xs: "40px", md: "55px" },
          "@media(min-width: 768px)": {
            mx: "70px",
          },
          "@media(min-width: 1024px)": {
            width: "900px",
            padding: "10px 0",
          },
          "@media(min-width: 1240px)": {
            width: "1100px",
            padding: "10px 0",
            margin: "10px auto",
          },
          "@media(min-width: 1500px)": {
            width: "1300px",
          },
          overflow: "hidden",
        }}
      >
        {/* Typography Section */}
        <Box
          sx={{
            paddingLeft: { lg: 6, xl: 6 },
            maxWidth: { md: "1000px", lg: "1000px", xl: "1300px" },
            "@media(min-width: 1024px)": {
              margin: "10px 0px",
            },
            "@media(min-width: 1240px)": {
              margin: "10px -25px",
            },
            "@media(min-width: 1500px)": {
              paddingLeft: "30px",
            },
          }}
          className="wow animate__animated animate__fadeInDown"
          data-wow-duration="1.5s"
        >
          <Box sx={{ textAlign: "left", maxWidth: "800px" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                mt: 2,
                mb: 2,
                fontSize: { xs: "17px", md: "22px" },
                "@media(min-width: 1500px)": {
                  fontSize: "25px",
                },
              }}
            >
              “Digital Solutions that Deliver Results”
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, fontSize: { xs: "13px", md: "15px", fontSize: { xs: "17px", md: "22px" },
              "@media(min-width: 1500px)": {
                fontSize: "18px",
              }, } }}
            >
              Discover our diverse portfolio showcasing innovative solutions and
              applications that drive success. Each project reflects our
              commitment to quality, creativity, and user-centered design.
            </Typography>
          </Box>

          {/* Filter Buttons */}
          <Box
            // className="wow animate__animated animate__fadeIn"
            // data-wow-duration="2.5s"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "left",
              mb: 3,
            }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                variant={selectedFilter === filter ? "contained" : "outlined"}
                sx={{
                  borderRadius: "15px",
                  color: selectedFilter === filter ? "#fff" : "#959595",
                  backgroundColor:
                    selectedFilter === filter ? "#C8102E" : "transparent",
                  border: "1.3px solid black",
                  px: 2,
                  height: { xs: "30px", md: "40px", lg: "40px" },
                  width: { xs: "100px", md: "120px", lg: "130px" },
                  fontSize: { xs: "10px", md: "12px", lg: "14px" },
                  "&:hover": {
                    backgroundColor: "#C8102E",
                    color: "#fff",
                  },
                }}
              >
                {filter}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Image Grid - 2 Per Row */}
        {/* <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "40px", // Adjusted gap for proper centering
            justifyContent: "center",
            maxWidth: { md: "80%", lg: "1000px", xl: "1450px" },
            "@media(min-width: 1728px)": {
              width: "1528px",
              padding: "20px 10px",
              marginRight: "-20px",
              marginLeft: "85px",
            },
            "@media(min-width: 1680px)": {
                  width: "1300px",
                },
            mx: "auto",
            py: 3,
            px: { md: 10, lg: 10, xl: -10 },
          }}
        > */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "40px",
            "@media(min-width: 768px)": {
              gap: "20px",
            },
            "@media(min-width: 320px)": {
              gap: "15px",
            },
            "@media(min-width: 425px)": {
              padding: "10px 0px",
            },
            "@media(min-width: 1024px)": {
              width: "1300px",
            },
            "@media(min-width: 1500px)": {
              margin: "10px auto",
            },
            justifyContent: "center",
            maxWidth: { md: "90%", lg: "85%", xl: "80%" },
            margin: "0 auto",
            py: 3,
            px: { xs: 2, md: 4, lg: 5, xl: 8 },
            "@media(min-width: 1728px)": {
              maxWidth: "1648px",
              margin: "0 20px",
            },
            "@media(min-width: 1680px)": {
              maxWidth: "1320px", // Increased width for large screens
            },
          }}
        >
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: {
                  xs: "100%",
                  sm: "500px",
                  md: "auto",
                  lg: "500px",
                  xl: "700px",
                },
                "@media(min-width: 320px)": {
                  width: "240px",
                  height: "170px",
                },
                "@media(min-width: 375px)": {
                  width: "270px",
                  height: "170px",
                },
                "@media(min-width: 425px)": {
                  width: "345px",
                  height: "190px",
                },
                "@media(min-width: 768px)": {
                  width: "304px",
                  height: "190px",
                },
                "@media(min-width: 1024px)": {
                  width: "430px",
                  height: "250px",
                },
                "@media(min-width: 1240px)": {
                  width: "515px",
                  height: "290px",
                },
                "@media(min-width: 1500px)": {
                  width: "640px",
                  height: "350px",
                },
                "@media(min-width: 1728px)": {
                  width: "714px",
                  height: "438",
                  margin: "0",
                  paddingRight: "-10px",
                },
                "@media(min-width: 1680px)": {
                  width: "674px",
                  height: "418",
                },
                height: { md: "300px", lg: "330px", xl: "400px" }, // Increased height by 50px
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid black",
                boxShadow: "none",
                cursor: "pointer",
              }}
              onClick={() => window.open(item.fileLink, "_blank")}
            >
              <CardMedia
                component="img"
                image={item.src}
                alt={`Portfolio ${item.id}`}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Card>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default PortfolioSection;