import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import PhotoCard from '../cards/PhotoCard';
import { Post } from '../../interfaces';
interface Props {
    post1: Post;
    post2: Post;
    post3: Post;
    post4: Post;
    margin?: number;
    containerHeight?: number;
    onClickPost: (post: Post) => void;
}

const PhotoCards: React.FC<Props> = ({
    onClickPost,
    post1,
    post2,
    post3,
    post4,
    margin = 6,
    containerHeight = 800,
}) => {
    const [isLargerThanMd] = useMediaQuery('(min-width: 48em)');
    const [maxContainerHeight, setMaxContainerHeight] = useState(containerHeight);
    const [maxFullPhotoHeight, setMaxFullPhotoHeight] = useState(containerHeight - 2 * margin);
    const [maxHalfPhotoHeight, setMaxHalfPhotoHeight] = useState(containerHeight / 2 - 2 * margin);

    useEffect(() => {
        setMaxContainerHeight(isLargerThanMd ? containerHeight : 4 * containerHeight);
        setMaxFullPhotoHeight(isLargerThanMd ? containerHeight - 2 * margin : containerHeight / 2 - 2 * margin);
        setMaxHalfPhotoHeight(isLargerThanMd ? containerHeight / 2 - 2 * margin : containerHeight / 2 - 2 * margin);
    }, [isLargerThanMd]);

    return (
        <Box flex={1} d="flex" maxHeight={`${maxContainerHeight}px`} flexDirection={{ base: 'column', md: 'row' }}>
            <PhotoCard
                title={post1.title}
                imgSrc={post1.img}
                maxHeight={`${maxFullPhotoHeight}px`}
                margin={`${margin}px`}
                alt={`Picture of ${post1.title}`}
                onClick={() => onClickPost(post1)}
            />
            <Box margin="0px" d="flex" flex={2} flexDirection="column">
                <PhotoCard
                    title={post2.title}
                    imgSrc={post2.img}
                    alt={`Picture of ${post2.title}`}
                    maxHeight={`${maxHalfPhotoHeight}px`}
                    margin={`${margin}px`}
                    onClick={() => onClickPost(post2)}
                />
                <Box margin="0px" d="flex" flex={1} height={'100%'} flexDirection={{ base: 'column', md: 'row' }}>
                    <PhotoCard
                        maxHeight={`${maxHalfPhotoHeight}px`}
                        title={post3.title}
                        imgSrc={post3.img}
                        alt={`Picture of ${post3.title}`}
                        margin={`${margin}px`}
                        onClick={() => onClickPost(post3)}
                    />
                    <PhotoCard
                        maxHeight={`${maxHalfPhotoHeight}px`}
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
