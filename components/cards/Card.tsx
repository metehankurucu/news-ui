import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import styles from '../../constants/styles';
import useColorTheme from '../../hooks/useColorTheme';

interface Props extends BoxProps {}

const Card = ({ children, ...props }: Props) => {
    const colors = useColorTheme();
    return (
        <Box
            paddingX="1rem"
            paddingY=".5rem"
            boxShadow="sm"
            borderWidth="0.1px"
            borderRadius={styles.borderRadius}
            {...props}
            backgroundColor={colors.background}
            borderColor={colors.border}
        >
            {children}
        </Box>
    );
};

export default Card;
