import { Injectable } from '@nestjs/common';
import { SuspensionRequestDto, WorkflowResponseDto } from './dto/workflow.dto';

@Injectable()
export class WorkflowService {
  async createSuspension(data: SuspensionRequestDto): Promise<WorkflowResponseDto> {
    return {
      message: `Suspension requested for ${data.userIds.length} users`,
      requestId: 'req_' + Math.random().toString(36).substr(2, 9),
    };
  }
}
