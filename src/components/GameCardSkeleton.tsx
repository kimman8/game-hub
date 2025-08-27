import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText noOfLines={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
