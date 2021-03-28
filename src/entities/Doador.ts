import {
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("doadores")
class Doador {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  pontos: number;

  @Column()
  cep: string;

  @Column()
  uf: string;

  @Column()
  endereco: string;

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

export { Doador };
