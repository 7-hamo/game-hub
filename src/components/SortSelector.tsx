import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
const SortSelector = () => {
  const [open, setOpen] = useState(false);
  return (
    <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Sort
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rel">Rel</Menu.Item>
            <Menu.Item value="sim">Sim</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
