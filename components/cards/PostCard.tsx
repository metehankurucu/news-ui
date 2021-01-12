import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
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

type FlexDirection = 'row' | 'column' | undefined;

const PostCard = ({
    post,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    return (
        <Card
            p={4}
            justifyContent="flex-start"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.01 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            marginY=".5rem"
            display="flex"
            {...props}
            flexDirection={flexDirection}
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
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"
                    color={colors.primary}
                >
                    {post.category}
                </Text>
                <Text
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                    color={colors.secondary}
                >
                    {_.upperFirst(post.title)}
                </Text>
                <Text mt={2} color="gray.500">
                    {post.content.substr(0, 120)}
                    {post.content.length > 120 ? '...' : ''}
                </Text>
            </Box>
        </Card>
    );
};

export default PostCard;
