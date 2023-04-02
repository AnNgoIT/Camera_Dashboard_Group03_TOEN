import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiTags } from "@nestjs/swagger";
import { ApiProperty } from "@nestjs/swagger/dist";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>

@Schema()
@ApiTags('users')
export class User {

    @Prop()
    @ApiProperty()
    username: string;

    @Prop()
    @ApiProperty()
    password: string;

    @Prop()
    @ApiProperty()
    phone: string
}

export const UserSchema = SchemaFactory.createForClass(User);