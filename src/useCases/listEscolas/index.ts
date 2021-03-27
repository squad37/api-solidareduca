import { ListEscolasController } from "./ListEscolasController";
import { ListEscolasUseCase } from "./ListEscolasUseCase";

const listEscolasUseCase = new ListEscolasUseCase();
const listEscolasController = new ListEscolasController(listEscolasUseCase);

export { listEscolasController };
