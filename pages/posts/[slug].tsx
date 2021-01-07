import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';
import { posts } from '../../utils/sample-data';
import { Post } from '../../interfaces';
import styles from '../../constants/styles';
import Image from '../../components/Image';
import _ from 'lodash';

type Props = {
    post?: Post;
    errors?: string;
};

const PostDetail = ({ post, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="Error | Modern News">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        );
    }

    return (
        <Layout title={`${post ? post.title : 'Post Detail'} | Modern News`} padding="1.5rem">
            <Box as="section">
                <Image
                    borderRadius={styles.borderRadius}
                    objectFit={'cover'}
                    src={post?.img}
                    width={'100%'}
                    maxHeight={'640px'}
                    minHeight={'360px'}
                />
            </Box>
            <Box d="flex">
                <Box as="section" d="flex" flex="3">
                    <Box as="article">
                        <Heading margin="1rem" color="default">
                            {_.upperFirst(post?.title)}
                        </Heading>
                        <Text margin="1rem">
                            {post?.content} {post?.content} {post?.content} {post?.content} {post?.content}{' '}
                            {post?.content} {post?.content} {post?.content} {post?.content} {post?.content}{' '}
                            {post?.content} {post?.content}
                        </Text>
                    </Box>
                </Box>
                <Box as="section" d="flex" flex="1">
                    {/**
                     * //TODO
                     * author
                     * share
                     * other posts
                     */}
                </Box>
            </Box>
        </Layout>
    );
};

export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const slug = params?.slug;
        const item = posts.find((data) => data.slug === slug);
        return { props: { post: item } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
