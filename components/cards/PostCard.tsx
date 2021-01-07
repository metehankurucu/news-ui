import React, { useState } from 'react';
import { Box, BoxProps, Heading, Text, Skeleton } from '@chakra-ui/react';
import styles from '../../constants/styles';
import Image from '../Image';
import _ from 'lodash';

interface Props extends BoxProps {
    height: number | string;
    title: string;
    content: string;
    imgSrc: string;
    imgAlt: string;
    imgBoxSize?: string | number;
    date?: string | Date;
    skeleton?: boolean;
}

const PostCard = ({ height, title, content, imgSrc, imgBoxSize, imgAlt, date, skeleton = false, ...props }: Props) => {
    const [hover, setHover] = useState(false);

    return (
        <Box
            d="flex"
            bgColor="#fff"
            justifyContent="flex-start"
            flexDirection="row"
            marginY=".5rem"
            padding={'1rem'}
            borderWidth="0.1px"
            borderColor="#f0f0f0"
            borderRadius={styles.borderRadius}
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.01 : 1})` }}
            transition="ease-in 0.2s"
            boxShadow="sm"
            _hover={{ bgColor: '#fafafa' }}
            height={height}
            {...props}
        >
            <Box d="flex" flex="3">
                <Image src={imgSrc} alt={imgAlt} objectFit="cover" borderRadius={styles.borderRadius} />
            </Box>
            <Box d="flex" flexDirection="column" flex="6" padding={'1rem'} justifyContent="flex-start">
                <Skeleton marginY={'.2rem'} borderRadius={styles} isLoaded={!skeleton}>
                    <Heading color={'#000'} fontSize="1.4rem" fontWeight="500">
                        {_.upperFirst(title)}
                    </Heading>
                </Skeleton>
                <Skeleton marginY={'.2rem'} isLoaded={!skeleton}>
                    <Text fontSize="1rem">{content.substr(0, 120)}...</Text>
                </Skeleton>
                <Skeleton marginY={'.2rem'} isLoaded={!skeleton}>
                    <Text fontSize=".7rem" color="gray.500" fontWeight="bold">
                        {date}
                    </Text>
                </Skeleton>
            </Box>
        </Box>
    );
};

export default PostCard;
