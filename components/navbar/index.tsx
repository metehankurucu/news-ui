import React from 'react';
import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import MenuToggle from './MenuToggle';
import Logo from '../Logo';
import MenuItem from './MenuItem';
import Link from 'next/link';
import styles from '../../constants/styles';

interface Props {}

const Navbar: React.FC<Props> = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Box margin={0} borderBottom="1px" borderColor="gray.200">
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                p={8}
                maxW={styles.mainMaxWidth}
                mx={'auto'}
                bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
            >
                <Button variant="ghost">
                    <Link href="/">
                        <Logo color={'primary'} />
                    </Link>
                </Button>
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <Box display={{ base: 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
                    <Stack
                        spacing={8}
                        align="center"
                        justify={['center', 'space-between', 'flex-end', 'flex-end']}
                        direction={['column', 'row', 'row', 'row']}
                        pt={[4, 4, 0, 0]}
                    >
                        <MenuItem to="/">Home</MenuItem>
                        <MenuItem to="#">Magazine</MenuItem>
                        <MenuItem to="#">Sports</MenuItem>
                        <MenuItem to="#">Economy</MenuItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;
