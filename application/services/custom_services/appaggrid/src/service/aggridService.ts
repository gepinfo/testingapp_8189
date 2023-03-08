import { Request, Response } from 'express';
import {aggridDao} from '../dao/aggridDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let aggrid = new aggridDao();

export class aggridService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpDelete')
     let  aggridId = req.params.id;
     aggrid.GpDelete(aggridId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpSearch')
     let  aggridData = req.query;
     aggrid.GpSearch(aggridData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpSearchForUpdate')
     let  aggridData = req.body;
     aggrid.GpSearchForUpdate(aggridData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpUpdate')
     let  aggridData = req.body;
     aggrid.GpUpdate(aggridData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpGetNounById')
     let  aggridId = req.params.id;
     aggrid.GpGetNounById(aggridId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpGetAllValues')
     
     aggrid.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpCreate')
     let  aggridData = req.body;
     aggrid.GpCreate(aggridData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into aggridService.ts: GpGetNounCreatedBy')
     let  aggridData = { created_by: req.query.createdby };
     aggrid.GpGetNounCreatedBy(aggridData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from aggridService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}