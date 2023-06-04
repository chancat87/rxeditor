import { ActivityMaterialCategory } from "@rxdrag/minions-schema";
import { ReactNode } from "react";
import { multipleQueryMaterial } from "./MultipleQuery";
import { singleQueryMaterial } from "./SingleQuery";
import { objectToUrlMaterial } from "./ObjectToUrl";

export const httpQueryMaterialCategory: ActivityMaterialCategory<ReactNode>=   {
  name: '$dataSource',
  materials: [
    multipleQueryMaterial,
    singleQueryMaterial,
    objectToUrlMaterial
  ],
}
