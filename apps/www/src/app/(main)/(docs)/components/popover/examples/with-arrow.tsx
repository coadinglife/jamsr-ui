import { IconButton, Popover, Text } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";

export const PopoverWithArrow = () => {
  return (
    <div className="grid place-content-center">
      <Popover
        trigger={
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        }
        className="p-2"
        showArrow
      >
        <Text as="p">This is a Popover content</Text>
      </Popover>
    </div>
  );
};
