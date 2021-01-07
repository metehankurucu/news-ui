import React from 'react';
import { Box, Text, Input, Button, Link } from '@chakra-ui/react';
import styles from '../constants/styles';

interface Props {
    onSubmit: (email: string) => void;
}

const NewsletterForm = (props: Props) => {
    return (
        <Box
            flex="1"
            margin="1rem"
            padding="1.2rem"
            textAlign="center"
            backgroundColor="#fbfbfb"
            borderRadius={styles.borderRadius}
        >
            <Text color="primary" fontWeight="bold" margin=".5rem">
                Subscribe Our Newsletter
            </Text>
            <Input variant="outline" placeholder="Your Email Address" borderRadius={'full'} margin=".5rem" />
            <Button bgColor="primary" color="#fff" borderRadius={'full'} width="100%" margin=".5rem">
                Subscribe
            </Button>
            <Text fontSize=".7rem" margin="3px">
                By subscribing, you agree to our{' '}
                <Link href="/privacy-policy" target="_blank" color="primary">
                    Privacy Policy
                </Link>
            </Text>
        </Box>
    );
};

export default NewsletterForm;
