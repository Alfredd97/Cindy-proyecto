import { Test, TestingModule } from '@nestjs/testing';
import { UebController } from './ueb.controller';

describe('UebController', () => {
  let controller: UebController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UebController],
    }).compile();

    controller = module.get<UebController>(UebController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
