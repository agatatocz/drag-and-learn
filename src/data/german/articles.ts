import { Column } from "../../interfaces/Column";
import { Article } from "../../interfaces/german/Article";

export const columns: Column[] = [
  {
    label: "Przypadek",
    name: "case",
    show: true,
  },
  {
    label: "r. męski",
    name: "masculin",
    show: false,
  },
  {
    label: "r. żeński",
    name: "feminin",
    show: false,
  },
  {
    label: "r. nijaki",
    name: "neuter",
    show: false,
  },
  {
    label: "l. mn.",
    name: "plural",
    show: false,
  },
];

export const data: Article[] = [
  {
    case: `Nominativ\nwer? was?`,
    masculin: "der",
    feminin: "die",
    neuter: "das",
    plural: "die",
  },
  {
    case: `Genitiv\nwessen?`,
    masculin: "des -s",
    feminin: "der",
    neuter: "des -s",
    plural: "der",
  },
  {
    case: `Dativ\nwem?`,
    masculin: "dem",
    feminin: "der",
    neuter: "dem",
    plural: "den -n",
  },
  {
    case: `Akkusativ\nwen? was?`,
    masculin: "den",
    feminin: "die",
    neuter: "das",
    plural: "die",
  },
];
