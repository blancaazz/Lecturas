import { Test } from '@nestjs/testing';
import { RegistroController } from './registro.controller';
import { RegistroService } from './registro.service'

describe('Registro Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [RegistroController],
      providers: [RegistroService],
    }).compile();

    controller = module.get(RegistroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
