"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  type DialogProps,
  Repeater,
  Text,
} from "@jamsr-ui/react";

const DialogItem = (
  props: Partial<DialogProps> & {
    buttonText?: string;
  },
) => {
  const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
  const { buttonText, ...restProps } = props;
  return (
    <div>
      <Button onClick={onOpen}>{buttonText}</Button>
      <Dialog isOpen={isOpen} onOpenChange={setIsOpen} {...restProps}>
        <DialogContent>
          <DialogHeader>Heading</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Text as="h3">Im am dialog Body</Text>
            <Repeater repeat={2}>
              <Text as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos corrupti est quos asperiores libero maiores amet non
                obcaecati odio excepturi illo recusandae tenetur, qui earum
                dolorem minus, quibusdam optio? Cum.
              </Text>
            </Repeater>
          </DialogBody>
          <DialogFooter>
            <Button variant="light" onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={onClose} color="primary">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const DialogBackdrop = () => {
  const backdrops: NonNullable<DialogProps["backdrop"]>[] = [
    "transparent",
    "opaque",
    "blur",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {backdrops.map((backdrop) => (
        <DialogItem
          buttonText={`backdrop ${backdrop}`}
          key={backdrop}
          backdrop={backdrop}
        />
      ))}
    </div>
  );
};
