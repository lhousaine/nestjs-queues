import { Controller, Post, Body } from '@nestjs/common';
import { QueueService } from '../services/queue.service';

@Controller('tasks')
export class WorkerController {
  constructor(private readonly queueService: QueueService) {}

  @Post('heavy-task')
  async addHeavyTask(@Body() body: { multiplier: number }) {
    await this.queueService.addHeavyTask(body);
    return { message: 'Task added to queue' };
  }
}
