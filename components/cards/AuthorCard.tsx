import React from 'react';
import { Avatar, Box, BoxProps, Text } from '@chakra-ui/react';
import styles from '../../constants/styles';
import { PostAuthor } from '../../interfaces';

interface Props extends BoxProps {
    author: PostAuthor;
    avatarSize?: string;
}

const AuthorCard = ({ author, avatarSize = 'lg', ...props }: Props) => {
    return (
        <Box padding="1.2rem" textAlign="center" borderRadius={styles.borderRadius} {...props}>
            <Avatar name={author.name} size={avatarSize} src={author.avatar} />
            <Text fontWeight="600">{author.name}</Text>
        </Box>
    );
};

export default AuthorCard;
