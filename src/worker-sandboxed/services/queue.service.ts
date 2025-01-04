import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(
    @InjectQueue('heavy-task-queue') private readonly heavyTaskQueue: Queue,
  ) {}

  async addHeavyTask(data: any) {
    await this.heavyTaskQueue.add('process-heavy-task', data, {
      attempts: 3,
    });
  }
}
