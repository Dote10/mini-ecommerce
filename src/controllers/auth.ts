import { RequestHandler } from "express";
import { prisma } from '../index';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../secret';
import { BadRequestException } from "../exceptions/bad-requests";
import { ErrorCodes } from '../exceptions/root';

export const signup:RequestHandler = async (req,res, next) => {
    
    const { email, password, name, address, phone } = req.body;

    const existUser = await prisma.user.findFirst({
        where:{
            email,
        }
    });

    if(existUser){
        next(new BadRequestException('해당 email의 사용자가 이미 존재합니다.',ErrorCodes.USER_ALREADY_EXISTS));
    }

    const encodedPassword = bcrypt.hashSync(password,10);

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

export const login:RequestHandler = async (req,res, next) => {
    const {email, password } = req.body;

    const user = await prisma.user.findFirst({
        where:{
            email
        }
    });

    if(!user){
        throw new BadRequestException(
        '해당 email에 대한 가입정보가 없습니다.',
        ErrorCodes.USER_NOT_FOUND
        );
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match){
        throw new BadRequestException(
        '일치하지 않는 비밀번호 입니다.',
        ErrorCodes.INCORRECT_PASSWORD
        );
    }

    //jwttoken 발급
    const token = jwt.sign({
        userId: user.id,
        email: user.email
    },JWT_SECRET)

    res.json(token);
}