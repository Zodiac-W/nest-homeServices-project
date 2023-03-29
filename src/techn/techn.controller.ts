import { Controller } from '@nestjs/common';
import { TechnService } from './techn.service';

@Controller('techn')
export class TechnController {
  constructor(private readonly technService: TechnService) {}
}
