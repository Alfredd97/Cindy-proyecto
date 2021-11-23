import { Test, TestingModule } from '@nestjs/testing';
import { DeficienciaService } from './deficiencia.service';

describe('DeficienciaService', () => {
  let service: DeficienciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeficienciaService],
    }).compile();

    service = module.get<DeficienciaService>(DeficienciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
