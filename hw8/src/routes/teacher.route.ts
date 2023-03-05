import express from "express";
import validate from "../middleware/validate";
import { teacherType } from "../zod.shcema/zod.teacher";
import { creatteacher, findteacherbyID, getteacher } from "../controller/teacher.controller";

let router = express.Router();


router.post("/", validate(teacherType), creatteacher)
router.get("/all", getteacher)
router.get("/:id", findteacherbyID)










export default router;