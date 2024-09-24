import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './entities/ticket.entity';
import { EventsSchema } from 'src/events/entities/events.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
    MongooseModule.forFeature([{ name: Event.name, schema: EventsSchema }]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
