import React from 'react';
import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import PostCard from '../components/cards/PostCard';
import PhotoCards from '../components/home/PhotoCards';
import NewsletterForm from '../components/NewsletterForm';
import Layout from '../components/Layout';
import { posts } from '../utils/sample-data';
import styles from '../constants/styles';

const IndexPage = () => {
    const router = useRouter();

    const onClickPost = (slug: string) => {
        router.push(`/posts/${slug}`);
    };

    return (
        <Layout title="Home | Modern News" padding="1.5rem">
            <Box as="section">
                <Heading marginX="1.4rem" marginBottom="1rem" fontSize={'1.6rem'} color="default" fontWeight="300">
                    Trending
                </Heading>
                <PhotoCards
                    onClickPost={({ slug }) => onClickPost(slug)}
                    containerHeight={540}
                    post1={posts[0]}
                    post2={posts[1]}
                    post3={posts[2]}
                    post4={posts[3]}
                />
            </Box>
            <Divider marginX="2rem" marginY="1.2rem" />
            <Heading marginX="1.4rem" marginTop="2rem" fontSize={'1.6rem'} color="default" fontWeight="300">
                Latest News
            </Heading>
            <Box d="flex">
                <Box d="flex" flexDirection="column" flex="4" as="section" margin={'.7rem'}>
                    {posts.slice(4, 10).map((post) => {
                        return (
                            <PostCard
                                key={post.id}
                                title={post.title}
                                content={post.content}
                                date={post.createdAt}
                                imgSrc={post.img}
                                imgAlt={'Photo for ' + post.title}
                                height={'220px'}
                                onClick={() => onClickPost(post.slug)}
                            />
                        );
                    })}
                    <Button w="100%" variant="ghost">
                        Load More
                    </Button>
                </Box>
                <Box flex="2" flexDirection="column" as="section" margin={'10px'}>
                    <NewsletterForm onSubmit={(email) => console.log(email)} marginY="10px" />
                    <Box backgroundColor="#fbfbfb" borderRadius={styles.borderRadius} padding=".8rem" marginY="10px">
                        <Text color="primary" textAlign="center" marginY=".8rem" fontWeight="bold">
                            Most Reading Today
                        </Text>
                        {posts.slice(12, 15).map((post) => {
                            return (
                                <PostCard
                                    key={post.id}
                                    title={post.title.slice(0, 120) + '...'}
                                    titleFontSize={'1rem'}
                                    content={''}
                                    date={''}
                                    imgSrc={post.img}
                                    imgAlt={'Photo for ' + post.title}
                                    height={'160px'}
                                    onClick={() => onClickPost(post.slug)}
                                />
                            );
                        })}
                    </Box>
                    {/**
                     * //TODO
                     *  Follow Us
                     */}
                </Box>
            </Box>
        </Layout>
    );
};

export default IndexPage;
