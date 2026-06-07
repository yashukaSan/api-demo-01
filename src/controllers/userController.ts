import { Request, Response, NextFuncrion } from "express";
import { getUserById } from "../services/userService";

export const getUser = async (req: Request, res: Response, next: NextFunction)=>{
    const id = Number(res.params.id);
    const user = await getUserById(id);

    res.json();
}