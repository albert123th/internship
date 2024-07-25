import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resto</Typography>
        <p>We offer delicious food for sale across India, both online and offline. You can visit our store to make purchases in person or conveniently order from our website. Enjoy a wide variety of delectable dishes, crafted with the finest ingredients, delivered right to your doorstep or available for pickup in-store. Experience the best of Indian cuisine with our easy and accessible service.
        </p>At our company, we are dedicated to bringing the finest and most delicious food to customers all across India, both through our online platform and our physical stores. Our mission is to make high-quality, delectable dishes accessible to everyone, whether you prefer the convenience of ordering from the comfort of your home or the experience of visiting our stores in person.

For those who enjoy the ease of online shopping, our website offers a seamless and user-friendly interface where you can browse through our extensive menu, place your order, and have it delivered right to your doorstep. Our online platform ensures that you can enjoy our delicious offerings no matter where you are in India, with just a few clicks. We prioritize timely delivery and maintain the highest standards of food quality and safety, ensuring that your meals arrive fresh and flavorful.

On the other hand, if you prefer the traditional shopping experience, we welcome you to visit our physical stores. Our friendly and knowledgeable staff are always on hand to assist you, whether you're looking to try something new or need help finding your favorite dishes. In our stores, you can see, smell, and even sample some of our offerings, making your food purchasing experience interactive and enjoyable.

We take great pride in the variety and quality of our food.<br></br> Our menu is crafted with the finest ingredients, showcasing a diverse range of dishes that cater to all tastes and preferences. Whether you're craving traditional Indian cuisine, looking for a healthy meal option, or wanting to indulge in something sweet, we have something to satisfy every palate.

By combining the convenience of online ordering with the personal touch of our in-store experience, we strive to provide the best of both worlds to our customers. Our goal is to make it easy and enjoyable for you to access delicious food, no matter how you choose to shop with us.

Experience the best of Indian cuisine with our reliable and accessible service, and let us bring the joy of great food to you.
        <p>
          
        </p>
      </Box>
    </Layout>
  );
};

export default About;
