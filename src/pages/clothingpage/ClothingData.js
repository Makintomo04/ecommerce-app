import stradivariusjeans from "../../components/collection-row/collection_item/images/clothing/women/stradivariusjeans.jpg";
import pimkiejumper from "../../components/collection-row/collection_item/images/clothing/women/pimkiejumper.jpg";
import maxidress from "../../components/collection-row/collection_item/images/clothing/women/maxidress.jpg";
import highneckknittop from "../../components/collection-row/collection_item/images/clothing/women/highneckknittop.jpg";
import flaredtrousers from "../../components/collection-row/collection_item/images/clothing/women/flaredtrousers.jpg";
import bluepinktiedye from "../../components/collection-row/collection_item/images/clothing/women/bluepinktiedye.jpg";
import bershkaskirt from "../../components/collection-row/collection_item/images/clothing/women/bershkaskirt.jpg";
import pbcardi from "../../components/collection-row/collection_item/images/clothing/women/pbcardi.jpg";
import lace from "../../components/collection-row/collection_item/images/women/jdylace.jpg";
import blouse from "../../components/collection-row/collection_item/images/women/blouse.jpg";
import tneck from "../../components/collection-row/collection_item/images/women/turtleneck.jpg";
import hneck from "../../components/collection-row/collection_item/images/women/highneck.jpg";

import bershkatee from "../../components/collection-row/collection_item/images/clothing/men/bershkatee.jpg";
import bomberjacket from "../../components/collection-row/collection_item/images/clothing/men/bomberjacket.jpg";
import checkeredshirt from "../../components/collection-row/collection_item/images/clothing/men/checkeredshirt.jpg";
import coutureshirt from "../../components/collection-row/collection_item/images/clothing/men/coutureshirt.jpg";
import fredperryjacket from "../../components/collection-row/collection_item/images/clothing/men/fredperryjacket.jpg";
import sweatshirt from "../../components/collection-row/collection_item/images/clothing/men/sweatshirt.jpg";
import ckjeans from "../../components/collection-row/collection_item/images/clothing/men/ckjeans.jpg";
import cargotrousers from "../../components/collection-row/collection_item/images/clothing/men/cargotrousers.jpg";
import slimShirt from "../../components/collection-row/collection_item/images/men/fs_slim_tee.jpg";
import hoodie from "../../components/collection-row/collection_item/images/men/hoodie.jpg";
import hummel from "../../components/collection-row/collection_item/images/men/hummel.jpg";

const ClothingData = [
  {
    id: 3,
    title: "clothing",
    routeName: "clothing",
    items: [
      {
        id: 57,
        brand: "Sixth June",
        name: "3D pocket bomber jacket in black",
        imageUrl: `${bomberjacket}`,
        price: 90,
        // preview: true,
        gender: "mens",
      },

      {
        id: 58,
        brand: "Blood Brother",
        name: "Hackney cargo trousers in black",
        imageUrl: `${cargotrousers}`,
        price: 85,
        gender: "mens",
      },
      {
        id: 59,
        brand: "Topshop",
        name: "Slinky flared trousers in khaki",
        imageUrl: `${flaredtrousers}`,
        price: 25,
        // preview: true,
        // newin: true,
        gender: "womens",
      },
      {
        id: 14,
        brand: "NA-KD",
        name: "Knitted high neck vest in beige",
        imageUrl: `${hneck}`,
        price: 30,
        preview: true,
        newin: true,
        gender: "womens",
      },
      {
        id: 60,
        brand: "Only & Sons",
        name: "Brushed check shirt in ecru & navy",
        imageUrl: `${checkeredshirt}`,
        price: 24,
        gender: "mens",
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
        id: 62,
        brand: "Bershka",
        name: "faux leather skirt with slit in ecru",
        imageUrl: `${bershkaskirt}`,
        price: 18,
        gender: "womens",
      },
      {
        id: 63,
        brand: "Stradivarius",
        name: "High waist straight leg jeans in black",
        imageUrl: `${stradivariusjeans}`,
        price: 20,
        // preview: true,
        // newin: true,
        gender: "womens",
      },
      {
        id: 64,
        brand: "Fred Perry",
        name: "Hooded padded jacket in black",
        imageUrl: `${fredperryjacket}`,
        price: 195,
        gender: "mens",
      },
      {
        id: 65,
        brand: "Daisy Street",
        name: "Relaxed t-shirt dress with dolphin print in pastel tie dye",
        imageUrl: `${bluepinktiedye}`,
        price: 25,
        gender: "womens",
      },
      {
        id: 66,
        brand: "Bershka",
        name: "Thick t-shirt in white",
        imageUrl: `${bershkatee}`,
        price: 16,
        gender: "mens",
      },
      {
        id: 12,
        brand: "Vero Moda",
        name: "Blouse with exaggerated sleeves in lilac",
        imageUrl: `${blouse}`,
        price: 32,
        preview: true,
        newin: true,
        gender: "womens",
      },
      {
        id: 13,
        brand: "Weekday Kati",
        name: "Turtleneck cardigan with thumbholes in black",
        imageUrl: `${tneck}`,
        price: 35,
        preview: true,
        newin: true,
        gender: "womens",
      },

      {
        id: 67,
        brand: "Pimkie",
        name: "Cable knit jumper in blue",
        imageUrl: `${pimkiejumper}`,
        price: 18,
        gender: "womens",
      },
      {
        id: 68,
        brand: "Stradivarius",
        name: "STR high neck cable knit top in camel",
        imageUrl: `${highneckknittop}`,
        price: 22,
        gender: "womens",
      },
      {
        id: 3,
        brand: "Tommy Hilfiger",
        name: "Lounge hoodie with chest logo",
        imageUrl: `${hoodie}`,
        price: 72,
        // preview: true,
        // newin: true,
        gender: "mens",
      },
      {
        id: 11,
        brand: "JDY",
        name: " Lace detail blouse in white",
        imageUrl: `${lace}`,
        price: 25,
        preview: true,
        gender: "womens",
      },

      {
        id: 70,
        brand: "C.P. Company",
        name: "Lens crew neck sweatshirt in blue",
        imageUrl: `${sweatshirt}`,
        price: 150,
        gender: "mens",
      },
      {
        id: 71,
        brand: "Calvin Klein Jeans",
        name: "Established 1978 slim jeans",
        imageUrl: `${ckjeans}`,
        price: 165,
        gender: "mens",
      },
      {
        id: 1,
        brand: "Farah Steen",
        name: "Slim fit in green",
        imageUrl: `${slimShirt}`,
        price: 65,
        // preview: true,
        gender: "mens",
      },
      {
        id: 2,
        brand: "Hummel",
        name: "Small logo sweatshirt in black",
        imageUrl: `${hummel}`,
        price: 55,
        // preview: true,
        // newin: true,
        gender: "mens",
      },

      {
        id: 74,
        brand: "Pull&Bears",
        name: "Button front cardigan in green",
        imageUrl: `${pbcardi}`,
        price: 20,
        gender: "womens",
      },
      {
        id: 75,
        brand: "The Couture Club",
        name: "Oversized mesh t-shirt with back logo in black",
        imageUrl: `${coutureshirt}`,
        price: 45,
        preview: true,
        gender: "mens",
      },
    ],
  },
];
export default ClothingData;
