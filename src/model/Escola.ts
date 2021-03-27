import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("escolas")
class Escola {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  id_inep: string;

  @Column()
  nome: string;

  @Column()
  parceira: boolean;

  @Column()
  pontos: number;

  @Column()
  restricao_atendimento: string;

  @Column()
  uf: string;

  @Column()
  municipio: string;

  @Column()
  localizacao: string;

  @Column()
  localizacao_diferenciada: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  categoria_administrativa: string;

  @Column()
  dependencia_administrativa: string;

  @Column()
  categoria_escola_privada: string;

  @Column()
  conveniada_poder_publico: string;

  @Column()
  regulamentacao_conselho_educacao: string;

  @Column()
  porte: string;

  @Column()
  modalidade: string;

  @Column()
  outras_ofertas_educacionais: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  consultar_ideb: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Escola };
