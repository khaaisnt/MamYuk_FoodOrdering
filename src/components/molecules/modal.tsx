"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "trixl" | "full";
  disableOutsideClick?: boolean;
  className?: string;
  footer?: ReactNode;
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
  variant?: "default" | "gradient";
  showCloseButton?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = "md",
  disableOutsideClick = false,
  className = "",
  footer,
  variant = "default",
  showCloseButton = true,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (!disableOutsideClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: "max-w-sm max-h-screen md:h-auto",
    md: "max-w-md max-h-screen md:h-auto",
    lg: "max-w-lg max-h-screen md:h-auto",
    xl: "max-w-3xl max-h-screen md:h-auto",
    trixl: "max-w-5xl max-h-screen md:h-auto",
    full: "max-w-full mx-4 sm:mx-6 md:mx-8 my-8",
  };

  const getCardBackgroundStyle = () => {
    if (variant === "gradient") {
      return {
        backgroundImage: "url('/images/background-modal.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }
    return {};
  };

  if (!isMounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto py-10 px-4 transition-opacity duration-300 ease-in-out bg-black/50"
      style={{
        opacity: isAnimating ? 1 : 0,
      }}
      onClick={handleOutsideClick}
    >
      <div className="min-h-[calc(100vh-5rem)] py-6 flex flex-col justify-center items-center w-full relative z-10">
        <div
          className={`bg-white rounded-2xl w-full ${
            sizeClasses[size]
          } flex flex-col ${className}${
            size === "full" ? " max-h-[calc(100vh-8rem)]" : ""
          } transition-all duration-300 ease-in-out shadow-2xl relative`}
          style={{
            transform: isAnimating ? "scale(1)" : "scale(0.9)",
            opacity: isAnimating ? 1 : 0,
            ...(variant === "gradient" ? getCardBackgroundStyle() : {}),
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-1 rounded-full border-2 border-gray-500 hover:border-gray-700 transition-colors duration-200 group cursor-pointer"
              aria-label="Close modal"
            >
              <X
                size={16}
                className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200"
              />
            </button>
          )}

          {/* Modal Content*/}
          <div className="relative z-10 p-6 flex flex-col max-h-screen">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {(title || subtitle) && (
                  <div className="pr-10">
                    <div className="flex items-center">
                      {title && (
                        <h3
                          id="modal-title"
                          className={`text-xl sm:text-[26px] font-medium ${
                            variant === "gradient" ? "text-gray-800" : ""
                          }`}
                        >
                          {title}
                        </h3>
                      )}
                    </div>
                    {subtitle && (
                      <p
                        className={`text-sm md:text-base mt-1 ${
                          variant === "gradient"
                            ? "text-gray-600"
                            : "text-gray-500"
                        }`}
                      >
                        {subtitle}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="py-4 px-1 grow overflow-x-auto">{children}</div>

            {/* Modal Footer */}
            {footer && (
              <div className="pt-2 flex justify-end space-x-2">{footer}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;
