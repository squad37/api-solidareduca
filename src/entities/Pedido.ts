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

  @ManyToOne(() => Material, { eagle: true })
  @JoinColumn({ name: "id_material" })
  material: Material;

  @Column()
  id_doador: string;

  @ManyToOne(() => Doador, { eagle: true })
  @JoinColumn({ name: "id_doador " })
  doador: Doador;

  @Column()
  local_entrega: string;

  @Column()
  endereco_entrega: string;

  @Column()
  situacao: string;

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
