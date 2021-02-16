import { Test } from '@nestjs/testing';
import { RegistroService } from './registro.service';

describe('RegistroService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RegistroService],
    }).compile();

    service = module.get(RegistroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
