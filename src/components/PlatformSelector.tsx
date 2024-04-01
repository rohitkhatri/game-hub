import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import PlatformSelectorSkeleton from './PlatformSelectorSkeleton';

export default function PlatformSelector() {
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
        Platofm
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
