import { Router } from "express";

import { alunosRoutes } from "./alunos.routes";
import { escolasRoutes } from "./escolas.routes";
import { materialRoutes } from "./material.routes";
import { pedidosRoutes } from "./pedidos.routes";

const router = Router();

router.use("/escolas", escolasRoutes);
router.use("/alunos", alunosRoutes);
router.use("/materiais", materialRoutes);
router.use("/pedidos", pedidosRoutes);

export { router };
