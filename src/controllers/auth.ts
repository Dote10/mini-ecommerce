import { RequestHandler } from "express";

export const login:RequestHandler = (req,res) => {
    res.send('Login works');
}