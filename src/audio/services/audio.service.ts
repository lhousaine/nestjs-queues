import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Injectable()
export class AudioService {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {}

  async transcode() {
    return this.audioQueue.add('transcode', {
      foo: 'bar',
    });
  }
}
