import { NextApiRequest, NextApiResponse } from "next";
import data from '../../../../db.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'GET'){
        try {
            const {id} = req.query;
            const response = data.productPage.filter(c => c._id === id);
            return res.status(200).json(response);
        } catch (error) {
            const result = error as Error
            return res.status(400).json(result.message);
        }
    }
}

















