import { AnimatePresence, m } from "framer-motion";
import { useCollapsibleContext } from "./collapsible-context";

type Props = {
  children: React.ReactNode;
};

export const CollapsibleContent = (props: Props) => {
  const { children } = props;
  const { isOpen } = useCollapsibleContext();
  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};
