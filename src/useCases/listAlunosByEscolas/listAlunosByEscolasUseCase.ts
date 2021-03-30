import { Aluno } from "../../entities/Aluno";
import { AlunosRepository } from "../../repositories/AlunosRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class ListAlunosByEscolasUseCase {
  constructor(
    private alunosRepository: AlunosRepository,
    private escolasRepository: EscolasRepository
  ) {}

  async execute(id_escola: string): Promise<Aluno[]> {
    const escolaExists = await this.escolasRepository.findOne(id_escola);

    if (!escolaExists) {
      throw new Error("Escola não cadastrada!");
    }

    const alunosByEscola = await this.alunosRepository.findByEscola(id_escola);

    return alunosByEscola;
  }
}

export { ListAlunosByEscolasUseCase };
