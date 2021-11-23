import { Test, TestingModule } from '@nestjs/testing';
import { TrabajadorActividadService } from './trabajador-actividad.service';

describe('TrabajadorService', () => {
  let service: TrabajadorActividadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrabajadorActividadService],
    }).compile();

    service = module.get<TrabajadorActividadService>(TrabajadorActividadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
