import { IsNotEmpty, Length } from 'class-validator';

export class CreateHomeServicesDto {
  @IsNotEmpty()
  @Length(4, 50)
  name: string;

  @IsNotEmpty()
  @Length(4, 100)
  estimatedTimeInDays: number;
}
