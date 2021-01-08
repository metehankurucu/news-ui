import React from 'react';
import { Avatar, Box, BoxProps, Text } from '@chakra-ui/react';
import styles from '../../constants/styles';

interface Props extends BoxProps {
    avatarSrc: string;
    avatarName: string;
    avatarSize?: string;
}

const AuthorCard = ({ avatarSrc, avatarName, avatarSize = 'lg', ...props }: Props) => {
    return (
        <Box padding="1.2rem" textAlign="center" borderRadius={styles.borderRadius} {...props}>
            <Avatar name={avatarName} size={avatarSize} src={avatarSrc} />
            <Text fontWeight="600">{avatarName}</Text>
        </Box>
    );
};

export default AuthorCard;
