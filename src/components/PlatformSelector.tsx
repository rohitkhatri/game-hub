import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import PlatformSelectorSkeleton from './PlatformSelectorSkeleton';
import { Platform } from '../services/platform-service';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

export default function PlatformSelector({
  selectedPlatform,
  onSelectPlatform,
}: Props) {
  const { data, error, isLoading } = usePlatforms();

  if (isLoading) {
    return <PlatformSelectorSkeleton />;
  }

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
