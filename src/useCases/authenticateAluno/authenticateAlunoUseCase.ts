import { compare } from "bcrypt";

import { AlunosRepository } from "../../repositories/AlunosRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  id_aluno: string;
  email_aluno: string;
  nome_aluno: string;
}

class AuthenticateAlunoUseCase {
  constructor(private alunosRepository: AlunosRepository) {}

  async execute({ email, senha }: IRequest): Promise<IResponse> {
    const userExists = await this.alunosRepository.findByEmail(email);

    if (!userExists) {
      throw new Error("Email ou senha incorreta!");
    }

    // Recupera a senha encriptografada do banco de dados
    const senhaHash = await this.alunosRepository.selectSenha(email);

    // Compara a senha digitada pelo aluno com a senha cadastrada no banco
    const senhaMatch = await compare(senha, senhaHash);

    if (!senhaMatch) {
      throw new Error("Email ou senha incorreta!");
    }

    const aluno: IResponse = {
      id_aluno: userExists.id,
      email_aluno: userExists.email,
      nome_aluno: userExists.nome,
    };

    return aluno;
  }
}

export { AuthenticateAlunoUseCase };
