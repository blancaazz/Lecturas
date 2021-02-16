import { Test } from '@nestjs/testing';
import { RegistroController } from './registro.controller';

describe('Registro Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [RegistroController],
    }).compile();

    controller = module.get(RegistroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
