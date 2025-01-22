import { forwardType } from "@jamsr-ui/utils";
import { useLink, type UseLinkProps } from "./use-link";

export interface LinkProps extends UseLinkProps {}
export const Link = forwardType<"a", LinkProps>((props: LinkProps) => {
  const { Component, children, getLinkProps, globalChildren } = useLink(props);
  return (
    <Component {...getLinkProps()}>
      {globalChildren}
      {children}
    </Component>
  );
});

<>
  {/* <Link href="/" target="_blank" src="" />; */}
  <Link href="/" target="_blank" />
  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
  <Link as="img" src="" />
  <Link href="/" as="img" src="" alt="" />;
</>;
