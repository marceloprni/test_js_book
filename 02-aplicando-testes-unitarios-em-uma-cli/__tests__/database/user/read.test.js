// Importa função a ser testada
import { getUserByUid } from '../../../src/database/user/read.js';

// Faz o mock do arquivo e das funções que salvam dados a base
import { loadDatabase } from '../../../src/database/file.js';
jest.mock('../../../src/database/path.js');
jest.mock('../../../src/database/file.js');

// Cria um usuário mock
const mockUsuario = {
  uid: 'abc-1234',
  userName: 'nomeDeUsuario',
  name: 'nome',
  lastName: 'DeUsuario',
  email: 'email.nome@usuario.com',
  password: 'senhasupersecreta',
  role: 'USER'
};

// Define retorno da função loadDatabase
loadDatabase.mockResolvedValue([mockUsuario]);

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Encontra usuário quando encontra seu UID', async() => {
  expect.assertions(1);
  const usuario = await getUserByUid('abc-1234');
  expect(usuario).toEqual(mockUsuario);
});

it('Dispara um erro caso usuário não seja contrado', async() => {
  expect.assertions(1);
  try {
    await getUserByUid('uid-nao-existente');
  } catch (err) {
    expect(err.message).toEqual('Não existe usuário com uid informado.');
  }
});

// Teste de exemplo de como expect.assertions funciona
it.skip('Deve conter pelo menos 1 asserção', async() => {
  expect.assertions(1);
  await Promise.resolve(1);
});
