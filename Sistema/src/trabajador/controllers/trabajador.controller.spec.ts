import { Test, TestingModule } from '@nestjs/testing';
import { TrabajadorController } from './trabajador.controller';

describe('TrabajadorController', () => {
  let controller: TrabajadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrabajadorController],
    }).compile();

    controller = module.get<TrabajadorController>(TrabajadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
