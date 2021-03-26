import { Router } from "express";

import { escolasRoutes } from "./escolas.routes";

const router = Router();

router.use("/escolas", escolasRoutes);

export { router };
