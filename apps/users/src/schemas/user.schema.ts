import { AbstractDocument } from "@app/common";
import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class User extends AbstractDocument {
    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);