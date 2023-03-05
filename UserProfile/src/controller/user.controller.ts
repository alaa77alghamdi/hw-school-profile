import prisma from "../config/db";
import { Request, Response } from "express";

export const creatUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;
  
      await prisma.user.create({
        data: user,
      });
  
      return res.json({
        message: "add user",
      });
    } catch (error) {
      console.log(error);
    }
  };



  export const findUsers = async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.findMany({
      
        select: {
          id: true,
          email:true,
          name: true,
          password: false,
          age: true,
        

            profile:true
        
        },
      });
  
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };


  export const findUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
        select: {
            id: true,
            email:true,
            name: true,
            password: false,
            age: true,
          
  
              profile:true
          
          }
      });
  
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };


  export const creatprofile = async (req: Request, res: Response) => {
    try {
      const userprofile = req.body;
  
      await prisma.profile.create({
        data: userprofile,
      });
  
      return res.json({
        message: "add user",
      });
    } catch (error) {
      console.log(error);
    }
  };