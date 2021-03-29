import { AlunosRepository } from "../../repositories/AlunosRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";
import { DoadoresRepository } from "../../repositories/DoadoresRepository";


interface IRequest {
  nome: string;
  email: string;
  cpf: string;
  cep: string;
  uf: string;
  endereco: string;
  nome_responsavel: string;
  id_doador: string;
}

class CreateDoadoresUseCase {
  constructor(
    private alunosRepository: AlunosRepository,
    private escolasRepository: EscolasRepository,
    private doadoresRepository: DoadoresRepository
  ) {}

  async execute({
    nome,
    email,
    cpf,
    cep,
    uf,
    endereco,
    nome_responsavel,
    id_doador,
  }: IRequest): Promise<void> {
    const cpfExists = await this.doadoresRepository.findByCpf(cpf);

    if (cpfExists) {
      throw new Error("CPF já cadastrado anteriormente!");
    }

    const emailExists = await this.doadoresRepository.findByEmail(email);

    if (emailExists) {
      throw new Error("Email já cadastrado anteriormente!");
    }

    const doador = await this.doadoresRepository.findById(id_doador);

    if (!doador) {
      throw new Error("Doador não cadastrado!");
    }

    // Acrescenta um ponto a escola
    await this.doadoresRepository.patchPontos(id_doador);

    const doador = {
      nome,
      email,
      cpf,
      cep,
      uf,
      endereco,
      nome_responsavel,
      id_doador,
    };
    await this.doadoresRepository.create(doador);
  }
}

export { CreateDoadoresUseCase };