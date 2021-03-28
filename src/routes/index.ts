import { Router } from "express";

import { alunosRoutes } from "./alunos.routes";
import { escolasRoutes } from "./escolas.routes";
import { materialRoutes } from "./material.routes";

const router = Router();

router.use("/escolas", escolasRoutes);
router.use("/alunos", alunosRoutes);
router.use("/material", materialRoutes);

export { router };
