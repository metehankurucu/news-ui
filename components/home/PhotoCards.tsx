import React from 'react';
import { Post } from '../../interfaces';
import { Box } from '@chakra-ui/react';
import PhotoCard from '../cards/PhotoCard';

interface Props {
    post1: Post;
    post2: Post;
    post3: Post;
    post4: Post;
}

const margin = 8;
const maxContainerHeight = 800;
//TODO responsive flexDirection

const PhotoCards: React.FC<Props> = ({ post1, post2, post3, post4 }) => {
    return (
        <Box flex={1} d="flex" maxH={`${maxContainerHeight}px`}>
            <PhotoCard
                title={post1.title}
                imgSrc={post1.img}
                maxHeight={`${maxContainerHeight - 2 * margin}px`}
                margin={`${margin}px`}
                flex={1}
                alt={`Picture of ${post1.title}`}
                onClick={() => {}}
            />
            <Box d="flex" flex={2} flexDirection="column">
                <PhotoCard
                    title={post2.title}
                    imgSrc={post2.img}
                    alt={`Picture of ${post2.title}`}
                    maxHeight={`${maxContainerHeight / 2 - 4 * margin}px`}
                    margin={`${margin}px`}
                    onClick={() => {}}
                />
                <Box d="flex" flex={1}>
                    <PhotoCard
                        maxHeight={`${maxContainerHeight / 2 - 4 * margin}px`}
                        title={post3.title}
                        imgSrc={post3.img}
                        alt={`Picture of ${post3.title}`}
                        margin={`${margin}px`}
                        onClick={() => {}}
                    />
                    <PhotoCard
                        maxHeight={`${maxContainerHeight / 2 - 4 * margin}px`}
                        title={post4.title}
                        imgSrc={post4.img}
                        alt={`Picture of ${post4.title}`}
                        margin={`${margin}px`}
                        onClick={() => {}}
                    />
                </Box>
            </Box>
        </Box>
    );
};

PhotoCards.propTypes = {};

export default PhotoCards;
