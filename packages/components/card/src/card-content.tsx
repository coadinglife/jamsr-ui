import { useUIStyle } from "@jamsr-ui/core";
import { cn, type ComponentPropsWithAs } from "@jamsr-ui/utils";

export type CardContentProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T>;

export const CardContent = <T extends React.ElementType = "div">(
  props: CardContentProps<T>,
) => {
  const { as, className: $className, ...restProps } = props;
  const Component = as ?? "div";
  const { cardContent } = useUIStyle();
  const className = cn("p-4", cardContent?.className, $className);
  return <Component data-slot="content" className={className} {...restProps} />;
};
