import { useUIStyle } from "@jamsr-ui/core";
import { Typography } from "@jamsr-ui/typography";
import {
  cn,
  mergeClassNames,
  type ComponentPropsWithAs,
} from "@jamsr-ui/utils";

export type CardHeaderProps<T extends React.ElementType = "div"> =
  ComponentPropsWithAs<T> & {
    heading?: React.ReactNode;
    subHeading?: React.ReactNode;
    className?: string;
    gutterBottom?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    classNames?: {
      heading?: string;
      subHeading?: string;
      base?: string;
      innerWrapper?: string;
      startContent?: string;
      endContent?: string;
    };
  };

export const CardHeader = <T extends React.ElementType = "div">(
  props: CardHeaderProps<T>,
) => {
  const {
    as,
    heading,
    className,
    subHeading,
    gutterBottom,
    startContent,
    endContent,
    classNames: $classNames,
    ...restProps
  } = props;
  const Component = as ?? "div";

  const { cardHeader } = useUIStyle();
  const classNames = mergeClassNames(cardHeader?.classNames, $classNames);
  return (
    <Component
      data-slot="header"
      className={cn(
        "relative flex items-center gap-2 px-4 pt-4",
        { "pb-4": gutterBottom },
        cardHeader?.className,
        classNames?.base,
        className,
      )}
      {...restProps}
    >
      {startContent && (
        <div className={classNames?.startContent}>{startContent}</div>
      )}
      <div className={cn("grid grow gap-1", classNames?.innerWrapper)}>
        <Typography as="h3" variant="h6" className={classNames?.heading}>
          {heading}
        </Typography>
        {subHeading && (
          <Typography
            className={cn("text-foreground-secondary", classNames?.subHeading)}
            variant="caption"
            as="p"
          >
            {subHeading}
          </Typography>
        )}
      </div>
      {endContent && <div className={classNames?.endContent}>{endContent}</div>}
    </Component>
  );
};
