import { Router } from "express";

import { escolasRoutes } from "./escolas.routes";
import { materialRoutes } from "./material.routes";

const router = Router();

router.use("/escolas", escolasRoutes);
router.use("/material", materialRoutes);

export { router };
