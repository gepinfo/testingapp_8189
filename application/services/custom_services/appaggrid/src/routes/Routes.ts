import { Request, Response, NextFunction } from "express";
import { aggridController } from '../controller/aggridController';


export class Routes {
    private aggrid: aggridController = new aggridController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/aggrid/:id').delete(this.aggrid.GpDelete);
app.route('/aggrid/get/search').get(this.aggrid.GpSearch);
app.route('/aggrid/get/update').put(this.aggrid.GpSearchForUpdate);
app.route('/aggrid').put(this.aggrid.GpUpdate);
app.route('/aggrid/:id').get(this.aggrid.GpGetNounById);
app.route('/aggrid').get(this.aggrid.GpGetAllValues);
app.route('/aggrid').post(this.aggrid.GpCreate);
app.route('/aggrid/userid/created_by').get(this.aggrid.GpGetNounCreatedBy);
     }

}