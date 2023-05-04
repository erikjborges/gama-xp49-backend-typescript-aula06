import { IPessoaFisicaEntity } from "./pessoafisica.entity";
import { IPessoaJuridicaEntity } from "./pessoajuridica.entity";

export type ClienteEntity = IPessoaFisicaEntity | IPessoaJuridicaEntity;