import { EntityRepository, Repository, getRepository } from "typeorm";

import { Pedido } from "../entities/Pedido";

interface ICreatePedidoDTO {
  id_aluno: string;
  id_material: string;
  quantidade: string;
}

interface IUpdateDoadorEncontrado {
  id_pedido: string;
  id_doador: string;
  doador_anonimo: boolean;
  local_entrega: string;
  endereco_entrega: string;
  previsao_entrega: string;
}

interface IFinalizarPedido {
  id_pedido: string;
  mensagem_agradecimento: string;
}

@EntityRepository(Pedido)
class PedidosRepository {
  private repository: Repository<Pedido>;

  constructor() {
    this.repository = getRepository(Pedido);
  }

  async create(pedido: ICreatePedidoDTO): Promise<void> {
    const createPedido = await this.repository.create(pedido);
    this.repository.save(createPedido);
  }

  async findOne(id: string): Promise<Pedido> {
    const pedido = await this.repository.findOne({ id });
    return pedido;
  }

  // Retorna todos os pedidos de um aluno
  async findByAluno(id_aluno: string): Promise<Pedido[]> {
    const pedidos = await this.repository.find({
      where: { id_aluno },
      order: {
        created_at: "DESC",
      },
    });
    return pedidos;
  }

  // Retorna todos os pedidos de um aluno na situação: aguardando doador
  async findByAlunoAguardandoDoador(id_aluno: string): Promise<Pedido[]> {
    const pedidos = await this.repository.find({
      where: { id_aluno, situacao: "Aguardando Doador", deleted: false },
      order: {
        created_at: "ASC",
      },
    });

    return pedidos;
  }

  // Retorna todos os pedidos que determinado doador decidiu doar
  async findByDoador(id_doador: string): Promise<Pedido[]> {
    const pedidos = await this.repository.find({
      where: { id_doador },
      order: {
        updated_at: "DESC",
      },
    });

    return pedidos;
  }

  async list(): Promise<Pedido[]> {
    const pedidos = await this.repository.find({
      order: { updated_at: "DESC" },
    });
    return pedidos;
  }

  // Atualiza o pedido para a situação: doador encontrado. Atualiza também os campos que são de responsabilidade do doador.
  async updateDoadorEncontrado({
    id_pedido,
    id_doador,
    doador_anonimo,
    local_entrega,
    endereco_entrega,
    previsao_entrega,
  }: IUpdateDoadorEncontrado): Promise<Pedido> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        id_doador,
        doador_anonimo,
        local_entrega,
        endereco_entrega,
        previsao_entrega,
        situacao: "Doador Encontrado",
      })
      .where({ id: id_pedido })
      .execute();

    const pedido = await this.repository.findOne({ id: id_pedido });

    return pedido;
  }

  // Altera a situação do pedido para: Doação concluída
  async finalizarPedido({
    id_pedido,
    mensagem_agradecimento,
  }: IFinalizarPedido): Promise<Pedido> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        mensagem_agradecimento,
        situacao: "Doação Concluída",
      })
      .where({ id: id_pedido })
      .execute();

    const pedido = await this.repository.findOne({ id: id_pedido });

    return pedido;
  }

  // Altera o pedido para deleted: True
  async deletedByAluno(id_pedido: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        deleted: true,
        situacao: "Pedido Cancelado",
      })
      .where({ id: id_pedido })
      .execute();
  }

  async cancelByDoador(id_pedido: string): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({
        situacao: "Aguardando Doador",
      })
      .where({ id: id_pedido })
      .execute();
  }
}

export { PedidosRepository };
