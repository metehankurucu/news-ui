import React from 'react';
import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface Props extends ButtonProps {
    onClick?: () => void;
}

const ThemeToggler = ({ onClick = () => {}, ...props }: Props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    const onClickBtn = () => {
        toggleColorMode();
        onClick();
    };

    return (
        <Button variant="ghost" onClick={onClickBtn} {...props}>
            {colorMode == 'light' ? <FaMoon /> : <FaSun />}
        </Button>
    );
};

export default ThemeToggler;
