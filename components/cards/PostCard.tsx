import React, { useState } from 'react';
import { Box, BoxProps, Text } from '@chakra-ui/react';
import styles from '../../constants/styles';
import { Post } from '../../interfaces';
import Image from '../Image';
import Card from './Card';
import _ from 'lodash';
interface Props extends BoxProps {
    post: Post;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
}

const PostCard = ({
    post,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);

    return (
        <Card
            marginY=".5rem"
            p={4}
            display={{ md: 'flex' }}
            justifyContent="flex-start"
            flexDirection={{ base: 'column', md: column ? 'column' : 'row' }}
            borderColor="#f0f0f0"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.01 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            {...props}
        >
            <Box>
                <Image
                    width={{ base: '100%', lg: column ? '100%' : 60 }}
                    height={{ base: 80, lg: column ? '15rem' : 40 }}
                    src={post.img}
                    alt={'Photo of ' + post.title}
                    objectFit="cover"
                    borderRadius={styles.borderRadius}
                />
            </Box>
            <Box mt={{ base: 4, md: 2 }} ml={{ md: 6 }}>
                <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide" color="primary">
                    {post.category}
                </Text>
                <Text
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                    color="secondary"
                >
                    {_.upperFirst(post.title)}
                </Text>
                <Text mt={2} color="gray.500">
                    {post.content.substr(0, 120)}
                    {post.content.length > 120 ? '...' : ''}
                </Text>
            </Box>
        </Card>
        // <Card
        //     d="flex"
        //     justifyContent="flex-start"
        //     flexDirection={{ base: 'column', md: 'row' }}
        //     marginY=".5rem"
        //     borderColor="#f0f0f0"
        //     cursor="pointer"
        //     onMouseEnter={() => setHover(true)}
        //     onMouseLeave={() => setHover(false)}
        //     style={{ transform: `scale(${hover ? 1.01 : 1})` }}
        //     transition="ease-in 0.2s"
        //     overflow="hidden"
        //     {...props}
        // >
        //     <Box flexShrink={0} d="flex" flex={{ base: '1', md: '3' }}>
        //         <Image src={imgSrc} alt={imgAlt} objectFit="cover" borderRadius={styles.borderRadius} />
        //     </Box>
        //     <Box
        //         d="flex"
        //         flexDirection="column"
        //         flex={{ base: '2', md: '6' }}
        //         padding={'.5rem'}
        //         justifyContent="flex-start"
        //     >
        //         <Skeleton marginY={'.2rem'} borderRadius={styles} isLoaded={!skeleton}>
        //             <Heading lineHeight="normal" fontWeight="semibold" color={'#000'} fontSize={titleFontSize}>
        //                 {_.upperFirst(title)}
        //             </Heading>
        //         </Skeleton>
        //         <Skeleton marginY={'.2rem'} isLoaded={!skeleton}>
        //             <Text fontSize="1rem">
        //                 {content.substr(0, 120)}
        //                 {content.length > 120 ? '...' : ''}
        //             </Text>
        //         </Skeleton>
        //         <Skeleton marginY={'.2rem'} isLoaded={!skeleton}>
        //             <Text fontSize=".7rem" color="gray.500" fontWeight="bold">
        //                 {date}
        //             </Text>
        //         </Skeleton>
        //     </Box>
        // </Card>
    );
};

export default PostCard;
