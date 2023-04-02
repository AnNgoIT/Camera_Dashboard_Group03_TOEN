import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./controller/user.controller";
import { User, UserSchema } from "./schema/user.schema";
import { UserService } from "./service/user.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UserService]
})
export class UserModule { }