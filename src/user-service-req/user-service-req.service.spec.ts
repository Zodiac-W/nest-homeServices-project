import { Test, TestingModule } from '@nestjs/testing';
import { UserServiceReqService } from './user-service-req.service';

describe('UserServiceReqService', () => {
  let service: UserServiceReqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserServiceReqService],
    }).compile();

    service = module.get<UserServiceReqService>(UserServiceReqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
