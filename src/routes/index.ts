import { Router } from "express";

import { escolasRoutes } from "./escolas.routes";
import { alunosRoutes } from "./alunos.routes";

const router = Router();

router.use("/escolas", escolasRoutes);
router.use("/alunos", alunosRoutes);

export { router };
