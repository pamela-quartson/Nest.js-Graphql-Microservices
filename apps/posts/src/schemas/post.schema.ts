import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class Post extends AbstractDocument{
    @Prop()
    title: string;

    @Prop()
    text: string

    @Prop()
    likes: number;

    @Prop()
    author: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);