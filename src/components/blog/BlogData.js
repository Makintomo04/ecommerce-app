import apple from "./images/apple.jpg";
import field from "./images/field.jpg";
import window from "./images/window.jpg";
import veg from "./images/veg.jpg";

//mens blog images
import grass from "../../pages/menspage/mensblog/grass.jpg";
import milk from "../../pages/menspage/mensblog/milk.jpg";
import grapes from "../../pages/menspage/mensblog/grapes.jpg";
import apples from "../../pages/menspage/mensblog/apples.jpg";

//womens blog images
import glass from "../../pages/womenspage/womensblog/glass.jpg";
import phone from "../../pages/womenspage/womensblog/phone.jpg";
import sink from "../../pages/womenspage/womensblog/sink.jpg";
import bw from "../../pages/womenspage/womensblog/bw.jpg";
const BlogData = [
  {
    id: 1,
    imageURL: `${apple} `,
    title: "The new formal",
  },
  {
    id: 2,
    imageURL: `${field}`,
    title: "The Helmut Depay Archive",
  },
  {
    id: 3,
    imageURL: `${window}`,
    title: "14 Common Misconceptions About Fashion",
  },
  {
    id: 4,
    imageURL: `${veg}`,
    title: "Designer Spotlight: Simone Wells",
  },
  {
    id: 5,
    imageURL: `${glass} `,
    title: "Womens style guide",
    gender: "womens",
  },
  {
    id: 6,
    imageURL: `${phone}`,
    title: "The new formal",
    gender: "womens",
  },
  {
    id: 7,
    imageURL: `${sink}`,
    title: "5 trends that'll leave you thirsting for more",
    gender: "womens",
  },
  {
    id: 8,
    imageURL: `${bw}`,
    title: "Halloween inspired lookbook",
    gender: "womens",
  },
  {
    id: 9,
    imageURL: `${grass} `,
    title: "Plaids in",
    gender: "mens",
  },
  {
    id: 10,
    imageURL: `${milk}`,
    title: "Mens style guide",
    gender: "mens",
  },
  {
    id: 11,
    imageURL: `${grapes}`,
    title: "Renaissance",
    gender: "mens",
  },
  {
    id: 12,
    imageURL: `${apples}`,
    title: "The pick of the bunch",
    gender: "mens",
  },
];

export default BlogData;
