import { NextApiRequest, NextApiResponse } from 'next';
import { posts } from '../../../utils/sample-data';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray(posts)) throw new Error('Cannot find post data');

        const { id } = _req.query;
        const post = posts.find((post) => post.id == Number(id));

        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
