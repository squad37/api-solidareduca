import { MateriaisRepository } from "../../repositories/MateriaisRepository";
import { ListMateriaisController } from "./ListMateriaisController";
import { ListMateriaisUseCase } from "./ListMateriaisUseCase";

export default (): ListMateriaisController => {
  const materiaisRepository = new MateriaisRepository();
  const listMateriaisUseCase = new ListMateriaisUseCase(materiaisRepository);
  const listMateriaisController = new ListMateriaisController(
    listMateriaisUseCase
  );

  return listMateriaisController;
};
