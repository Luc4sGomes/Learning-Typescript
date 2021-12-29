//tipo record é um tipo onde voce fala qual vai ser os tipos dos atributos dos objetos
const objeto1: Record<string, string | number> = {
  nome: 'lucas',
  sobrenome: 'gomes',
  idade: 12,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//required so transforma tudo que é opcional para required
type PessoaRequired = Required<PessoaProtocol>;

//partial
type PessoaPartial = Partial<PessoaRequired>;

//readonly
type PessoaReadonly = Readonly<PessoaRequired>;

//pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'lucas',
  sobrenome: 'gomes',
  idade: 22,
};

//extract and exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

//ele computa todos os tipos que estao em abc que nao estao em cde => exclude
type TipoExclude = Exclude<ABC, CDE>;

//computa todos os tipos que estao em abc que podem ser atribuidos em cde => extract
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
};

const accountMongo: AccountMongo = {
  _id: '342742342djsaiod',
  nome: 'lucas',
  idade: 21,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}
const accountApi = mapAccount(accountMongo);
console.log(accountApi);
//module mode
export default 1;
