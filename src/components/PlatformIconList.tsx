import { HStack, Icon } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { GamePlatform } from '../services/game-service';

interface Props {
  platforms: GamePlatform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  android: FaAndroid,
  linux: FaLinux,
  nintendo: SiNintendo,
  iphone: MdPhoneIphone,
  web: BsGlobe,
};

export default function PlatformIconList({ platforms }: Props) {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon color="gray.500" as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
}
