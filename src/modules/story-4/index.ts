import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

/**
 * Story module for story-4 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class Story4Module {}
