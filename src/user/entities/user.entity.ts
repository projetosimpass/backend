import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

enum UserProfile {
  ORGANIZER,
  SPECTATOR,
}

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop({ enum: UserProfile })
  profile: UserProfile;
}

export const UserSchema = SchemaFactory.createForClass(User);
