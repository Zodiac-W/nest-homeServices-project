import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnDto } from './create-techn-dto';

export class UpdateTechnDto extends PartialType(CreateTechnDto) {}
