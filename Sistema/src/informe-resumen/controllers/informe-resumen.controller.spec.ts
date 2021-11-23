import { Test, TestingModule } from '@nestjs/testing';
import { InformeResumenController } from './informe-resumen.controller';

describe('InformeResumenController', () => {
  let controller: InformeResumenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformeResumenController],
    }).compile();

    controller = module.get<InformeResumenController>(InformeResumenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
