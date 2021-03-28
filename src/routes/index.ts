import { Router } from "express";

import { alunosRoutes } from "./alunos.routes";
import { escolasRoutes } from "./escolas.routes";

const router = Router();

router.use("/escolas", escolasRoutes);
router.use("/alunos", alunosRoutes);

export { router };
