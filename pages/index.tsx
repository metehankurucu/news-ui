import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import PhotoCards from '../components/home/PhotoCards';
import Layout from '../components/Layout';
import { posts } from '../utils/sample-data';

const IndexPage = () => {
    return (
        <Layout title="Home | Modern News">
            <Box as="section" padding={'1.5rem'}>
                <Heading marginX="1.5rem" marginBottom="1rem" as="h2" color="default" fontWeight="300">
                    Latest News
                </Heading>
                <PhotoCards post1={posts[0]} post2={posts[1]} post3={posts[2]} post4={posts[3]} />
            </Box>
        </Layout>
    );
};

export default IndexPage;
