import React from 'react';
import { Box, Text, Input, Button, Link, BoxProps } from '@chakra-ui/react';
import styles from '../constants/styles';
import Card from './cards/Card';

interface Props extends BoxProps {
    onSubmitForm: (email: string) => void;
}

const NewsletterForm = ({ onSubmitForm, ...props }: Props) => {
    return (
        <Card textAlign="center" {...props}>
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
        </Card>
    );
};

export default NewsletterForm;
