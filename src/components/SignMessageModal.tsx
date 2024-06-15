import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Button from "./elements/Button";

interface Props {
  open: boolean;
  onSign: () => void;
  onClose: (value?: boolean) => void;
}

export default function SignMessageModal({ open, onClose, onSign }: Props) {
  return (
    <Transition appear show={open}>
      <Dialog
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 backdrop-blur-md">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-md rounded-xl bg-dark-purple p-6">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-white"
                >
                  Sign Message
                </DialogTitle>
                <p className="mt-2 text-sm/6 text-white/50">
                  You will now be redirected to your external wallet to sign and
                  approve the connection to WiLD Coin
                </p>
                <p className="mt-2 text-sm/6 text-white/50">
                  Would you like to continue?
                </p>
                <div className="mt-4">
                  <Button color="primary" variant="contained" onClick={onSign}>Continue</Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
