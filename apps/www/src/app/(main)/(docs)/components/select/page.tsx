import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { SelectControlled } from "./examples/controlled";
import { SelectCustomRenderComplex } from "./examples/custom-render-complex";
import { SelectCustomRenderMulti } from "./examples/custom-render-multi";
import { SelectCustomRenderValue } from "./examples/custom-render-value";
import { SelectUsage } from "./examples/usage";
import { SelectInvalidState } from "./examples/invalid-state";
import { SelectMultiple } from "./examples/multiple";
import { SelectMultipleControlled } from "./examples/multiple-controlled";
import { SelectPlaceholder } from "./examples/placeholder";
import { SelectSizes } from "./examples/sizes";
import { SelectStartEndItems } from "./examples/start-end-items";
import { SelectWithHelperText } from "./examples/with-helper-text";
import { SelectWithoutLabel } from "./examples/without-label";
import { SelectDisabled } from "./examples/disabled";

export const metadata: Metadata = {
  title: "Select",
};

const code = <T extends VariantTypes["select"][number]>(variant: T) =>
  readVariantCode("select", variant);

const Select = () => {
  return (
    <VariantPage heading="Select">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <SelectUsage />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <SelectControlled />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <SelectDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Start End Items" code={code("start-end-items")}>
        <SelectStartEndItems />
      </VariantWrapper>
      <VariantWrapper heading="Placeholder" code={code("placeholder")}>
        <SelectPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Without Label" code={code("without-label")}>
        <SelectWithoutLabel />
      </VariantWrapper>
      <VariantWrapper
        heading="With Helper Text"
        code={code("with-helper-text")}
      >
        <SelectWithHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State" code={code("invalid-state")}>
        <SelectInvalidState />
      </VariantWrapper>
      <VariantWrapper heading="Sizes" code={code("sizes")}>
        <SelectSizes />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Render Value"
        code={code("custom-render-value")}
      >
        <SelectCustomRenderValue />
      </VariantWrapper>
      <VariantWrapper heading="Multiple" code={code("multiple")}>
        <SelectMultiple />
      </VariantWrapper>
      <VariantWrapper
        heading="Multiple Controlled"
        code={code("multiple-controlled")}
      >
        <SelectMultipleControlled />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Render Complex"
        code={code("custom-render-complex")}
      >
        <SelectCustomRenderComplex />
      </VariantWrapper>
      <VariantWrapper
        heading="Custom Render Multi"
        code={code("custom-render-multi")}
      >
        <SelectCustomRenderMulti />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Select;
