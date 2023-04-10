import { Model } from 'mongoose';
import { BaseService } from 'src/database/base.service';
import { UserDocument } from '../schema/user.schema';
export declare class UserService extends BaseService<UserDocument> {
    private userModel;
    constructor(userModel: Model<UserDocument>);
}
