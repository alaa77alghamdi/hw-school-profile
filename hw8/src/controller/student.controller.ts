import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import prisma from "../config/db";
import { Request, Response } from "express";

export const creatStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

    await prisma.student.create({
      data: student,
    });

    return res.json({
      message: "add student",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStudent = async (req: Request, res: Response) => {

    try{
        const student = await prisma.student.findMany();
    
    
    res.json(student);}
    catch(error){
        console.log(error);
    }
}



export const findStudentbyID = async (req: Request, res: Response) => {
    try {
      const student = await prisma.student.findUnique({
        where: {
          id: req.params.id,
        },
      });

      if (student?.id==null){
        return res.status(404).json({ message: "student id invalid" });
      }
      res.json(student);
    } catch (error) {
      console.log(error);
    }
  };
