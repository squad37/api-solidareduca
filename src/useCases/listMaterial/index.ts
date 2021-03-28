import { MaterialRepository } from "../../repositories/MaterialRepository";
import { ListMaterialController } from "./ListMaterialController";
import { ListMaterialUseCase } from "./ListMaterialUseCase";

export default (): ListMaterialController => {
    const materialRepository = new MaterialRepository();
    const listMaterialUseCase = new ListMaterialUseCase(materialRepository);
    const listMaterialController = new ListMaterialController(listMaterialUseCase);
  
    return listMaterialController;
  };