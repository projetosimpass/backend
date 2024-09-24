import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './entities/events.entity';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventRepository: Model<Event>) {}

  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    const createdEvent = new this.eventRepository(createEventDto);
    return await createdEvent.save();
  }

  async getEvents(): Promise<Array<Event>> {
    return await this.eventRepository.find();
  }
}
