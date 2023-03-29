import { Test, TestingModule } from '@nestjs/testing';
import { TechnController } from './techn.controller';

describe('TechnController', () => {
  let controller: TechnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnController],
    }).compile();

    controller = module.get<TechnController>(TechnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
