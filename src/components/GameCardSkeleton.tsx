import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

export default function GameCardSkeleton() {
  return (
    <Card width="100%" border={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
