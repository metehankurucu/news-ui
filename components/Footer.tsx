import React from 'react';
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../constants/styles';
import Logo from './Logo';

const links = [
    {
        heading: 'Discover',
        links: [
            { href: '/', title: 'Home' },
            { href: '/', title: 'Magazine' },
            { href: '/', title: 'Sports' },
            { href: '/', title: 'Economy' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { href: '/', title: 'About' },
            { href: '/', title: 'Services' },
            { href: '/', title: 'Blog' },
            { href: '/', title: 'Career' },
        ],
    },
    {
        heading: 'Social',
        links: [
            { href: '/', title: 'LinkedIn' },
            { href: '/', title: 'Facebook' },
            { href: '/', title: 'Twitter' },
            { href: '/', title: 'Instagram' },
        ],
    },
];

const bottomLinks = [
    { href: '/', title: 'Terms Of Use' },
    { href: '/', title: 'Privacy Policy' },
];

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <Box
            as="footer"
            margin={0}
            borderTop="1px"
            borderColor="gray.200"
            boxShadow="lg"
            paddingX={{ base: '.4rem', md: '1rem' }}
            paddingBottom={'2rem'}
            paddingTop="2.4rem"
            color="#fff"
            bgColor="secondary"
        >
            <Box maxW={styles.mainMaxWidth} p={'1.5rem'} mx={'auto'}>
                <Flex
                    justify="space-between"
                    wrap="wrap"
                    w="100%"
                    bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Flex flex="2" justifyContent="left" mx="1rem">
                        <Box alignItems="center">
                            <Box padding={'2px'} _hover={{ textDecoration: 'underline' }} cursor="pointer">
                                <Link href="/">
                                    <Logo />
                                </Link>
                            </Box>

                            <Box color="gray.400" fontSize=".85em" mx={'3px'}>
                                <Text>(916) 728-5682 989</Text>
                                <Text>Vintage Oak Ave Galt</Text>
                                <Text>California(CA), 95632</Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex flex="3" direction={{ base: 'column', md: 'row' }}>
                        {links.map((link) => {
                            return (
                                <Box
                                    key={link.heading}
                                    justifyContent="center"
                                    height="100%"
                                    margin="10px"
                                    flex="1"
                                    marginX={{ base: '1.4rem', md: '2rem' }}
                                >
                                    <Box textAlign="left">
                                        <Text fontWeight="bold">{link.heading}</Text>
                                        {link.links.map(({ href, title }) => {
                                            return (
                                                <Link key={title} href={href}>
                                                    <Text
                                                        margin="2px"
                                                        fontSize={'.95rem'}
                                                        cursor="pointer"
                                                        color={'gray.400'}
                                                        _hover={{ textDecoration: 'underline' }}
                                                    >
                                                        {title}
                                                    </Text>
                                                </Link>
                                            );
                                        })}
                                    </Box>
                                </Box>
                            );
                        })}
                    </Flex>
                </Flex>
                <Divider width={'90%'} mx="auto" marginY={'1.6rem'} />
                <Flex justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row' }} marginX=".5rem">
                    <Text fontSize={'.9rem'} color="gray.400">
                        © 2021 Modern News Inc.
                    </Text>
                    <Flex>
                        {bottomLinks.map(({ href, title }) => {
                            return (
                                <Link key={title} href={href}>
                                    <Text
                                        margin=".3rem"
                                        fontSize={'.85rem'}
                                        cursor="pointer"
                                        _hover={{ textDecoration: 'underline' }}
                                    >
                                        {title}
                                    </Text>
                                </Link>
                            );
                        })}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
