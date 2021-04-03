import { hash } from "bcrypt";

import { DoadoresRepository } from "../../repositories/DoadoresRepository";

interface IRequest {
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
  cep: string;
  uf: string;
  endereco: string;
}
class CreateDoadoresUseCase {
  constructor(private doadoresRepository: DoadoresRepository) {}

  async execute({
    nome,
    email,
    senha,
    cpf,
    telefone,
    cep,
    uf,
    endereco,
  }: IRequest): Promise<void> {
    const cpfExists = await this.doadoresRepository.findByCpf(cpf);

    if (cpfExists) {
      throw new Error("CPF já cadastrado anteriormente!");
    }

    const emailExists = await this.doadoresRepository.findByEmail(email);

    if (emailExists) {
      throw new Error("Email já cadastrado anteriormente!");
    }

    // Criação do hash da senha
    const senhaHash = await hash(senha, 8);

    const doadores = {
      nome,
      email,
      senha: senhaHash,
      cpf,
      telefone,
      cep,
      uf,
      endereco,
    };
    await this.doadoresRepository.create(doadores);
  }
}
export { CreateDoadoresUseCase };
