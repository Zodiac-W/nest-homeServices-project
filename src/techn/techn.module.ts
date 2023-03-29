import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Techn } from './entities/techn.entity';
import { TechnController } from './techn.controller';
import { TechnService } from './techn.service';

@Module({
  imports: [TypeOrmModule.forFeature([Techn])],
  controllers: [TechnController],
  providers: [TechnService],
  exports: [TechnService],
})
export class TechnModule {}
