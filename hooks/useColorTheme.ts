import { useColorModeValue } from '@chakra-ui/react';
import theme, { colors } from '../styles/theme';

const useColorTheme = () => {
    const light = useColorModeValue(colors.light.light, colors.light.dark);
    const border = useColorModeValue(colors.border.light, colors.border.dark);
    const defaultColor = useColorModeValue(colors.default.light, colors.default.dark);
    const secondary = useColorModeValue(colors.secondary.light, colors.secondary.dark);
    const background = useColorModeValue(colors.background.light, colors.background.dark);

    return {
        ...theme.colors,
        light,
        border,
        secondary,
        background,
        default: defaultColor,
    };
};

export default useColorTheme;
