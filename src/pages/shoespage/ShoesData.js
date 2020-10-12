import kneeboots from "../../components/collection-row/collection_item/images/shoes/women/londonrebelboots.jpg";
import pbtrainer from "../../components/collection-row/collection_item/images/shoes/women/pbtrainer.jpg";
import heels from "../../components/collection-row/collection_item/images/shoes/women/raidheels.jpg";
import sockboot from "../../components/collection-row/collection_item/images/shoes/women/stevesockboot.jpg";
import veromodaplim from "../../components/collection-row/collection_item/images/shoes/women/veromodaplim.jpg";
import sandals from "../../components/collection-row/collection_item/images/shoes/women/sandals.jpg";

import chelseaboots from "../../components/collection-row/collection_item/images/shoes/men/chelseaboots.jpg";
import kgsock from "../../components/collection-row/collection_item/images/shoes/men/kgsock.jpg";
import brouge from "../../components/collection-row/collection_item/images/shoes/men/lschunky.jpg";
import chunky from "../../components/collection-row/collection_item/images/shoes/men/brouge.jpg";
import docmartin from "../../components/collection-row/collection_item/images/shoes/men/docm.jpg";
import nb from "../../components/collection-row/collection_item/images/shoes/men/nb.jpg";
const ShoesData = [
  {
    id: 3,
    title: "shoes",
    routeName: "shoes",
    items: [
      {
        id: 21,
        brand: "AD",
        name: "Framed strappy leather sandal in black",
        imageUrl: `${sandals}`,
        price: 7,
        preview: true,
        gender: "womens",
      },
      {
        id: 22,
        brand: "Red Tape",
        name: "Leather chelsea boots in black",
        imageUrl: `${chelseaboots}`,
        price: 32,
        preview: true,
        gender: "mens",
      },
      {
        id: 23,
        brand: "Lyle & Scott",
        name: "Moncur chunky trainers",
        imageUrl: `${chunky}`,
        price: 60,
        preview: true,
        newin: true,
        gender: "mens",
      },

      {
        id: 24,
        brand: "Raid",
        name: "Katy grey block heeled shoes",
        imageUrl: `${heels}`,
        price: 13,
        gender: "womens",
      },
      {
        id: 25,
        brand: "Vero Moda",
        name: "Chunky sole plimsole in silver",
        imageUrl: `${veromodaplim}`,
        price: 28,
        gender: "womens",
      },
      {
        id: 26,
        brand: "Steve Madden",
        name: "Heeled sock boots in black",
        imageUrl: `${sockboot}`,
        price: 85,
        gender: "womens",
      },
      {
        id: 27,
        brand: "Dr Martens",
        name: "1461 mono 3 eye shoe",
        imageUrl: `${docmartin}`,
        price: 90,
        preview: true,
        newin: true,
        category: "shoe",
        gender: "mens",
      },
      {
        id: 28,
        brand: "Silver Street",
        name: "Leather brogue lace up in black",
        imageUrl: `${brouge}`,
        price: 26,
        gender: "mens",
      },
      {
        id: 29,
        brand: "KG by Kurt Geiger",
        name: "Sock trainer in black",
        imageUrl: `${kgsock}`,
        price: 65,
        gender: "mens",
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
        id: 31,
        brand: "Pull&Bear",
        name: "Flatform trainers in sand",
        imageUrl: `${pbtrainer}`,
        price: 15,
        gender: "womens",
      },
      {
        id: 32,
        brand: "New Balance",
        name: "393 trainers in grey",
        imageUrl: `${nb}`,
        price: 25,
        gender: "mens",
      },
    ],
  },
];
export default ShoesData;
