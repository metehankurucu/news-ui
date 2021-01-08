import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
import styles from '../../constants/styles';

interface Props extends BoxProps {}

const Card = ({ children, ...props }: Props) => {
    return (
        <Box
            paddingX="1rem"
            paddingY=".5rem"
            boxShadow="sm"
            borderWidth="0.1px"
            borderColor="#f0f0f0"
            backgroundColor="#fefefe"
            borderRadius={styles.borderRadius}
            {...props}
        >
            {children}
        </Box>
    );
};

export default Card;
