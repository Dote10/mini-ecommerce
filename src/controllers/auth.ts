import { RequestHandler } from "express";
import { prisma } from '../index';
import {hashSync} from 'bcrypt';

export const signup:RequestHandler = async (req,res,next) => {
    const { email, password, name, address, phone } = req.body;

    const existUser = await prisma.user.findFirst({
        where:{
            email,
        }
    });

    if(existUser){
        throw Error('해당 email의 사용자가 이미 존재합니다.');
    }

    const encodedPassword = hashSync(password,10);

    const user = await prisma.user.create({
        select:{
            name:true,
            email:true,
            address:true,
            phone:true
        },
        data:{
            name,
            email,
            password :encodedPassword,
            address,
            phone
        }
    })


    res.json(user);
}

export const login:RequestHandler = (req,res) => {
    res.send('Login works');
}