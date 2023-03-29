import { CanActivate, ExecutionContext } from '@nestjs/common';

export class isTechnGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    console.log(request.user);
    const isTechn = request.user.isTechn;
    return isTechn;
  }
}
