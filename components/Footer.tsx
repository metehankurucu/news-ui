import React from 'react';
import { Box, Divider, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../constants/styles';
import Logo from './Logo';
import useColorTheme from '../hooks/useColorTheme';
import { FOOTER_LINKS, FOOTER_BOTTOM_LINKS } from '../constants';

interface Props {}

const Footer: React.FC<Props> = () => {
    const colors = useColorTheme();
    const bg = useColorModeValue(colors.secondary, colors.background);
    return (
        <Box
            as="footer"
            margin={0}
            borderTop="1px"
            borderColor={colors.border}
            boxShadow="lg"
            paddingX={{ base: '.4rem', md: '1rem' }}
            paddingBottom={'2rem'}
            paddingTop="2.4rem"
            color={colors.white}
            bgColor={bg}
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

                            <Box color={colors.white} fontSize=".85em" mx={'3px'}>
                                <Text>(916) 728-5682 989</Text>
                                <Text>Vintage Oak Ave Galt</Text>
                                <Text>California(CA), 95632</Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Flex flex="3" direction={{ base: 'column', md: 'row' }}>
                        {FOOTER_LINKS.map((link) => {
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
                                                        color={colors.white}
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
                        {FOOTER_BOTTOM_LINKS.map(({ href, title }) => {
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
