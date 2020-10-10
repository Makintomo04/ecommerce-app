import slimShirt from "../../components/collection-row/collection_item/images/men/fs_slim_tee.jpg";
import hoodie from "../../components/collection-row/collection_item/images/men/hoodie.jpg";
import hummel from "../../components/collection-row/collection_item/images/men/hummel.jpg";
import fpBeanie from "../../components/collection-row/collection_item/images/men/fpHat.jpg";
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
        id: 5,
        brand: "JKAttire",
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 6,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
];

export default MensData;
