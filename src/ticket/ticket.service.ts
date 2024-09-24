import { HttpException, Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket } from './entities/ticket.entity';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private ticketRepository: Model<Ticket>,
  ) {}

  async createTicket(createTicketDto: CreateTicketDto) {
    const { eventId, ...ticketData } = createTicketDto;

    const existTicket = await this.ticketRepository.find({
      event: eventId,
      ticketType: ticketData.ticketType,
    });

    if (existTicket) {
      throw new HttpException('Ticket Already Exists', 400);
    }

    const ticketToSave = new this.ticketRepository({
      ...ticketData,
      event: eventId,
    });
    return await ticketToSave.save();
  }

  async findAll() {
    return await this.ticketRepository.find();
  }

  async findTicketById(id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Ticket Not Found', 404);

    return await this.ticketRepository.findById(id);
  }

  async findTicketsByEventId(eventId: string) {
    const isValid = mongoose.Types.ObjectId.isValid(eventId);
    if (!isValid) throw new HttpException('Invalid Event Id', 400);

    return await this.ticketRepository.find({ event: eventId });
  }

  async updateTicket(id: string, updateTicketDto: UpdateTicketDto) {
    return await this.ticketRepository.findByIdAndUpdate(id, updateTicketDto, {
      new: true,
    });
  }

  async deleteTicket(id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 400);

    const deletedTicket = await this.ticketRepository.findByIdAndDelete(id);
    if (!deletedTicket) throw new HttpException('Ticket Not Found', 404);

    return;
  }
}
