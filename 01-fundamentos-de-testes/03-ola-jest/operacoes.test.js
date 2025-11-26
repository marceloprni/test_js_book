const { calculaDesconto, somaHorasExtras } = require('./operacoes');

/*

beforeAll : para executar algo antes da execução de todos os testes.
beforeEach : para executar algo antes de cada um dos testes iniciar.
afterEach : para executar algo após a finalização de cada um dos testes.
afterAll : para executar algo após finalizar todos os testes. 

File , ou arquivo: os arquivos de teste que foram executados nos testes.
Stmts , ou declarações: indica a porcentagem dos termos de declaração (como variáveis e imports) que foram ou não cobertos ao executar os testes.
Branch , ou ramificações: indica a porcentagem de ramificações (como blocos if/else ou switch/case) que foram executadas ao longo dos testes.Funcs , ou 
funções: indica a porcentagem de funções que foram executadas ao longo dos testes;Lines , ou 
linhas: indica a porcentagem de linhas que foram executadas ao longo dos testes;
Uncovered Lines , ou linhas descobertas: indica quais linhas de determinado arquivo não foram executadas pelos testes. 

*/

describe('Operações', () => {
  beforeAll(() => {
    console.log('Hook antes de todos os testes');
  });
  afterAll(() => {
    console.log('Hook após todos os testes');
  });
  beforeEach(() => {
    console.log('Hook antes de cada um dos testes iniciar');
  });
  afterEach(() => {
    console.log('Hook após cada um dos testes finalizar');
  });

  it('deve somar horas extras', () => {
    console.log('Iniciando teste de soma de horas extras');
    const esperado = 10;
    const retornado = somaHorasExtras(5, 5);

    expect(retornado).toBe(esperado);
  });

  //// pula o teste
  //it.skip('deve somar horas extras2', () => {
  //  console.log('Iniciando teste de soma de horas extras2');
  //  const esperado = 10;
  //  const retornado = somaHorasExtras(5, 5);
  //
  //  expect(retornado).toBe(esperado);
  //});

  // realiza so ele 
  /*
  it.only('deve somar horas extras3', () => {
    console.log('Iniciando teste de soma de horas extras3');
    const esperado = 10;
    const retornado = somaHorasExtras(5, 5);

    expect(retornado).toBe(esperado);
  }); */

  it('deve calcular descontos', () => {
    console.log('Iniciando teste de cálculo de descontos');
    const esperado = 5;
    const retornado = calculaDesconto(10, 5);

    expect(retornado).toBe(esperado);
  });
});
