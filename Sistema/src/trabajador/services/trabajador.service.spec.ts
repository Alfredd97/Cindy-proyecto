import { Test, TestingModule } from '@nestjs/testing';
import { TrabajadorService } from './trabajador.service';

describe('TrabajadorService', () => {
  let service: TrabajadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrabajadorService],
    }).compile();

    service = module.get<TrabajadorService>(TrabajadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
