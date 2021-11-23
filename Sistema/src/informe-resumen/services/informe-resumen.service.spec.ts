import { Test, TestingModule } from '@nestjs/testing';
import { InformeResumenService } from './informe-resumen.service';

describe('InformeResumenService', () => {
  let service: InformeResumenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InformeResumenService],
    }).compile();

    service = module.get<InformeResumenService>(InformeResumenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
