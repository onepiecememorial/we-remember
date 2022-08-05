import { useCallback, useContext, useEffect, useRef } from 'react';
import { ModalContext } from './ModalContext';
import { ModalContent, ModalWrapper } from './styles';

const Modal = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { content, closeModal } = useContext(ModalContext);

  const handleCloseModal = useCallback((ev: Event) => {
    if (ev.target === wrapperRef.current) {
      closeModal();
    }
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('click', handleCloseModal);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('click', handleCloseModal);
      }
    };
  }, [content]);

  return content ? (
    <ModalWrapper ref={wrapperRef}>
      <ModalContent>{content}</ModalContent>
    </ModalWrapper>
  ) : null;
};

export default Modal;
