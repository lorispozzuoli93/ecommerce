import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Prodotto from "./Prodotto.js";
import NavBar from "./NavBar.js";

export default function ListaProdotti() {
  const prodottiTot = [
    {
      UPC: "1",
      name: "Turbine™ Rotor",
      price: {
        current: {
          value: 206,
        },
        currency: "USD",
      },
      availability: {
        stock: 1,
      },
      variants: [],
    },
    {
      UPC: "2",
      name: "ERIKA COLOR",
      price: {
        current: {
          value: 167,
        },
        currency: "USD",
      },
      availability: {
        stock: 10,
      },
      variants: [
        {
          UPC: "3",
          name: "ERIKA COLOR",
          price: {
            current: {
              value: 132,
            },
            currency: "USD",
          },
          availability: {
            stock: 0,
          },
        },
        {
          UPC: "4",
          name: "ERIKA COLOR",
          price: {
            current: {
              value: 157,
            },
            currency: "USD",
          },
          availability: {
            stock: 2,
          },
        },
      ],
    },
    {
      UPC: "4",
      name: "AVIATOR",
      price: {
        current: {
          value: 154,
        },
        currency: "USD",
      },
      availability: {
        stock: 1,
      },
      variants: [
        {
          UPC: "5",
          name: "AVIATOR",
          price: {
            current: {
              value: 204,
            },
            currency: "USD",
          },
          availability: {
            stock: 16,
          },
        },
        {
          UPC: "6",
          name: "AVIATOR",
          price: {
            current: {
              value: 204,
            },
            currency: "USD",
          },
          availability: {
            stock: 3,
          },
        },
        {
          UPC: "7",
          name: "AVIATOR",
          price: {
            current: {
              value: 204,
            },
            currency: "USD",
          },
          availability: {
            stock: 11,
          },
        },
        {
          UPC: "8",
          name: "AVIATOR",
          price: {
            current: {
              value: 154,
            },
            currency: "USD",
          },
          availability: {
            stock: 3,
          },
        },
        {
          UPC: "9",
          name: "AVIATOR",
          price: {
            current: {
              value: 154,
            },
            currency: "USD",
          },
          availability: {
            stock: 2,
          },
        },
        {
          UPC: "10",
          name: "AVIATOR",
          price: {
            current: {
              value: 204,
            },
            currency: "USD",
          },
          availability: {
            stock: 2,
          },
        },
        {
          UPC: "11",
          name: "AVIATOR",
          price: {
            current: {
              value: 204,
            },
            currency: "USD",
          },
          availability: {
            stock: 3,
          },
        },
      ],
    },
    {
      UPC: "12",
      name: "Round",
      price: {
        current: {
          value: 244,
        },
        currency: "USD",
      },
      availability: {
        stock: 226,
      },
      variants: [],
    },
    {
      UPC: "13",
      name: "ROUND METAL",

      price: {
        current: {
          value: 204,
        },
        currency: "USD",
      },
      availability: {
        stock: 9,
      },
      variants: [
        {
          UPC: "14",
          name: "ROUND METAL",

          price: {
            current: {
              value: 154,
            },
            currency: "USD",
          },
          availability: {
            stock: 14,
          },
        },
        {
          UPC: "15",
          name: "ROUND METAL",

          price: {
            current: {
              value: 153,
            },
            currency: "USD",
          },
          availability: {
            stock: 4,
          },
        },
        {
          UPC: "16",
          name: "ROUND METAL",
          price: {
            current: {
              value: 204,
            },
            currency: "USD",
          },
          availability: {
            stock: 9,
          },
        },
      ],
    },
    {
      UPC: "17",
      name: "Old fashion",
      price: {
        current: {
          value: 186,
        },
        currency: "USD",
      },
      availability: {
        stock: 1,
      },
      variants: [
        {
          UPC: "18",
          name: "Old fashion",
          price: {
            current: {
              value: 186,
            },
            currency: "USD",
          },
          availability: {
            stock: 5,
          },
        },
        {
          UPC: "19",
          name: "Old fashion",
          price: {
            current: {
              value: 186,
            },
            currency: "USD",
          },
          availability: {
            stock: 6,
          },
        },
        {
          UPC: "20",
          name: "Old fashion",
          price: {
            current: {
              value: 156,
            },
            currency: "USD",
          },
          availability: {
            stock: 0,
          },
        },
        {
          UPC: "21",
          name: "Old fashion",
          price: {
            current: {
              value: 156,
            },
            currency: "USD",
          },
          availability: {
            stock: 0,
          },
        },
      ],
    },
    {
      UPC: "22",
      name: "Springfield XL",
      price: {
        current: {
          value: 186,
        },
        currency: "USD",
      },
      availability: {
        stock: 0,
      },
      variants: [
        {
          UPC: "23",
          name: "Springfield XL",
          price: {
            current: {
              value: 156,
            },
            currency: "USD",
          },
          availability: {
            stock: 2,
          },
        },
        {
          UPC: "24",
          name: "Springfield XL",
          price: {
            current: {
              value: 186,
            },
            currency: "USD",
          },
          availability: {
            stock: 2,
          },
        },
        {
          UPC: "25",
          name: "Springfield XL",
          price: {
            current: {
              value: 186,
            },
            currency: "USD",
          },
          availability: {
            stock: 1,
          },
        },
        {
          UPC: "26",
          name: "Springfield XL",
          price: {
            current: {
              value: 156,
            },
            currency: "USD",
          },
          availability: {
            stock: 0,
          },
        },
        {
          UPC: "27",
          name: "Springfield XL",
          price: {
            current: {
              value: 156,
            },
            currency: "USD",
          },
          availability: {
            stock: 1,
          },
        },
        {
          UPC: "28",
          name: "Springfield XL",
          price: {
            current: {
              value: 156,
            },
            currency: "USD",
          },
          availability: {
            stock: 0,
          },
        },
        {
          UPC: "29",
          name: "Springfield XL",
          price: {
            current: {
              value: 156,
            },
            currency: "USD",
          },
          availability: {
            stock: 0,
          },
        },
        {
          UPC: "30",
          name: "Springfield XL",
          price: {
            current: {
              value: 136,
            },
            currency: "USD",
          },
          availability: {
            stock: 0,
          },
        },
      ],
    },
  ];

  const [prodotti, setProdotti] = useState(prodottiTot);

  const cerca = (text) => {
    var newProdotti = [];
    prodottiTot.map((prodotto, index) => {
      if (prodotto.name.toLowerCase().includes(text)) {
        newProdotti.push(prodotto);
      }
    });
    setProdotti(newProdotti);
  };

  const toggle = (value) => {
    var newProdotti = [];
    prodottiTot.map((prodotto, index) => {
      if (value == "in") {
        if (prodotto.availability.stock > 0) {
          newProdotti.push(prodotto);
        }
      } else if (value == "out") {
        if (prodotto.availability.stock <= 0) {
          newProdotti.push(prodotto);
        }
      } else {
        newProdotti = prodottiTot;
      }
    });
    setProdotti(newProdotti);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar
        cerca={(text) => {
          cerca(text);
        }}
        toggle={(value) => {
          toggle(value);
        }}
      />
      <Container maxWidth="false">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {prodotti &&
              prodotti.map((prodotto, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Prodotto
                    name={prodotto.name}
                    price={prodotto.price.current.value}
                    stock={prodotto.availability.stock}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
