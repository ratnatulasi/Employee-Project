require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express';
import config from 'config';
//import morgan from 'morgan';
import cors from 'cors';
import { AppDataSource } from './utils/data-source';
import AppError from './utils/appError';


import EmployeeRouter from "./routes/employee.route";
import DepartmentRouter from "./routes/department.route";
import TitleRouter from "./routes/title.route";
import SalaryRouter from "./routes/salary.route";
import DepartmentManagerRouter from "./routes/department-manager.route";
import DepartmentEmployeeRouter from "./routes/department-employee.route";

AppDataSource.initialize()
  .then(async () => {
    console.log("connected to the database");
    const app = express();

    // MIDDLEWARE

    // 1. Body parser
    app.use(express.json({ limit: '10kb' }));

    // 4. Cors
    app.use(
      cors()
    );

    // ROUTES
   
    app.use('/employees', EmployeeRouter);
    app.use('/departments', DepartmentRouter);
    app.use('/titles', TitleRouter);
    app.use('/salaries', SalaryRouter);
    app.use('/department-managers', DepartmentManagerRouter);
    app.use('/department-employees', DepartmentEmployeeRouter);

    // HEALTH CHECKER
    app.get('/api/v1/healthChecker', async (_, res) => {
      // const message = await redisClient.get('try');

      res.status(200).json({
        status: 'success',
        message: '',
      });
    });

    // UNHANDLED ROUTE
    app.all('*', (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // GLOBAL ERROR HANDLER
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || 'error';
        error.statusCode = error.statusCode || 500;

        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
    );

    const port = 5000;

    app.listen(port, ()=> console.log("Server listening on port: ", port));
  })
  .catch((error) => console.log(error));