import { Test, TestingModule } from '@nestjs/testing';
import { DeficienciaController } from './deficiencia.controller';

describe('DeficienciaController', () => {
  let controller: DeficienciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeficienciaController],
    }).compile();

    controller = module.get<DeficienciaController>(DeficienciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
