import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsMongoId, IsOptional } from "class-validator";

export class BaseDto {
    @IsOptional()
    @IsMongoId()
    @ApiProperty({ name: "_id" })
    readonly _id?: string

    @IsOptional()
    @IsDateString()
    @ApiProperty({ name: "createdAt", type: Date })
    readonly createdAt?: string

    @IsOptional()
    @IsDateString()
    @ApiProperty({ name: "updatedAt", type: Date })
    readonly updatedAt?: string
}