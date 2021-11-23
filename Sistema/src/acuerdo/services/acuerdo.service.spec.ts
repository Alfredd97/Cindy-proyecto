import { Test, TestingModule } from '@nestjs/testing';
import { AcuerdoService } from './acuerdo.service';

describe('AcuerdoService', () => {
  let service: AcuerdoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcuerdoService],
    }).compile();

    service = module.get<AcuerdoService>(AcuerdoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
