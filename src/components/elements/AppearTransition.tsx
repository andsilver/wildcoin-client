import { PropsWithChildren } from "react";
import { Transition } from "@headlessui/react";

export default function AppearTransition({ children }: PropsWithChildren) {
  return (
    <Transition
      appear
      show
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {children}
    </Transition>
  );
}
