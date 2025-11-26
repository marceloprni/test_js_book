// Operação a ser testada
import { create } from '../../src/operations/create.js';

// Mock da operação que salva dados no banco
import { createUser } from '../../src/database/user/create.js';
jest.mock('../../src/database/user/create.js');

// Espiona o logger
import logger from '../../src/utils/logger.js';
const spies = {
  log: jest.spyOn(logger, 'log').mockImplementation(),
  error: jest.spyOn(logger, 'error').mockImplementation(),
};

// Mocka o path do arquivo database
jest.mock('../../src/database/path.js');

// Mock qualquer de usuário
const mockUser = {
  data: {
    name: 'Qualquer',
    lastName: 'Usuario',
    email: 'qualquer@email.com'
  }
};

// Limpa as chamadas de funções após a execução de cada teste
afterEach(() => {
  jest.clearAllMocks();
});

// Testes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
it('Loga usuário cadastrado com sucesso', async () => {
  createUser.mockResolvedValueOnce(mockUser);

  await create(mockUser);

  expect(spies.log).toHaveBeenCalledTimes(1);
  expect(createUser).toHaveBeenCalledTimes(1);
  expect(createUser).toHaveBeenCalledWith(mockUser.data);
});


it('Loga erro caso não consiga cadastrar o usuário', async () => {
  createUser.mockRejectedValueOnce('error');

  await create(mockUser);

  expect(spies.error).toHaveBeenCalledTimes(1);
  expect(createUser).toHaveBeenCalledTimes(1);
  expect(createUser).toHaveBeenCalledWith(mockUser.data);
});
