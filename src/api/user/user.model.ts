import { Document, model, Schema} from "mongoose"
import { nextTick } from "process";

interface IUserSchema extends Document{
    username: string;
    password: string;
    salt: string;
    user_id: string;
    created: Date;
    updated: Date;
}

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    salt: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});

UserSchema.pre<IUserSchema>("save", function(next){
    if(!this.isNew){
        this.updated = new Date();
    }
    next();
});

export default model<IUserSchema>('User', UserSchema); 