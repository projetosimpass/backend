import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      dbName: process.env.DATABASE_NAME,
      auth: {
        username: process.env.MONGO_INITDB_ROOT_USERNAME,
        password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      },
    }),
    EventsModule,
    TicketModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
