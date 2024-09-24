import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Event } from 'src/events/entities/events.entity';

export enum TicketType {
  SPORT = 'SPORT',
  CONCERT = 'CONCERT',
  THEATER = 'THEATER',
  FAIR = 'FAIR',
  ONLINE = 'ONLINE',
}

@Schema()
export class Ticket {
  @Prop()
  price: number;

  @Prop()
  quantityAvailable: number;

  @Prop({ type: Types.ObjectId, ref: 'Event', required: true })
  event: Event;

  @Prop({ required: true, enum: TicketType })
  ticketType: TicketType;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
