import { Request, Response } from 'express';
import { aggridService } from '../service/aggridService';
import { CustomLogger } from '../config/Logger'
let aggrid = new aggridService();

export class aggridController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    aggrid.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into aggridController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from aggridController.ts: GpGetNounCreatedBy');
    })}


}