import { Module } from '@nestjs/common';
import { QueueService } from './services/queue.service';
import { BullModule } from '@nestjs/bullmq';
import * as path from 'path';
import { WorkerController } from './controllers/worker.controller';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'heavy-task-queue',
      processors: [path.join(__dirname, './workers/heavy-task.worker.js')],
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [WorkerController],
  providers: [QueueService],
  exports: [QueueService],
})
export class WorkerSandboxedModule {}
