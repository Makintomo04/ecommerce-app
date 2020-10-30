import slimShirt from "../../components/collection-row/collection_item/images/men/fs_slim_tee.jpg";
import hoodie from "../../components/collection-row/collection_item/images/men/hoodie.jpg";
import hummel from "../../components/collection-row/collection_item/images/men/hummel.jpg";
import fpBeanie from "../../components/collection-row/collection_item/images/men/fpHat.jpg";
import cargotrousers from "../../components/collection-row/collection_item/images/clothing/men/cargotrousers.jpg";
import checkeredshirt from "../../components/collection-row/collection_item/images/clothing/men/checkeredshirt.jpg";
import nikeshorts from "../../components/collection-row/collection_item/images/activewear/men/nikeshorts.jpg";
import bershkachain from "../../components/collection-row/collection_item/images/accessories/men/bershka.jpg";
import chelseaboots from "../../components/collection-row/collection_item/images/shoes/men/chelseaboots.jpg";
import niketracksuit from "../../components/collection-row/collection_item/images/activewear/men/niketracksuit.jpg";
import nb from "../../components/collection-row/collection_item/images/shoes/men/nb.jpg";
import mkwatch from "../../components/collection-row/collection_item/images/accessories/men/mkwatch.jpg";
const MensData = [
  {
    id: 1,
    title: "New in",
    routeName: "newin",
    items: [
      {
        id: 1,
        brand: "Farah Steen",
        name: "Slim fit in green",
        imageUrl: `${slimShirt}`,
        price: 65,
        preview: true,
      },
      {
        id: 2,
        brand: "Hummel",
        name: "Small logo sweatshirt in black",
        imageUrl: `${hummel}`,
        price: 55,
        preview: true,
        newin: true,
      },
      {
        id: 3,
        brand: "Tommy Hilfiger",
        name: "Lounge hoodie with chest logo",
        imageUrl: `${hoodie}`,
        price: 72,
        preview: true,
        newin: true,
      },
      {
        id: 4,
        brand: "Fred Perry",
        name: "Roll up beanie hat in black",
        imageUrl: `${fpBeanie}`,
        price: 40,
        preview: true,
        newin: true,
        category: "accessory",
      },
      {
        id: 36,
        brand: "Michael Kors",
        name: "Layton silicone watch in black",
        imageUrl: `${mkwatch}`,
        price: 159,
        gender: "mens",
        preview: false,
      },

      {
        id: 60,
        brand: "Only & Sons",
        name: "Brushed check shirt in ecru & navy",
        imageUrl: `${checkeredshirt}`,
        price: 24,
        gender: "mens",
        preview: false,
      },
      {
        id: 46,
        brand: "Nike",
        name: "Training dry 5.0 shorts in black/red",
        imageUrl: `${nikeshorts}`,
        price: 26,
        gender: "mens",
        preview: false,
      },
      {
        id: 33,
        brand: "Bershka",
        name: "Layered multi pendant necklace in silver",
        imageUrl: `${bershkachain}`,
        price: 8,
        gender: "mens",
        preview: false,
      },
      {
        id: 22,
        brand: "Red Tape",
        name: "Leather chelsea boots in black",
        imageUrl: `${chelseaboots}`,
        price: 32,
        gender: "mens",
        preview: false,
      },
      {
        id: 50,
        brand: "Nike",
        name: "Football academy tracksuit in navy",
        imageUrl: `${niketracksuit}`,
        price: 60,
        gender: "mens",
        preview: false,
      },
      {
        id: 32,
        brand: "New Balance",
        name: "393 trainers in grey",
        imageUrl: `${nb}`,
        price: 25,
        gender: "mens",
        preview: false,
      },
      {
        id: 58,
        brand: "Blood Brother",
        name: "Hackney cargo trousers in black",
        imageUrl: `${cargotrousers}`,
        price: 85,
        gender: "mens",
        preview: false,
      },
    ],
  },
];

export default MensData;
