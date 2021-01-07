import React from 'react';
import { Post } from '../../interfaces';
import { Box } from '@chakra-ui/react';
import PhotoCard from '../cards/PhotoCard';
interface Props {
    post1: Post;
    post2: Post;
    post3: Post;
    post4: Post;
    margin?: number;
    containerHeight?: number;
    onClickPost: (post: Post) => void;
}

//TODO responsive flexDirection
const PhotoCards: React.FC<Props> = ({
    onClickPost,
    post1,
    post2,
    post3,
    post4,
    margin = 6,
    containerHeight = 800,
}) => {
    return (
        <Box flex={1} d="flex" maxH={`${containerHeight}px`}>
            <PhotoCard
                title={post1.title}
                imgSrc={post1.img}
                maxHeight={`${containerHeight - 2 * margin}px`}
                margin={`${margin}px`}
                alt={`Picture of ${post1.title}`}
                onClick={() => onClickPost(post1)}
            />
            <Box margin="0px" d="flex" flex={2} flexDirection="column">
                <PhotoCard
                    title={post2.title}
                    imgSrc={post2.img}
                    alt={`Picture of ${post2.title}`}
                    maxHeight={`${containerHeight / 2 - 2 * margin}px`}
                    margin={`${margin}px`}
                    onClick={() => onClickPost(post2)}
                />
                <Box margin="0px" d="flex" flex={1} height={'100%'}>
                    <PhotoCard
                        maxHeight={`${containerHeight / 2 - 2 * margin}px`}
                        title={post3.title}
                        imgSrc={post3.img}
                        alt={`Picture of ${post3.title}`}
                        margin={`${margin}px`}
                        onClick={() => onClickPost(post3)}
                    />
                    <PhotoCard
                        maxHeight={`${containerHeight / 2 - 2 * margin}px`}
                        title={post4.title}
                        imgSrc={post4.img}
                        alt={`Picture of ${post4.title}`}
                        margin={`${margin}px`}
                        onClick={() => onClickPost(post4)}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PhotoCards;
