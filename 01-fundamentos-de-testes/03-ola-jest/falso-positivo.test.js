const { falsoPositivo } = require('./falso-positivo');

it('retorna um texto qualquer', () => {
  console.log('falso positivo')
  expect(falsoPositivo()).toEqual(expect.any(String));
});
