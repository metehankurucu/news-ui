import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layout';
import { Box, Heading, Text } from '@chakra-ui/react';
import { posts } from '../../utils/sample-data';
import styles from '../../constants/styles';
import Image from '../../components/Image';
import NewsletterForm from '../../components/NewsletterForm';
import AuthorCard from '../../components/cards/AuthorCard';
import PostCard from '../../components/cards/PostCard';
import SocialCard from '../../components/cards/SocialCard';
import useColorTheme from '../../hooks/useColorTheme';
import { Post } from '../../interfaces';
import { useRouter } from 'next/router';
import _ from 'lodash';

type Props = {
    post?: Post;
    morePosts?: Post[];
    errors?: string;
};

const PostDetail = ({ post, morePosts, errors }: Props) => {
    const router = useRouter();
    const colors = useColorTheme();

    const onClickPost = (slug: string) => {
        router.push(`/posts/${slug}`);
        window.scrollTo(0, 0);
    };

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
        <Layout title={`${post ? post.title : 'Post Detail'} | Modern News`} padding={{ base: '.7rem', md: '1.5rem' }}>
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
            <Box d="flex" flexDirection={{ base: 'column', md: 'row' }}>
                <Box as="section" d="flex" flex="3">
                    <Box as="article" margin=".5rem">
                        <Heading marginY="1.4rem" color={colors.secondary}>
                            {_.upperFirst(post?.title)}
                        </Heading>
                        <Text>{post?.content}</Text>
                    </Box>
                </Box>
                <Box as="section" flex="1" flexDirection="column" marginTop={'2rem'}>
                    <AuthorCard
                        author={{
                            id: '1',
                            name: 'Metehan Kurucu',
                            avatar:
                                'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
                        }}
                    />
                    <SocialCard title="Share The Post" facebook twitter linkedin onClick={() => {}} />
                    <NewsletterForm onSubmitForm={() => {}} marginY="10px" />
                </Box>
            </Box>
            <Box as="section">
                <Heading marginX="1.4rem" marginTop="2rem" fontSize={'1.6rem'} color={colors.default} fontWeight="300">
                    Browse More News
                </Heading>
                <Box d="flex" flexDirection="column" flex="4" as="section" margin={'.3rem'}>
                    {morePosts?.map((post) => {
                        return (
                            <PostCard
                                post={post}
                                key={post.id}
                                titleFontSize={'1.2rem'}
                                onClick={() => onClickPost(post.slug)}
                            />
                        );
                    })}
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
        return { props: { post: item, morePosts: posts.slice(0, 6) } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
