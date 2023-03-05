import prisma from "../config/db";
import { Request, Response } from "express";

export const creatclass = async (req: Request, res: Response) => {
  try {
    const classroom = req.body;

    await prisma.classRoom.create({
      data: classroom,
    });

    return res.json({
      message: "add classroom",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getclass = async (req: Request, res: Response) => {

    try{
        const classroom = await prisma.classRoom.findMany();
    
    
    res.json(classroom);}
    catch(error){
        console.log(error);
    }
}



export const findclassbyID = async (req: Request, res: Response) => {
    try {
      const classroom = await prisma.classRoom.findUnique({
        where: {
          id: req.params.id,
        },
      });
     
      if (classroom?.id==null){
        return res.status(404).json({ message: "classroom id invalid" });
      }
      res.json(classroom);
     

    } catch (error) {
      console.log(error);
    }
  };
