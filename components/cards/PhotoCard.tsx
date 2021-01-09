import React, { useState } from 'react';
import { Box, BoxProps, Heading } from '@chakra-ui/react';
import styles from '../../constants/styles';
import Image from '../Image';

interface Props extends BoxProps {
    boxSize?: number | string;
    imgSrc: string;
    alt: string;
    title: string;
    imgBorderRadius?: number;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PhotoCard: React.FC<Props> = ({
    alt,
    title,
    imgSrc,
    onClick,
    boxSize = '100%',
    imgBorderRadius = styles.borderRadius,
    ...rest
}) => {
    const [hover, setHover] = useState(false);
    return (
        <Box
            cursor="pointer"
            onClick={onClick}
            position="relative"
            flexDirection="column"
            flex={1}
            style={{ transform: `scale(${hover ? 1.01 : 1})` }}
            transition="ease-in 0.2s"
            display="flex"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...rest}
        >
            <Image
                objectFit="cover"
                borderRadius={imgBorderRadius}
                boxSize={boxSize}
                src={imgSrc}
                alt={alt}
                maxHeight={rest.maxHeight}
            />
            <Heading
                fontSize="1.1rem"
                transition="ease-in 0.15s"
                position="absolute"
                bottom="30px"
                left="30px"
                color="light"
            >
                {title.toUpperCase()}
            </Heading>
        </Box>
    );
};

export default PhotoCard;
