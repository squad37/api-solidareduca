import { Router } from "express";

import listMaterialController from "../useCases/listMaterial";

const materialRoutes = Router();

materialRoutes.get("/", (request, response) => {
  return listMaterialController().handle(request, response);
});

export { materialRoutes };