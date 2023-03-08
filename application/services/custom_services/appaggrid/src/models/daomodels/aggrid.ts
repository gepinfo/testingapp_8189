
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const aggridSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const aggridModel = mongoose.model('aggrid', aggridSchema, 'aggrid');
export default aggridModel;
