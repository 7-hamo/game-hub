import usePlatform from "@/hooks/usePlatforms";
import { Button, Code, Menu, Portal, Stack } from "@chakra-ui/react";
import { useState } from "react";

const PlatformSelector = () => {
  const [open, setOpen] = useState(false);
  const { data, errors } = usePlatform();

  if (errors) return null;
  return (
    <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Menu.Trigger asChild>
        <Button marginBottom={1} variant="outline" size="sm">
          Platforms
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item value={platform.slug} key={platform.id}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default PlatformSelector;
