import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Ticket } from 'src/ticket/entities/ticket.entity';
import { User } from 'src/user/entities/user.entity';
import { Category } from './category.entity';

@Schema()
export class Event {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  location: string;

  @Prop()
  category: Category;

  @Prop()
  tickets: Ticket;

  @Prop()
  organizer: User;
}

export const EventsSchema = SchemaFactory.createForClass(Event);
