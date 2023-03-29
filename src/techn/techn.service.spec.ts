import { Test, TestingModule } from '@nestjs/testing';
import { TechnService } from './techn.service';

describe('TechnService', () => {
  let service: TechnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechnService],
    }).compile();

    service = module.get<TechnService>(TechnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
