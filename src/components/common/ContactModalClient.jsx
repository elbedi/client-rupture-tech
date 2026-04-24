import { useEffect, useState } from "react";
import FormContactModal from "@/components/ui/formContact.jsx";

export default function ContactModalClient() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleDocumentClick(event) {
      const trigger = event.target.closest('[data-open-contact-modal="true"]');
      if (!trigger) {
        return;
      }

      event.preventDefault();
      setIsOpen(true);
    }

    function handleOpenEvent() {
      setIsOpen(true);
    }

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("open-contact-modal", handleOpenEvent);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("open-contact-modal", handleOpenEvent);
    };
  }, []);

  return <FormContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
