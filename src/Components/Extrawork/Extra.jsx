import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const data = [
  {
    image: "https://via.placeholder.com/300", // Replace with real image URL
    title: "Muhammadi Nehari D Ground",
    category: "Pakistani",
    rating: "4.8 (500+)",
    discount: "20% off: mc20",
    gift: "Welcome gift: free delivery",
  },
  {
    image: "https://via.placeholder.com/300", // Replace with real image URL
    title: "The Ocean Bakers",
    category: "Cakes & Bakery",
    rating: "4.3 (81)",
    discount: "20% off: mc20",
    gift: "Welcome gift: free delivery",
  },
  {
    image: "https://via.placeholder.com/300", // Replace with real image URL
    title: "Quetta Paratha",
    category: "Pakistani",
    rating: "4.8 (1000+)",
    discount: "20% off: mc20",
    gift: "Welcome gift: free delivery",
  },
  // Add 3 more cards with similar structure
];

const ResponsiveCards = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "pink",
                        borderRadius: 1,
                        padding: "0.2rem 0.5rem",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      {item.gift}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "pink",
                        borderRadius: 1,
                        padding: "0.2rem 0.5rem",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                      }}
                    >
                      {item.discount}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ⭐ {item.rating}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveCards;
