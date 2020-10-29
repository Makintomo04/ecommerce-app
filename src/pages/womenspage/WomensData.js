import lace from "../../components/collection-row/collection_item/images/women/jdylace.jpg";
import blouse from "../../components/collection-row/collection_item/images/women/blouse.jpg";
import tneck from "../../components/collection-row/collection_item/images/women/turtleneck.jpg";
import hneck from "../../components/collection-row/collection_item/images/women/highneck.jpg";
// import hummel from "../../components/collection-row/collection_item/images/hummel.jpg";
// import fpBeanie from "../../components/collection-row/collection_item/images/fpHat.jpg";
const WomensData = [
  {
    id: 1,
    title: "New in",
    routeName: "newin",
    items: [
      {
        id: 11,
        brand: "JDY",
        name: " Lace detail blouse in white",
        imageUrl: `${lace}`,
        price: 25,
        preview: true,
      },
      {
        id: 12,
        brand: "Vero Moda",
        name: "Blouse with exaggerated sleeves in lilac",
        imageUrl: `${blouse}`,
        price: 32,
        preview: true,
        newin: true,
      },
      {
        id: 13,
        brand: "Weekday Kati",
        name: "Turtleneck cardigan with thumbholes in black",
        imageUrl: `${tneck}`,
        price: 35,
        preview: true,
        newin: true,
      },
      {
        id: 14,
        brand: "NA-KD",
        name: "Knitted high neck vest in beige",
        imageUrl: `${hneck}`,
        price: 30,
        preview: true,
        newin: true,
      },
    ],
  },
];

export default WomensData;
