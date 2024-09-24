import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  name: string;

  @IsDateString()
  date: Date;

  @IsString()
  location: string;

  @IsOptional()
  category: string;

  @IsOptional()
  tickets?: string;

  @IsOptional()
  organizer?: string;
}
