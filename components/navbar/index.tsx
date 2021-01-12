import React from 'react';
import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import MenuToggle from './MenuToggle';
import Logo from '../Logo';
import MenuItem from './MenuItem';
import Link from 'next/link';
import styles from '../../constants/styles';
import DrawerMenu from './DrawerMenu';
import ThemeToggler from '../ThemeToggler';
import useColorTheme from '../../hooks/useColorTheme';
import { NAVBAR_LINKS } from '../../constants';

interface Props {}

const Navbar: React.FC<Props> = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const colors = useColorTheme();

    return (
        <Box margin={0} borderBottom="1px" borderColor={colors.border}>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                py={8}
                pl={2}
                pr={{ base: 4, md: 6 }}
                maxW={styles.mainMaxWidth}
                mx={'auto'}
            >
                <Button variant="ghost">
                    <Link href="/">
                        <Logo color={colors.primary} />
                    </Link>
                </Button>
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <Box display={{ base: 'none', md: 'flex' }} flexBasis={{ base: '100%', md: 'auto' }}>
                    <Stack
                        spacing={8}
                        align="center"
                        justify={['center', 'space-between', 'flex-end', 'flex-end']}
                        direction={['column', 'row', 'row', 'row']}
                        pt={[4, 4, 0, 0]}
                    >
                        {NAVBAR_LINKS.map(({ to, name }) => {
                            return (
                                <MenuItem color={colors.secondary} key={name} to={to}>
                                    {name}
                                </MenuItem>
                            );
                        })}
                    </Stack>
                    <ThemeToggler d={{ base: 'none', md: 'flex' }} />
                </Box>
                <DrawerMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {NAVBAR_LINKS.map(({ to, name }) => {
                        return (
                            <MenuItem w="100%" key={name} to={to} onClick={() => setIsOpen(false)}>
                                {name}
                            </MenuItem>
                        );
                    })}
                    <ThemeToggler onClick={() => setIsOpen(false)} w="100%" d={{ base: 'flex', md: 'none' }} />
                </DrawerMenu>
            </Flex>
        </Box>
    );
};

export default Navbar;
