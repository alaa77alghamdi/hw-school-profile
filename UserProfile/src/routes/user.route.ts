import express from "express";
import {  creatUser, creatprofile, findUsers } from "../controller/user.controller";
import validate from "../middleware/validate";
import { userType } from "../zod.schema/user.zod";
let router = express.Router();


router.post('/',validate(userType),creatUser)
router.get('/',findUsers)
router.post('/p',creatprofile)









export default router;