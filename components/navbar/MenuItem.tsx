import React from 'react';
import Link from 'next/link';
import { Box, Button, Text } from '@chakra-ui/react';

interface Props {
    to: string;
    isLast?: boolean;
}

const MenuItem: React.FC<Props> = ({ children, isLast = false, to = '/', ...rest }) => {
    return (
        <Box variant={'ghost'} as={Button}>
            <Link href={to}>
                <Text display="block" {...rest}>
                    {children}
                </Text>
            </Link>
        </Box>
    );
};

export default MenuItem;
