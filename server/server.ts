import * as express from 'express';

export class ServerApp {
    private app: express.Application
   constructor(){
       this.app = express();
   } 

   public setRoutes(): void{
       this.app.get('/', this.renderHelloWorld);
   }

   public startServer(): void{
       this.app.listen(5000, () => console.log("Example app listening on port 5000!"));
   }

   private renderHelloWorld(req: express.Request, res: express.Response): void{
       res.send("Hello World!");
   }
}