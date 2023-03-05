import express, { Application} from "express";
import studentRoutes from "./routes/student.route";
import classRoutes from "./routes/classroom.route";
import teacherRoutes from "./routes/teacher.route";

import { connectDB } from "./config/db";
const app: Application = express();
app.use(express.json());
let port: number = 3002;
connectDB()
app.use("/student", studentRoutes);
app.use("/class", classRoutes);
app.use("/teacher", teacherRoutes);


app.listen(port, () => console.log(`express server listening on port ${port}`));