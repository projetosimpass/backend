import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  profile: UserProfile;
}

enum UserProfile {
  ORGANIZER,
  SPECTATOR,
}
