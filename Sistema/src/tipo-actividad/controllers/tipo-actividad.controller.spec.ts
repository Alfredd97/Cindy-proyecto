import { Test, TestingModule } from '@nestjs/testing';
import { TipoActividadController } from './tipo-actividad.controller';

describe('TipoActividadController', () => {
  let controller: TipoActividadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoActividadController],
    }).compile();

    controller = module.get<TipoActividadController>(TipoActividadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
