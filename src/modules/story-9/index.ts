import { Module } from '@nestjs/common';
import { FinancialsController } from './financials/financials.controller';
import { FinancialsService } from './financials/financials.service';

/**
 * Story module for story-9 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [FinancialsController],
  providers: [FinancialsService],
})
export class Story9Module {}
