import express from "express";
import validate from "../middleware/validate";
import { studentType } from "../zod.shcema/zod.student";
import { creatStudent, findStudentbyID, getStudent } from "../controller/student.controller";
let router = express.Router();


router.post("/", validate(studentType), creatStudent)
router.get("/all", getStudent)
router.get("/:id", findStudentbyID)











export default router;