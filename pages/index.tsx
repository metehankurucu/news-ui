import React from 'react';
import { Box, Divider, Heading } from '@chakra-ui/react';
import PostCard from '../components/cards/PostCard';
import PhotoCards from '../components/home/PhotoCards';
import NewsletterForm from '../components/NewsletterForm';
import Layout from '../components/Layout';
import { posts } from '../utils/sample-data';

const IndexPage = () => {
    return (
        <Layout title="Home | Modern News" padding="1.5rem">
            <Box as="section">
                <Heading marginX="1.4rem" marginBottom="1rem" fontSize={'1.6rem'} color="default" fontWeight="300">
                    Trending
                </Heading>
                <PhotoCards containerHeight={540} post1={posts[0]} post2={posts[1]} post3={posts[2]} post4={posts[3]} />
            </Box>
            <Divider marginX="2rem" marginY="1.2rem" />
            <Heading marginX="1.4rem" marginTop="2rem" fontSize={'1.6rem'} color="default" fontWeight="300">
                Latest News
            </Heading>
            <Box d="flex">
                <Box d="flex" flexDirection="column" flex="3" as="section" margin={'.7rem'}>
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
                            />
                        );
                    })}
                </Box>
                <Box flex="1" flexDirection="column" as="section" margin={'10px'}>
                    <NewsletterForm onSubmit={(email) => console.log(email)} />
                    {/**
                     * //TODO
                     *  Most Reading Today
                     *  Most Shared Today
                     *  Follow Us
                     *
                     */}
                </Box>
            </Box>
        </Layout>
    );
};

export default IndexPage;
