import { EscolasRepository } from "../../repositories/EscolasRepository";
import { ListEscolasByRankingController } from "./ListEscolasByRankingController";
import { ListEscolasByRankingUseCase } from "./ListEscolasByRankingUseCase";

export default (): ListEscolasByRankingController => {
  const escolasRepository = new EscolasRepository();
  const listEscolasByRankingUseCase = new ListEscolasByRankingUseCase(
    escolasRepository
  );
  const listEscolasByRankingController = new ListEscolasByRankingController(
    listEscolasByRankingUseCase
  );

  return listEscolasByRankingController;
};
