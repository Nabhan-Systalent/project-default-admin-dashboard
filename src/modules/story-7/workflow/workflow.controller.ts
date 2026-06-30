import { Controller, Post, Body } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BulkSuspensionRequestDto } from '../users/dto';

@ApiTags('Workflow')
@Controller('bulk-actions')
export class WorkflowController {
  constructor(private readonly workflowService: WorkflowService) {}

  @Post()
  @ApiOkResponse({ description: 'Request submitted' })
  requestBulkSuspension(@Body() body: BulkSuspensionRequestDto): { success: boolean } {
    return this.workflowService.processSuspension(body);
  }
}
