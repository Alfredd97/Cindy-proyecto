import { Test, TestingModule } from '@nestjs/testing';
import { AcuerdoController } from './acuerdo.controller';

describe('AcuerdoController', () => {
  let controller: AcuerdoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcuerdoController],
    }).compile();

    controller = module.get<AcuerdoController>(AcuerdoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
