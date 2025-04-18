import { Button } from "@jamsr-ui/button";
import { ChevronUpIcon, InfoIcon, SearchIcon } from "@jamsr-ui/shared-icons";
import { type Meta, type StoryObj } from "@storybook/react";
import { Menu, MenuItem } from "../src";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu",
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
  const handleClick = () => {
    alert("clicked undo");
  };

  return (
    <div className="flex justify-center">
      <Menu
        classNames={{
          popover: "min-w-[300px]",
        }}
        trigger={<Button endContent={<ChevronUpIcon />}>Open Me</Button>}
      >
        <MenuItem onClick={handleClick}>Undo</MenuItem>
        <MenuItem startContent={<InfoIcon className="size-5" />}>Info</MenuItem>
        <MenuItem
          startContent={
            <SearchIcon className="size-5 text-foreground-secondary" />
          }
          endContent={
            <div className="rounded bg-background p-0.5 text-xs text-foreground-secondary">
              Ctrl+K
            </div>
          }
        >
          Search
        </MenuItem>
        <MenuItem isDisabled>Redo</MenuItem>
        <MenuItem>Cut</MenuItem>
        <Menu trigger="Copy as">
          <MenuItem>Text</MenuItem>
          <MenuItem>Video</MenuItem>
          <MenuItem>Audio</MenuItem>
        </Menu>
        <Menu trigger="Share">
          <MenuItem>Mail</MenuItem>
          <MenuItem>Instagram</MenuItem>
        </Menu>
        <MenuItem isDisabled>Edit</MenuItem>
        <MenuItem className="data-[active=true]:bg-danger">Delete</MenuItem>
      </Menu>
    </div>
  );
};

export const Primary: Story = {
  render: Template,
};
