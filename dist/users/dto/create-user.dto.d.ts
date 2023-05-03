import { BaseDto } from "src/database/dto/base.dto";
export declare class CreateUserDto extends BaseDto {
    username: string;
    password: string;
    phone: string;
}
