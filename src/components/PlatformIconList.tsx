import { Platform } from '@/hooks/useFetchGames';
import { HStack, Icon } from '@chakra-ui/react';
import { FaPlaystation } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';
import { FaLinux } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface PlatformIconListProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={IconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
