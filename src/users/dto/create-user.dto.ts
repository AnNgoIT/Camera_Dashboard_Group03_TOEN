import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { BaseDto } from "src/database/dto/base.dto";

export class CreateUserDto extends BaseDto {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    phone: string;
}