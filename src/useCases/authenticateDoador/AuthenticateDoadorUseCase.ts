import { compare } from "bcrypt";

import { DoadoresRepository } from "../../repositories/DoadoresRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  id_doador: string;
  email_doador: string;
  nome_doador: string;
}

class AuthenticateDoadorUseCase {
  constructor(private doadoresRepository: DoadoresRepository) {}

  async execute({ email, senha }: IRequest): Promise<IResponse> {
    const doadorExists = await this.doadoresRepository.findByEmail(email);

    if (!doadorExists) {
      throw new Error("Email ou senha incorreta!");
    }

    // Recupera do banco a senha encriptografada
    const senhaHash = await this.doadoresRepository.selectSenha(email);

    // Compara a senha digitada pelo doador com a senha cadastrada no banco de dados
    const senhaMatch = await compare(senha, senhaHash);

    if (!senhaMatch) {
      throw new Error("Email ou senha incorreta!");
    }

    const authenticatedDoador: IResponse = {
      id_doador: doadorExists.id,
      email_doador: doadorExists.email,
      nome_doador: doadorExists.nome,
    };

    return authenticatedDoador;
  }
}

export { AuthenticateDoadorUseCase };
