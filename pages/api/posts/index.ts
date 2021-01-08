import { NextApiRequest, NextApiResponse } from 'next';
import { posts } from '../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray(posts)) throw new Error('Cannot find post data');

        const { offset, limit } = _req.query;
        const offsetNum: number = offset ? Number(offset) : 0;
        const limitNum: number = limit ? Number(limit) : 100;

        res.status(200).json(posts.slice(offsetNum, offsetNum + limitNum));
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
