import { cn, type ComponentPropsWithAs, dataAttr } from "@jamsr-ui/utils";
import { useSidebarContext } from "./sidebar-context";

export type SidebarMenuItemButtonProps<T extends React.ElementType = "button"> =
  ComponentPropsWithAs<T> & {
    isDisabled?: boolean;
  };

export const SidebarMenuItemButton = <T extends React.ElementType = "button">(
  props: SidebarMenuItemButtonProps<T>,
) => {
  const {
    children,
    className: $className,
    isDisabled = false,
    disabled: $disabled,
    as,
    ...restProps
  } = props;
  const { styles, classNames } = useSidebarContext();
  const className = styles.menuItemButton({
    className: cn(classNames?.menuItemButton, $className),
  });
  const disabled = isDisabled || $disabled;
  const Component = as ?? "button";
  return (
    <Component
      type="button"
      data-slot="menuItemButton"
      className={className}
      disabled={disabled}
      data-disabled={dataAttr(disabled)}
      aria-disabled={dataAttr(disabled)}
      {...restProps}
    >
      {children}
    </Component>
  );
};
