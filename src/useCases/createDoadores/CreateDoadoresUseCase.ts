import { DoadoresRepository } from "../../repositories/DoadoresRepository";

interface IRequest {
  nome: string;
  email: string;
  cpf: string;
  cep: string;
  uf: string;
  endereco: string;
  
}
class CreateDoadoresUseCase {
  constructor(
    private doadoresRepository: DoadoresRepository) {}

  async execute({
    nome,
    email,
    cpf,
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

    const doadores = {
      nome,
      email,
      cpf,
      cep,
      uf,
      endereco,
    
    };
    await this.doadoresRepository.create(doadores);
  }
}
export { CreateDoadoresUseCase };