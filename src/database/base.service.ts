import { Injectable } from "@nestjs/common";
import { Document, Model } from "mongoose";

@Injectable()
export abstract class BaseService<T extends Document> {
    constructor(private readonly model: Model<T>) { }

    async create(item) {
        return await this.model.create(item)
    }

    async findAll() {
        return await this.model.find().exec()
    }
}