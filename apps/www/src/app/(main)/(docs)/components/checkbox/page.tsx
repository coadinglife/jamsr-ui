import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CheckboxControlled } from "./examples/controlled";
import { CheckboxDisabled } from "./examples/disabled";
import { CheckboxInvalidState } from "./examples/invalid-state";
import { CheckboxRadius } from "./examples/radius";
import { CheckboxReadonly } from "./examples/readonly";
import { CheckboxUsage } from "./examples/usage";
import { CheckboxDescription } from "./examples/description";

const title = "Checkbox";
const description =
  "Checkboxes enable users to select multiple items from a list or to indicate a single item as selected.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["checkbox"][number]>(variant: T) =>
  readVariantCode("checkbox", variant);

const Checkbox = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <CheckboxUsage />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <CheckboxControlled />
      </VariantWrapper>
      <VariantWrapper heading="Readonly" code={code("readonly")}>
        <CheckboxReadonly />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <CheckboxDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <CheckboxRadius />
      </VariantWrapper>
      <VariantWrapper heading="Description" code={code("description")}>
        <CheckboxDescription />
      </VariantWrapper>
      <VariantWrapper heading="Invalid State" code={code("invalid-state")}>
        <CheckboxInvalidState />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Checkbox;
