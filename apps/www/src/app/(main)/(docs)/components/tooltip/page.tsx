import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { TooltipUsage } from "./examples/usage";
import { TooltipOffset } from "./examples/offset";
import { TooltipWithArrow } from "./examples/with-arrow";
import { TooltipRadius } from "./examples/radius";

const title = "Tooltip";
const description =
  "A Tooltip component provides a small pop-up box that appears when a user hovers over an element. It is typically used to provide additional information or context about a UI element without cluttering the interface.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["tooltip"][number]>(variant: T) =>
  readVariantCode("tooltip", variant);

const Tooltip = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <TooltipUsage />
      </VariantWrapper>
      <VariantWrapper heading="With Arrow" code={code("with-arrow")}>
        <TooltipWithArrow />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <TooltipRadius />
      </VariantWrapper>
      <VariantWrapper heading="Offset" code={code("offset")}>
        <TooltipOffset />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Tooltip;
