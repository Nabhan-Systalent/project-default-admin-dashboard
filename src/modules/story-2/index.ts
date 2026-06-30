import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { WorkflowController } from './workflow/workflow.controller';
import { FinancialsController } from './financials/financials.controller';
import { UsersService } from './users/users.service';
import { WorkflowService } from './workflow/workflow.service';
import { FinancialsService } from './financials/financials.service';

/**
 * Story module for story-2 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [UsersController, WorkflowController, FinancialsController],
  providers: [UsersService, WorkflowService, FinancialsService],
})
export class Story2Module {}
