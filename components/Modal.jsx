import { Dialog } from '@shadcn/ui';

function Modal({ isOpen, children, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
      <Dialog.Content className="fixed p-4 bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </Dialog.Content>
    </Dialog>
  );
}

export default Modal;
