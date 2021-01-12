import { Box, IconButton, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import React, { ReactElement } from 'react';
import Card from './Card';

type SocialMedia = 'facebook' | 'twitter' | 'youtube' | 'instagram' | 'linkedin';

type SocialMediaItem = {
    platform: SocialMedia;
    icon: ReactElement;
};

const socialMedias: SocialMediaItem[] = [
    {
        platform: 'facebook',
        icon: <FaFacebook />,
    },
    {
        platform: 'twitter',
        icon: <FaTwitter />,
    },
    {
        platform: 'linkedin',
        icon: <FaLinkedin />,
    },
    {
        platform: 'youtube',
        icon: <FaYoutube />,
    },
    {
        platform: 'instagram',
        icon: <FaInstagram />,
    },
];

interface Props {
    title: string;
    facebook?: boolean;
    linkedin?: boolean;
    twitter?: boolean;
    instagram?: boolean;
    youtube?: boolean;
    onClick: (platform: SocialMedia) => void;
}

const SocialCard = ({ title, onClick, ...props }: Props) => {
    return (
        <Card flex="1" textAlign="center">
            <Text color="primary" fontWeight="bold" marginBottom="1rem">
                {title}
            </Text>
            <Box d="flex" flexWrap="wrap" justifyContent="space-around" paddingBottom={'.3rem'}>
                {socialMedias.map(({ platform, icon }) => {
                    if (!props[platform]) return null;
                    return (
                        <IconButton
                            key={platform}
                            colorScheme={platform}
                            aria-label={platform}
                            icon={icon}
                            onClick={() => onClick(platform)}
                        />
                    );
                })}
            </Box>
        </Card>
    );
};

export default SocialCard;
