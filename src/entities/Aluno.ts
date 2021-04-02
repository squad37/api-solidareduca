import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Escola } from "./Escola";

@Entity("alunos")
class Aluno {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column({ select: false })
  senha: string;

  @Column()
  cpf: string;

  @Column()
  cep: string;

  @Column()
  uf: string;

  @Column()
  endereco: string;

  @Column()
  nome_responsavel: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @Column()
  id_escola: string;

  @ManyToOne(() => Escola, { eager: true })
  @JoinColumn({ name: "id_escola" })
  escola: Escola;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Aluno };
