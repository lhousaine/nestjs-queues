import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioModule } from './audio/audio.module';
import { BullModule } from '@nestjs/bullmq';
import { BullConfigService } from './config/bull-config.service';
import { WorkerSandboxedModule } from './worker-sandboxed/worker.module';

@Module({
  imports: [
    BullModule.forRootAsync({
      useClass: BullConfigService,
    }),
    AudioModule,
    WorkerSandboxedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
