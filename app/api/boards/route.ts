import connectDB from "../../../utils/connectDB";
import Boards from "../../../models/boards";
import { NextResponse } from 'next/server';

export async function GET(){
    // if(req.method === 'POST'){
    // await connectDB();
    // const board = await Board.create(req.body)
    // res.json({board})
    // }
        await connectDB();
        const foundBoards = await Boards.find()
        console.log(foundBoards)
        return NextResponse.json({foundBoards})
}