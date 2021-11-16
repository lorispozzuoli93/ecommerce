export type ProductsPdp = {
  title: string;
  UPC: string;
  name: string;
  brand: string;
  lenscolor: string;
  size: string;
  imageUrl?: string;
  price: {
    current: {
      value: number;
    };
    currency: string;
  };
  availability: {
    stock: number;
  };
  variants: Omit<ProductsPdp, "variants">[];
};

export const prodottiPdp: ProductsPdp[] = [
  {
    title: "P05004ST",
    UPC: "1",
    name: "Turbine™ Rotor",
    brand: "Persol",
    lenscolor: "Green",
    size: "standard",
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
    title: "P05005ST",
    UPC: "2",
    name: "ERIKA COLOR",
    brand: "Persol",
    lenscolor: "Blue",
    size: "standard",
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
        title: "P05006ST",
        UPC: "3",
        name: "ERIKA COLOR",
        brand: "Persol",
        lenscolor: "Black",
        size: "standard",
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
        title: "P05007ST",
        UPC: "4",
        name: "ERIKA COLOR",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
    title: "P05008ST",
    UPC: "4",
    name: "AVIATOR",
    brand: "Persol",
    lenscolor: "Yellow",
    size: "standard",
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
        title: "P05009ST",
        UPC: "5",
        name: "AVIATOR",
        brand: "Persol",
        lenscolor: "Blue",
        size: "standard",
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
        title: "P05010ST",
        UPC: "6",
        name: "AVIATOR",
        brand: "Persol",
        lenscolor: "Brown",
        size: "standard",
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
        title: "P05010ST",
        UPC: "6",
        name: "AVIATOR",
        brand: "Persol",
        lenscolor: "Brown",
        size: "standard",
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
        title: "P05010ST",
        UPC: "8",
        name: "AVIATOR",
        brand: "Persol",
        lenscolor: "Brown",
        size: "standard",
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
        title: "P05010ST",
        UPC: "9",
        name: "AVIATOR",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "10",
        name: "AVIATOR",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "11",
        name: "AVIATOR",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
    title: "P05010ST",
    UPC: "12",
    name: "Round",
    brand: "Persol",
    lenscolor: "Green",
    size: "standard",
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
    title: "P05010ST",
    UPC: "13",
    name: "ROUND METAL",
    brand: "Persol",
    lenscolor: "Green",
    size: "standard",
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
        title: "P05010ST",
        UPC: "14",
        name: "ROUND METAL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "15",
        name: "ROUND METAL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "16",
        name: "ROUND METAL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
    title: "P05010ST",
    UPC: "17",
    name: "Old fashion",
    brand: "Persol",
    lenscolor: "Green",
    size: "standard",
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
        title: "P05010ST",
        UPC: "18",
        name: "Old fashion",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "19",
        name: "Old fashion",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "20",
        name: "Old fashion",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "21",
        name: "Old fashion",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
    title: "P05010ST",
    UPC: "22",
    name: "Springfield XL",
    brand: "Persol",
    lenscolor: "Green",
    size: "standard",
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
        title: "P05010ST",
        UPC: "23",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "24",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "25",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "26",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "27",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "28",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "29",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
        title: "P05010ST",
        UPC: "30",
        name: "Springfield XL",
        brand: "Persol",
        lenscolor: "Green",
        size: "standard",
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
