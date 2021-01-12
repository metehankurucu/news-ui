import React from 'react';
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PostCard from '../components/cards/PostCard';
import PhotoCards from '../components/home/PhotoCards';
import NewsletterForm from '../components/NewsletterForm';
import Layout from '../components/Layout';
import { posts as allPosts } from '../utils/sample-data';
import { GetStaticProps } from 'next';
import { Post } from '../interfaces';
import SocialCard from '../components/cards/SocialCard';
import useColorTheme from '../hooks/useColorTheme';

const latestPostsLength = 10;

type Props = {
    posts?: Post[];
    errors?: string;
};

const IndexPage = ({ posts }: Props) => {
    const colors = useColorTheme();

    const router = useRouter();
    const items = posts ?? [];

    const onClickPost = (slug: string) => {
        router.push(`/posts/${slug}`);
        window.scrollTo(0, 0);
    };

    return (
        <Layout title="Home | Modern News" px={{ base: '.6em', md: '1.2em' }} py="1.4em">
            <Box as="section">
                <Heading marginX=".1em" marginBottom=".6em" fontSize={'1.6em'} color={colors.default} fontWeight="300">
                    Trending
                </Heading>
                {items.length >= 4 && (
                    <PhotoCards
                        onClickPost={({ slug }) => onClickPost(slug)}
                        containerHeight={540}
                        post1={items[0]}
                        post2={items[1]}
                        post3={items[2]}
                        post4={items[3]}
                    />
                )}
            </Box>
            <Divider width="80%" mt="1.6rem" mb=".3rem" mx="auto" />
            <Heading marginX=".1em" marginTop="1em" fontSize={'1.6em'} color={colors.default} fontWeight="300">
                Latest News
            </Heading>
            <Box d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                <Box d="flex" flexDirection="column" flex="4" as="section" marginY={'.7em'}>
                    {items.length > 4 &&
                        items.slice(4, 4 + latestPostsLength).map((post) => {
                            return <PostCard post={post} key={post.id} onClick={() => onClickPost(post.slug)} />;
                        })}
                    <Button w="100%" variant="ghost">
                        Load More
                    </Button>
                </Box>
                <Box flex="2" flexDirection="column" as="section" marginBottom={'10px'} marginX="1rem">
                    <Box>
                        <Text color="primary" textAlign="center" marginBottom=".8em" fontWeight="bold">
                            Most Reading Today
                        </Text>
                        {items.slice(12, 15).map((post) => {
                            return (
                                <PostCard
                                    column
                                    post={post}
                                    key={post.id}
                                    titleFontSize={'1em'}
                                    onClick={() => onClickPost(post.slug)}
                                />
                            );
                        })}
                    </Box>
                    <NewsletterForm onSubmitForm={() => {}} marginY="10px" />
                    <SocialCard title="Follow Us" facebook twitter linkedin youtube instagram onClick={() => {}} />
                </Box>
            </Box>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({}) => {
    try {
        return { props: { posts: allPosts } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default IndexPage;
