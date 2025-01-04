import { Module } from '@nestjs/common';
import { AudioService } from './services/audio.service';
import { AudioController } from './controllers/audio.controller';
import { AudioConsumer } from './services/audio.consumer';
import { AudioEventsListener } from './services/audio-events.listener';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'audio',
      useFactory: () => ({
        connection: {
          host: 'localhost',
          port: 6379,
        },
      }),
    }),
  ],
  controllers: [AudioController],
  providers: [AudioService, AudioConsumer, AudioEventsListener],
})
export class AudioModule {}
