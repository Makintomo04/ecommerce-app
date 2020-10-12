import belt from "../../components/collection-row/collection_item/images/accessories/women/belt.jpg";
import earcuff from "../../components/collection-row/collection_item/images/accessories/women/earcuff.jpg";
import wgloves from "../../components/collection-row/collection_item/images/accessories/women/gloves.jpg";
import wheadband from "../../components/collection-row/collection_item/images/accessories/women/headband.jpg";
import earringnecklace from "../../components/collection-row/collection_item/images/accessories/women/moonearring.jpg";
import wtommytote from "../../components/collection-row/collection_item/images/accessories/women/tommybag.jpg";

import bershkachain from "../../components/collection-row/collection_item/images/accessories/men/bershka.jpg";
import bossbeanie from "../../components/collection-row/collection_item/images/accessories/men/bossbeanie.jpg";
import mgoldring from "../../components/collection-row/collection_item/images/accessories/men/goldring.jpg";
import mholdall from "../../components/collection-row/collection_item/images/accessories/men/holdall.jpg";
import mkwatch from "../../components/collection-row/collection_item/images/accessories/men/mkwatch.jpg";
import spiralbp from "../../components/collection-row/collection_item/images/accessories/men/spiralbp.jpg";
const AccessoriesData = [
  {
    id: 3,
    title: "accessories",
    routeName: "accessories",
    items: [
      {
        id: 33,
        brand: "Bershka",
        name: "Layered multi pendant necklace in silverk",
        imageUrl: `${bershkachain}`,
        price: 8,
        preview: true,
        gender: "mens",
      },
      {
        id: 34,
        brand: "Topshop",
        name: "Twist ear cuff in gold",
        imageUrl: `${earcuff}`,
        price: 7,
        preview: true,
        gender: "womens",
      },
      {
        id: 35,
        brand: "Tommy Jeans",
        name: "Heritage tote bag",
        imageUrl: `${wtommytote}`,
        price: 85,
        preview: true,
        newin: true,
        gender: "womens",
      },

      {
        id: 36,
        brand: "Michael Kors",
        name: "Layton silicone watch in black",
        imageUrl: `${mkwatch}`,
        price: 159,
        gender: "mens",
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
        id: 38,
        brand: "BOSS",
        name: "Arebo contrast box logo beanie in navy",
        imageUrl: `${bossbeanie}`,
        price: 39,
        gender: "mens",
      },
      {
        id: 39,
        brand: "Barbour Eadan",
        name: "waxed holdall in olive",
        imageUrl: `${mholdall}`,
        price: 90,
        preview: true,
        newin: true,
        gender: "mens",
      },
      {
        id: 40,
        brand: "Chained & Able",
        name: "Sovereign ring in gold with black stone",
        imageUrl: `${mgoldring}`,
        price: 22,
        gender: "mens",
      },
      {
        id: 41,
        brand: "My Accessories London",
        name: "Gloves with studded bow detail in black faux leather",
        imageUrl: `${wgloves}`,
        price: 15,
        gender: "womens",
      },
      {
        id: 42,
        brand: "Accessorize",
        name: "Pearl embellished headband in cream",
        imageUrl: `${wheadband}`,
        price: 16,
        gender: "womens",
      },
      {
        id: 43,
        brand: "Spiral Reflex",
        name: "Backpack in black",
        imageUrl: `${spiralbp}`,
        price: 40,
        gender: "mens",
      },
      {
        id: 44,
        brand: "AD",
        name: "Tipped end circle buckle jeans belt",
        imageUrl: `${belt}`,
        price: 8,
        gender: "womens",
      },
    ],
  },
];
export default AccessoriesData;
