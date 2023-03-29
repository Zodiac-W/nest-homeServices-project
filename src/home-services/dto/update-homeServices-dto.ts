import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeServicesDto } from './create-homeServices-dto';

export class UpdateHomeServicesDto extends PartialType(CreateHomeServicesDto) {}
