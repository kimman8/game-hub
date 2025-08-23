import { Button, HStack } from '@chakra-ui/react';

function App() {
  return (
    <HStack wrap="wrap" gap="6">
      <Button colorPalette="blue" size="xs">
        Button (xs)
      </Button>
      <Button size="sm">Button (sm)</Button>
      <Button size="md">Button (md)</Button>
      <Button size="lg">Button (lg)</Button>
      <Button size="xl">Button (xl)</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>
    </HStack>
  );
}

export default App;
