import { Repository, EntityRepository } from "typeorm";

import { Escola } from "../model/Escola";

@EntityRepository(Escola)
class EscolasRepository extends Repository<Escola> {}

export { EscolasRepository };
