import { CanActivate, ExecutionContext } from '@nestjs/common';

export class IsUserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const isTechn = request.user.isTechn;
    return !isTechn;
  }
}
