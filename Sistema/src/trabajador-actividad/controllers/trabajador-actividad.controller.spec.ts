import { Test, TestingModule } from '@nestjs/testing';
import { TrabajadorActividadController } from './trabajador-actividad.controller';

describe('TrabajadorActividadController', () => {
  let controller: TrabajadorActividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrabajadorActividadController],
    }).compile();

    controller = module.get<TrabajadorActividadController>(TrabajadorActividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
