import { RequestHandler } from "express";
import { prisma } from '../index';

export const signup:RequestHandler = async (req,res) =>{
    const { email, passowrd, name } = req.body;

    let user = await prisma.user.findFirst({
        where:{
            email
        }
    });

    if(user){
        throw Error('해당 email의 사용자가 이미 존재합니다.');
    }
}

export const login:RequestHandler = (req,res) => {
    res.send('Login works');
}