import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('audio')
export class AudioConsumer extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    switch (job.name) {
      case 'transcode': {
        let progress = 0;
        for (let i = 0; i < 100; i++) {
          await this.doSomething(job.data);
          progress += 1;
          await job.updateProgress(progress);
        }
        return {};
      }
      case 'concatenate': {
        await this.doSomeLogic2();
        break;
      }
    }
  }

  async doSomething(data: any) {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log('doSomething', data);
        resolve(0);
      }, 1000),
    );
  }

  async doSomeLogic2() {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log('doSomeLogic2');
        resolve(0);
      }, 1000),
    );
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
