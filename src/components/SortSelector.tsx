import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const [open, setOpen] = useState(false);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentOrder = sortOrders.find((order) => order.value === sortOrder);
  return (
    <Menu.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: {currentOrder?.label || "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((sort) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(sort.value)}
                value={sort.value}
                key={sort.value}
              >
                {sort.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
