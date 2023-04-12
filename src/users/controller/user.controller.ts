import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { User } from "../schema/user.schema";
import { UserService } from "../service/user.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAllUsers() {
        return this.userService.findAll();
    }

    @Post()
    async create(@Body() item: Users): Promise<User> {
        return await this.userService.create(item);
    }
}