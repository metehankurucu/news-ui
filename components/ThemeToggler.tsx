import React from 'react';
import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface Props extends ButtonProps {}

const ThemeToggler = ({ ...props }: Props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Button variant="ghost" onClick={toggleColorMode} {...props}>
            {colorMode == 'light' ? <FaMoon /> : <FaSun />}
        </Button>
    );
};

export default ThemeToggler;
