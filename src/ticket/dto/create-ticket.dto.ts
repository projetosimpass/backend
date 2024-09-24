import { IsEnum, IsNumber, IsString } from 'class-validator';
import { TicketType } from '../entities/ticket.entity';

export class CreateTicketDto {
  @IsString()
  eventId: string;

  @IsEnum(TicketType)
  ticketType: TicketType;

  @IsNumber()
  quantityAvailable: number;

  @IsNumber()
  price: number;
}
