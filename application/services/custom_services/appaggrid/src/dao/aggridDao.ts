import * as mongoose from 'mongoose';
import aggridModel from '../models/daomodels/aggrid';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'


export class aggridDao {
    private aggrid = aggridModel;
    constructor() { }
    
    public async GpDelete(aggridId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpDelete');

    

    
    
    
    this.aggrid.findByIdAndRemove(aggridId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpDelete');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(aggridData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(aggridData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.aggrid.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpSearch');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(aggridData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpSearchForUpdate');

    

    
    
    
    this.aggrid.findOneAndUpdate({ _id: aggridData._id }, aggridData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpSearchForUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(aggridData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpUpdate');

    

    
    
    
    this.aggrid.findOneAndUpdate({ _id: aggridData._id }, aggridData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpUpdate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(aggridId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpGetNounById');

    

    
    
    
    this.aggrid.findById(aggridId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpGetNounById');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpGetAllValues');

    

    
    
    
    this.aggrid.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpGetAllValues');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(aggridData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpCreate');

    let temp = new aggridModel(aggridData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpCreate');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(aggridData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into aggridDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.aggrid.aggregate(([
                        { $match: { $and: [{ created_by: aggridData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from aggridDao.ts: GpGetNounCreatedBy');

        

        
                callback(result);
}).catch((error)=>{
callback(error);
});}


}