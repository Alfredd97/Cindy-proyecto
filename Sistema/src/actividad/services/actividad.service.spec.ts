import { Test, TestingModule } from '@nestjs/testing';
import { ActividadService } from './actividad.service';

describe('TrabajadorService', () => {
  let service: ActividadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActividadService],
    }).compile();

    service = module.get<ActividadService>(ActividadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
