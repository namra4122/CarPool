import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

import driverRoutes from "./routes/driver.routes.js"
import employeeRoutes from "./routes/employee.routes.js"
import routeRoutes from "./routes/route.routes.js"
import suggestionRoutes from "./routes/suggestion.routes.js"

//Route declaration
app.use('/api/driver',driverRoutes);
app.use('/api/emp',employeeRoutes);
app.use('/api/route',routeRoutes);
app.use('/api/suggestion',suggestionRoutes);

export { app }