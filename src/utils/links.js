import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import landingpagetable1 from "../assets/images/landingpagetable1.png";
import landingpagetable2 from "../assets/images/landingpagetable2.png";
import landingpagetable3 from "../assets/images/landingpagetable3.png";
import landingpagetable4 from "../assets/images/landingpagetable4.png";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";
import product6 from "../assets/images/product6.jpg";

import cover from "../assets/images/cover.png";
import cover2 from "../assets/images/cover2.png";

import facebooklogo from "../assets/images/facebooklogo.png";
import twitterlogo from "../assets/images/twitterlogo.png";
import telegramlogo from "../assets/images/telegramlogo.png";

export const ProductsList = [
  {
    id: 1,
    name: "CAMO TUSHETAN HAT",
    type: "TUSHETIAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product1,
    additionalImages: [product2, product3],
    price: 45,
    sizeList: ["S", "M", "L"],
    colorList: ["#D9EC00", "#C4C4C4", "white"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "BLUE TUSHETAN HAT",
    type: "TUSHETIAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product2,
    additionalImages: [product1, product3],
    price: 25,
    sizeList: ["M", "L"],
    colorList: ["#D9EC00", "blue"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 3,
    name: "GREEN TUSHETAN HAT",
    type: "TUSHETIAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product3,
    additionalImages: [product1, product3],
    price: 40,
    sizeList: ["L", "XL"],
    colorList: ["#D9EC00", "#C4C4C4", "white"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 4,
    name: "WHITE GURIAN HAT",
    type: "GURIAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product4,
    additionalImages: [product1, product3],
    price: 50,
    sizeList: ["L"],
    colorList: ["white"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 5,
    name: "YELLOW GURIAN HAT",
    type: "GURIAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product5,
    additionalImages: [product1, product3],
    price: 25,
    sizeList: ["S", "L", "XL"],
    colorList: ["#D9EC00", "white"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 6,
    name: "PINK GURIAN HAT",
    type: "GURIAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product6,
    additionalImages: [product1, product3],
    price: 75,
    sizeList: ["S", "M", "L"],
    colorList: ["pink", "white"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 7,
    name: "CAMO SVAN HAT",
    type: "SVAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product1,
    additionalImages: [product1, product3],
    price: 59,
    sizeList: ["S", "M", "L"],
    colorList: ["#D9EC00", "#C4C4C4", "white"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 8,
    name: "BLUE SVAN HAT",
    type: "SVAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product2,
    additionalImages: [product1, product3],
    price: 30,
    sizeList: ["M", "L"],
    colorList: ["blue", "white"],
    matter: "Silk",
    availability: "In Stock",
  },
  {
    id: 9,
    name: "GREEN SVAN HAT",
    type: "SVAN",
    description:
      "Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room. This seating solution offers great appeal. Versatile elegance for dining room, office or living room.",
    image: product3,
    additionalImages: [product1, product3],
    price: 40,
    sizeList: ["S", "M"],
    colorList: ["#D9EC00", "#C4C4C4", "white"],
    matter: "Silk",
    availability: "In Stock",
  },
];

export const links = [
  { id: 1, text: "CONTACTS", path: "contacts" },
  { id: 2, text: "ABOUT", path: "about" },
  { id: 3, text: "SHOP", path: "shop" },
];

export const landingCoverData = [
  {
    id: 1,
    text: (
      <React.Fragment>
        Versatile elegance for dining room, office or living room. This seating{" "}
        <b>solution</b> offers great appeal. Versatile elegance for dining room,
        office or living room. This seating solution offers great appeal.
      </React.Fragment>
    ),
    image: cover,
  },
];

export const landingCoverDataShop = [
  {
    id: 1,
    image: cover,
  },
];

export const landingLowerCoverData = [
  {
    id: 1,
    image: cover2,
  },
];

export const imageCollectionData = [
  {
    id: 0,
    image: landingpagetable1,
  },
  {
    id: 1,
    image: landingpagetable2,
  },
  {
    id: 2,
    image: landingpagetable3,
  },
  {
    id: 3,
    image: landingpagetable4,
  },
];

export const socialLinksContactPage = [
  { id: 1, path: "www.facebook.com", image: facebooklogo },
  { id: 2, path: "www.twitter.com", image: twitterlogo },
  { id: 3, path: "www.telegram.org", image: telegramlogo },
];
