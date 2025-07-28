//---------------//
import React, { useEffect, useState, type JSX } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
  disableCloseButton?: boolean;
  isCentered?: boolean;
  closeOnOverlayClick?: boolean;
  animationDuration?: string;
  backgroundColor?: string;
  padding?: string;
  scrollBehavior?: "inside" | "outside";
  overlayBlur?: string;
  footerAlign?: "left" | "center" | "right";
  isResizable?: boolean;
  hideOverlay?: boolean;
  disableBodyScroll?: boolean;
};

export default function CustomModal({
  isOpen,
  onClose,
  header,
  body,
  footer,
  width,
  disableCloseButton = false,
  isCentered = true,
  closeOnOverlayClick = true,
  animationDuration = "0.4s",
  backgroundColor,
  padding = "4",
  scrollBehavior = "inside",
  overlayBlur = "0px",
  footerAlign = "right",
  isResizable = false,
  hideOverlay = false,
  disableBodyScroll = false,
}: CustomModalProps): JSX.Element {
  const overlayClickEnabled = isResizable ? false : closeOnOverlayClick;

  const isLargeScreen = useBreakpointValue({ base: false, lg: true }) ?? false;
  const initialWidth = width || "65vw";
  const [drawerWidth, setDrawerWidth] = useState(initialWidth);
  const modalBg = backgroundColor || useColorModeValue("white", "gray.700");
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
  if (disableBodyScroll && isOpen) {
    document.body.style.overflow = "hidden";
  }
  return () => {
    if (disableBodyScroll) document.body.style.overflow = "";
  };
}, [isOpen, disableBodyScroll]);

  // 🔧 Resizable drawer handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isResizable) return; // 🔥 disable drag logic if not resizable

    e.preventDefault();
    const startX = e.clientX;

    const drawerElement = document.querySelector(
      ".customScrollBar"
    ) as HTMLElement;
    const startWidth = drawerElement
      ? drawerElement.getBoundingClientRect().width
      : parseInt(drawerWidth as string, 10);

    const convertVwToPx = (vw: string) =>
      window.innerWidth * (parseFloat(vw) / 100);

    const minWidthPx = initialWidth.endsWith("vw")
      ? convertVwToPx(initialWidth)
      : parseInt(initialWidth, 10);

    const doDrag = (dragEvent: MouseEvent) => {
      const deltaX = startX - dragEvent.clientX;
      let newWidth = startWidth + deltaX;

      const maxWidth = window.innerWidth - 100;

      if (newWidth < minWidthPx) {
        newWidth = minWidthPx;
      } else if (newWidth > maxWidth) {
        newWidth = maxWidth;
      }

      setDrawerWidth(`${newWidth}px`);
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", doDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      isCentered={isCentered}
      closeOnOverlayClick={overlayClickEnabled}
      scrollBehavior={scrollBehavior}
      motionPreset="none"
    >
      {!hideOverlay && (
        <ModalOverlay
          bg="rgba(0, 0, 0, 0.4)"
          backdropFilter={`blur(${overlayBlur})`}
        />
      )}
      <ModalContent
        position="fixed"
        right={isOpen ? "0" : `-${drawerWidth}`}
        top="0"
        height="100vh"
        width={isLargeScreen ? drawerWidth : "100vw"}
        overflow="auto"
        className="customScrollBar"
        animation={`${
          isOpen ? "slideIn" : "slideOut"
        } ${animationDuration} ease-in-out forwards`}
        borderRadius="0"
        bg={modalBg}
        aria-label="custom modal"
        role="dialog"
      >
        {/* 🔧 Resizer handle */}
        {isResizable && (
          <Box
            position="absolute"
            left="0"
            top="0"
            bottom="0"
            width="5px"
            cursor="col-resize"
            onMouseDown={handleMouseDown}
            zIndex="10"
            _hover={{ bg: "gray.300" }}
          />
        )}

        {header && (
          <ModalHeader
            fontSize={{ base: "md", lg: "xl" }}
            color="teal.400"
            fontWeight="700"
          >
            {header}
          </ModalHeader>
        )}

        {!disableCloseButton && <ModalCloseButton />}

        <ModalBody p={padding}>{body}</ModalBody>

        {footer && (
          <ModalFooter justifyContent={footerAlign}>{footer}</ModalFooter>
        )}
      </ModalContent>

      <style>
        {`
          @keyframes slideIn {
            from { right: -${drawerWidth}; }
            to { right: 0; }
          }
          @keyframes slideOut {
            from { right: 0; }
            to { right: -${drawerWidth}; }
          }
        `}
      </style>
    </Modal>
  );
}
