import { Router } from "express";

import { alunosRoutes } from "./alunos.routes";
import { escolasRoutes } from "./escolas.routes";
import { materiaisRoutes } from "./materiais.routes";
import { pedidosRoutes } from "./pedidos.routes";
import { doadoresRoutes} from "./doadores.routes";

const router = Router();

router.use("/escolas", escolasRoutes);
router.use("/alunos", alunosRoutes);
router.use("/materiais", materiaisRoutes);
router.use("/pedidos", pedidosRoutes);
router.use("/doadores",doadoresRoutes);
router.use("/buscar",escolasRoutes);

export { router };
