import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import prisma from "../config/db";
import { Request, Response } from "express";

export const creatteacher = async (req: Request, res: Response) => {
  try {
    const teacher = req.body;

    await prisma.teacher.create({
      data: teacher,
    });

    return res.json({
      message: "add teacher",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getteacher = async (req: Request, res: Response) => {

    try{
        const teacher = await prisma.teacher.findMany();
    
    
    res.json(teacher);}
    catch(error){
        console.log(error);
    }
}



export const findteacherbyID = async (req: Request, res: Response) => {
    try {
      const teacher = await prisma.teacher.findUnique({
        where: {
          id: req.params.id,
        },
      });
      if (teacher?.id==null){
        return res.status(404).json({ message: "teacher id invalid" });
      }
      res.json(teacher);
    } catch (error) {
      console.log(error);
    }
  };
