import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Aluno } from "./Aluno";
import { Doador } from "./Doador";
import { Material } from "./Material";

@Entity("pedidos")
class Pedido {
  @PrimaryColumn()
  id: string;

  @Column()
  id_aluno: string;

  @ManyToOne(() => Aluno, { eager: true })
  @JoinColumn({ name: "id_aluno" })
  aluno: Aluno;

  @Column()
  id_material: string;

  @ManyToOne(() => Material, { eager: true })
  @JoinColumn({ name: "id_material" })
  material: Material;

  @Column()
  id_doador: string;

  @ManyToOne(() => Doador, { eager: true })
  @JoinColumn({ name: "id_doador" })
  doador: Doador;

  @Column()
  deleted: boolean;

  @Column()
  doador_anonimo: boolean;

  @Column()
  local_entrega: string;

  @Column()
  endereco_entrega: string;

  @Column()
  situacao: string;

  @Column()
  quantidade: string;

  @Column()
  previsao_entrega: string;

  @Column()
  mensagem_agradecimento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Pedido };
