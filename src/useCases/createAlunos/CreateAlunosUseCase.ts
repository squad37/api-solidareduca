import { hash } from "bcrypt";

import { AlunosRepository } from "../../repositories/AlunosRepository";
import { EscolasRepository } from "../../repositories/EscolasRepository";

interface IRequest {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
  cep: string;
  uf: string;
  endereco: string;
  nome_responsavel: string;
  id_escola: string;
}

class CreateAlunosUseCase {
  constructor(
    private alunosRepository: AlunosRepository,
    private escolasRepository: EscolasRepository
  ) {}

  async execute({
    nome,
    email,
    senha,
    cpf,
    telefone,
    cep,
    uf,
    endereco,
    nome_responsavel,
    id_escola,
  }: IRequest): Promise<void> {
    const cpfExists = await this.alunosRepository.findByCpf(cpf);

    if (cpfExists) {
      throw new Error("CPF já cadastrado anteriormente!");
    }

    const emailExists = await this.alunosRepository.findByEmail(email);

    if (emailExists) {
      throw new Error("Email já cadastrado anteriormente!");
    }

    const escola = await this.escolasRepository.findOne(id_escola);

    if (!escola) {
      throw new Error("Escola não cadastrada!");
    }

    // Acrescenta um ponto a escola
    await this.escolasRepository.patchPontos(id_escola);

    // Encriptação da senha
    const senhaHash = await hash(senha, 8);

    const aluno = {
      nome,
      email,
      senha: senhaHash,
      cpf,
      telefone,
      cep,
      uf,
      endereco,
      nome_responsavel,
      id_escola,
    };
    await this.alunosRepository.create(aluno);
  }
}

export { CreateAlunosUseCase };
