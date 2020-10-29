import lace from "../../components/collection-row/collection_item/images/women/jdylace.jpg";
import blouse from "../../components/collection-row/collection_item/images/women/blouse.jpg";
import tneck from "../../components/collection-row/collection_item/images/women/turtleneck.jpg";
import hneck from "../../components/collection-row/collection_item/images/women/highneck.jpg";
import sandals from "../../components/collection-row/collection_item/images/shoes/women/sandals.jpg";
import wnikerunningshorts from "../../components/collection-row/collection_item/images/activewear/women/nikerunningshorts.jpg";
import kneeboots from "../../components/collection-row/collection_item/images/shoes/women/londonrebelboots.jpg";
import earringnecklace from "../../components/collection-row/collection_item/images/accessories/women/moonearring.jpg";
import maxidress from "../../components/collection-row/collection_item/images/clothing/women/maxidress.jpg";
import stradivariusjeans from "../../components/collection-row/collection_item/images/clothing/women/stradivariusjeans.jpg";
import pbtrainer from "../../components/collection-row/collection_item/images/shoes/women/pbtrainer.jpg";
import runningbra from "../../components/collection-row/collection_item/images/activewear/women/reebokrunbra.jpg";
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
      {
        id: 21,
        brand: "AD",
        name: "Framed strappy leather sandal in black",
        imageUrl: `${sandals}`,
        price: 7,
        gender: "womens",
      },
      {
        id: 52,
        brand: "Nike",
        name: "Running swoosh shorts in pink",
        imageUrl: `${wnikerunningshorts}`,
        price: 23,
        gender: "womens",
      },
      {
        id: 30,
        brand: "London Rebel",
        name: "Flat pull on knee boots in black",
        imageUrl: `${kneeboots}`,
        price: 25,
        gender: "womens",
      },
      {
        id: 37,
        brand: "Pieces",
        name: "18K plated moon and star stud earrings in gold",
        imageUrl: `${earringnecklace}`,
        price: 5,
        gender: "womens",
      },
      {
        id: 61,
        brand: "True Violet",
        name: "Black Label high neck keyhole plunge maxi dress",
        imageUrl: `${maxidress}`,
        price: 120,
        gender: "womens",
      },
      {
        id: 63,
        brand: "Stradivarius",
        name: "High waist straight leg jeans in black",
        imageUrl: `${stradivariusjeans}`,
        price: 20,
        gender: "womens",
      },
      {
        id: 31,
        brand: "Pull&Bear",
        name: "Flatform trainers in sand",
        imageUrl: `${pbtrainer}`,
        price: 15,
        gender: "womens",
      },
      {
        id: 49,
        brand: "Reebok",
        name: "Running bra in pink",
        imageUrl: `${runningbra}`,
        price: 28,
        gender: "womens",
      },
    ],
  },
];

export default WomensData;
