import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WorkflowService } from './workflow.service';
import { SuspensionRequestDto, WorkflowResponseDto } from './dto/workflow.dto';

@ApiTags('Workflow')
@Controller('bulk-actions')
export class WorkflowController {
  constructor(private readonly workflowService: WorkflowService) {}

  @Post()
  @ApiOperation({ summary: 'Create suspension request' })
  @ApiResponse({ status: 200, type: WorkflowResponseDto })
  async requestBulkSuspension(@Body() body: SuspensionRequestDto): Promise<WorkflowResponseDto> {
    return this.workflowService.createSuspension(body);
  }
}
