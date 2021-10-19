import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function MediaCard(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardMedia
                component="img"
                image="https://picsum.photos/350/350"
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.titolo}
                </Typography>
                <Typography variant="body2">{props.prezzo}</Typography>
                <Typography variant="body2">
                  <p className="margine-des">
                    <span className="dispo margine-des">{props.stock}</span>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardMedia
                component="img"
                image="https://picsum.photos/350/350"
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.titolo}
                </Typography>
                <Typography variant="body2">{props.prezzo}</Typography>
                <Typography variant="body2">
                  <p className="margine-des">
                    <span className="dispo margine-des">{props.stock}</span>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardMedia
                component="img"
                image="https://picsum.photos/350/350"
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.titolo}
                </Typography>
                <Typography variant="body2">{props.prezzo}</Typography>
                <Typography variant="body2">
                  <p className="margine-des">
                    <span className="dispo margine-des">{props.stock}</span>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardMedia
                component="img"
                image="https://picsum.photos/350/350"
                alt="product"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {props.titolo}
                </Typography>
                <Typography variant="body2">{props.prezzo}</Typography>
                <Typography variant="body2">
                  <p className="margine-des">
                    <span className="dispo margine-des">{props.stock}</span>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
