import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  constructor(private eventService: EventsService) {}

  @Post()
  createEvent(@Body() createEventDto: CreateEventDto) {
    console.log(createEventDto);
    return this.eventService.createEvent(createEventDto);
  }

  @Get()
  getEvents() {
    return this.eventService.getEvents();
  }
}
