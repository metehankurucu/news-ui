export type Post = {
    id: number;
    slug: string;
    img: string;
    title: string;
    content: string;
    tags?: string;
    category: string;
    createdAt?: Date | string;
    author?: PostAuthor;
};

export type PostAuthor = {
    id: string;
    name: string;
    avatar: string;
};
