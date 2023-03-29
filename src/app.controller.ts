import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { isTechnGuard } from './Guards/isTechn.guard';
import { IsUserGuard } from './Guards/isUser.guard';
import { CreateHomeServicesDto } from './home-services/dto/create-homeServices-dto';
import { HomeServicesService } from './home-services/home-services.service';
import { UserServiceReqService } from './user-service-req/user-service-req.service';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private authService: AuthService,
    private homeServicesService: HomeServicesService,
    private userServiceReqService: UserServiceReqService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'hello World' })
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('get/data')
  @ApiOperation({ summary: 'get single user data' })
  async userDate(@Request() req) {
    return req.user.isTechn;
  }

  // Only user can read all available services
  @UseGuards(JwtAuthGuard, IsUserGuard)
  @Get('get/services')
  @ApiOperation({ summary: 'Get all services' })
  getAllServices() {
    return this.homeServicesService.getAllServices();
  }

  // Only techns can create a new service
  @UseGuards(JwtAuthGuard, isTechnGuard)
  @Post('service/create')
  @ApiOperation({ summary: 'create a new service' })
  createService(@Body() createHomeServicesDto: CreateHomeServicesDto) {
    return this.homeServicesService.addService(createHomeServicesDto);
  }

  //Create new service request
  @UseGuards(JwtAuthGuard, IsUserGuard)
  @ApiOperation({ summary: 'Requesting a new service' })
  @Post('service/request')
  createServiceReq(@Body('name') name: string, @Request() req) {
    return this.userServiceReqService.CreateserviceReq(req.user.id, name);
  }
}
