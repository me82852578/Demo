import React from "react";
import { ReactComponent as SunIcon } from "./images/sun.svg";
import { ReactComponent as StarIcon } from "./images/star.svg";
import { ReactComponent as CloudIcon } from "./images/cloud.svg";
import { ReactComponent as PeaceIcon } from "./images/peace.svg";
import "./index.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { makeFakeProducts, makeFakeSkills } from "./fakeData";
import { Box } from "@mui/system";

function Home() {
  return (
    <div className="home">
      <header>
        <div className="starBox">
          <StarIcon height="23px" />
          <StarIcon height="15px" />
          <StarIcon height="10px" />
        </div>
        <div className="cloudBox">
          <CloudIcon height="80px" fill="white" />
          <CloudIcon height="160px" fill="white" />
          <CloudIcon height="120px" fill="white" />
        </div>
        <div className="foreground">
          <h1>J-Studio</h1>
          <div className="typing-effect">
            <p>If any questions, feel free to ask.</p>
          </div>
          <SunIcon
            height="200px"
            width="200px"
            viewBox="-44 -44 600 600"
            className="sun-icon"
          />
          <div className="temp-text">
            <p>
              Hope the world peace.{" "}
              <PeaceIcon height="42px" stroke="whitesmoke" fill="whitesmoke" />
            </p>
          </div>
        </div>
      </header>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ padding: "50px 0", width: "100%" }}>
          <Grid container spacing={4}>
            {makeFakeSkills().map((s) => (
              <Grid key={s.id} item md={3} sm={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "16px",
                    boxShadow: "0px 4px 16px rgb(43 52 69 / 10%)",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    width:"100%",
                  }}
                >
                  <Box>
                    <img width="42px" src={s.img} alt={s.title} />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      color="#2B3445"
                      fontWeight={700}
                    >
                      {s.title}
                    </Typography>
                    <Typography variant="body2" color="#7D879C">
                      {s.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            overflow: "auto",
            position: "relative",
            paddingBottom: "30px",
          }}
        >
          <Paper
          className="product-side-nav"
            sx={{
              height: "inherit",
              width: "260px",
              position: "sticky",
              top: "0px",
              boxShadow: "0px 4px 16px rgb(43 52 69 / 10%)",
              flexShrink: 0,
            }}
          >
            Side nav
          </Paper>
          <Box width="fit-content" ml={2}>
            <Grid container spacing={3}>
              {makeFakeProducts(20).map((p) => (
                <Grid key={p.id} item lg={3} md={4} sm={6} xs={12}>
                  <Card sx={{ boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={p.img}
                        alt={p.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Product
                        </Typography>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                          <Typography variant="body2" color="text.secondary">
                            {`$${p.regularPrice}`}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.salePrice}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Paper
          sx={{
            height: "250px",
            boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
            padding: "40px",
            margin: "40px 0",
            backgroundColor: "antiquewhite",
            color: "whitesmoke",
            borderRadius: "8px",
          }}
        ></Paper>
        <Paper
          sx={{
            height: "250px",
            boxShadow: "0px 1px 3px rgb(3 0 71 / 9%)",
            padding: "40px",
            margin: "40px 0",
            backgroundColor: "antiquewhite",
            color: "whitesmoke",
            borderRadius: "8px",
          }}
        ></Paper>
      </Container>
    </div>
  );
}

export default Home;
