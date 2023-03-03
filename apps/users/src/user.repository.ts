import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { User } from "./schemas/user.schema";

@Injectable()
export class UserRepository extends AbstractRepository<User>{
    protected readonly logger = new Logger(User.name);

    constructor( @InjectModel(User.name) userModel: Model<User>, @InjectConnection() connection: Connection){
        super(userModel, connection);
    }
}