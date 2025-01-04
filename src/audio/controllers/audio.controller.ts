import { Controller, Get } from '@nestjs/common';
import { AudioService } from '../services/audio.service';

@Controller('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Get('transcode')
  async transcode() {
    return this.audioService.transcode();
  }
}
