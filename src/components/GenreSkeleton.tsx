import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GenreSkeleton() {
  return (
    <ListItem paddingY="5px">
      <HStack>
        <Skeleton boxSize="32px" borderRadius={10} />
        <SkeletonText fontSize="large" noOfLines={1} skeletonHeight="15px">
          Genre Title
        </SkeletonText>
      </HStack>
    </ListItem>
  );
}
