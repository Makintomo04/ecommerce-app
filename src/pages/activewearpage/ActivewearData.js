import wfleece from "../../components/collection-row/collection_item/images/activewear/women/uafleece.jpg";
import runningbra from "../../components/collection-row/collection_item/images/activewear/women/reebokrunbra.jpg";
import wcrophood from "../../components/collection-row/collection_item/images/activewear/women/sbcrophood.jpg";
import hiitleggings from "../../components/collection-row/collection_item/images/activewear/women/hiitleggings.jpg";
import pumaleggings from "../../components/collection-row/collection_item/images/activewear/women/pumaleggings.jpg";
import wnikerunningshorts from "../../components/collection-row/collection_item/images/activewear/women/nikerunningshorts.jpg";

import nikeshorts from "../../components/collection-row/collection_item/images/activewear/men/nikeshorts.jpg";
import reebokhoodie from "../../components/collection-row/collection_item/images/activewear/men/reebokhood.jpg";
import uatop from "../../components/collection-row/collection_item/images/activewear/men/uatop.jpg";
import longsleevetrainingtop from "../../components/collection-row/collection_item/images/activewear/men/longsleevetrainingtop.jpg";
import reeboktrainingfleece from "../../components/collection-row/collection_item/images/activewear/men/reeboktrainingfleece.jpg";
import niketracksuit from "../../components/collection-row/collection_item/images/activewear/men/niketracksuit.jpg";

const ActivewearData = [
  {
    id: 3,
    title: "activewear",
    routeName: "activewear",
    items: [
      {
        id: 45,
        brand: "Under Armour",
        name: "Training fleece funnel neck sweat in black",
        imageUrl: `${wfleece}`,
        price: 45,
        preview: true,
        gender: "womens",
      },
      {
        id: 46,
        brand: "Nike",
        name: "Training dry 5.0 shorts in black/red",
        imageUrl: `${nikeshorts}`,
        price: 26,
        preview: true,
        gender: "mens",
      },
      {
        id: 47,
        brand: "Reebok",
        name: "Training zip through hoodie in grey",
        imageUrl: `${reebokhoodie}`,
        price: 38,
        preview: true,
        newin: true,
        gender: "mens",
      },

      {
        id: 48,
        brand: "South Beach",
        name: "Cropped hoodie and joggers in black",
        imageUrl: `${wcrophood}`,
        price: 40,
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

      {
        id: 50,
        brand: "Nike",
        name: "Football academy tracksuit in navy",
        imageUrl: `${niketracksuit}`,
        price: 60,
        gender: "mens",
      },
      {
        id: 51,
        brand: "Puma Training",
        name: "Seamless set bra and leggings in black",
        imageUrl: `${pumaleggings}`,
        price: 60,
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
        id: 53,
        brand: "Under Armour",
        name: "Training logo long sleeve t-shirt in grey",
        imageUrl: `${longsleevetrainingtop}`,
        price: 26,
        gender: "mens",
      },
      {
        id: 54,
        brand: "HIIT",
        name: "Leggings with branded waist in black",
        imageUrl: `${hiitleggings}`,
        price: 15,
        gender: "womens",
      },
      {
        id: 55,
        brand: "Reebok",
        name: "Training fleece 1/4 zip in black",
        imageUrl: `${reeboktrainingfleece}`,
        price: 38,
        gender: "mens",
      },
      {
        id: 56,
        brand: "Under Armour",
        name: "Under Armour",
        imageUrl: `${uatop}`,
        price: 23,
        preview: true,
        newin: true,
        gender: "mens",
      },
    ],
  },
];
export default ActivewearData;
