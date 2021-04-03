import { DoadoresRepository } from "../../repositories/DoadoresRepository";
import { ListDoadoresByRankingController } from "./ListDoadoresByRankingController";
import { ListDoadoresByRankingUseCase } from "./ListDoadoresByRankingUseCase";

export default (): ListDoadoresByRankingController => {
  const doadoresRepository = new DoadoresRepository();
  const listDoadoresByRankingUseCase = new ListDoadoresByRankingUseCase(
    doadoresRepository
  );
  const listDoadoresByRankingController = new ListDoadoresByRankingController(
    listDoadoresByRankingUseCase
  );

  return listDoadoresByRankingController;
};
