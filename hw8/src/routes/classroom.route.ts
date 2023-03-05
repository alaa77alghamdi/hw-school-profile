import express from "express";
import { creatclass, findclassbyID, getclass } from "../controller/classroom.controller";
let router = express.Router();



router.post("/", creatclass)
router.get("/all", getclass)
router.get("/:id", findclassbyID)


export default router;