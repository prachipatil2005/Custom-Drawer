// CustomModal.tsx
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
  Spinner,
  Button,
} from "@chakra-ui/react";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

// Define the type for variants
const variantColors = {
  info: "blue.400",
  warning: "orange.400",
  error: "red.500",
  success: "green.500",
};

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
  disableEscClose?: boolean;
  isDraggable?: boolean;
  showFullscreenToggle?: boolean;
  stickyHeader?: boolean;
  stickyFooter?: boolean;
  customCloseIcon?: React.ReactNode;
  onBackdropClick?: () => void;
  isLoading?: boolean;
  variant?: keyof typeof variantColors;
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
  disableEscClose = false,
  isDraggable = false,
  showFullscreenToggle = false,
  stickyHeader = false,
  stickyFooter = false,
  customCloseIcon,
  onBackdropClick,
  isLoading = false,
  variant,
}: CustomModalProps): JSX.Element {
  const overlayClickEnabled = isResizable ? false : closeOnOverlayClick;
  const isLargeScreen = useBreakpointValue({ base: false, lg: true }) ?? false;
  const initialWidth = width || "65vw";
  const [drawerWidth, setDrawerWidth] = useState(initialWidth);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const modalBg = backgroundColor || useColorModeValue("white", "gray.700");
  const headerColor = variant ? variantColors[variant] : "teal.400";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !disableEscClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose, disableEscClose]);

  useEffect(() => {
    if (disableBodyScroll && isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (disableBodyScroll) document.body.style.overflow = "";
    };
  }, [isOpen, disableBodyScroll]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isResizable) return;
    e.preventDefault();
    const startX = e.clientX;
    const drawerElement = document.querySelector(
      ".customScrollBar"
    ) as HTMLElement;
    const startWidth =
      drawerElement?.getBoundingClientRect().width || parseInt(drawerWidth, 10);

    const convertVwToPx = (vw: string) =>
      window.innerWidth * (parseFloat(vw) / 100);
    const minWidthPx = initialWidth.endsWith("vw")
      ? convertVwToPx(initialWidth)
      : parseInt(initialWidth, 10);

    const doDrag = (dragEvent: MouseEvent) => {
      const deltaX = startX - dragEvent.clientX;
      let newWidth = startWidth + deltaX;
      const maxWidth = window.innerWidth - 100;
      newWidth = Math.max(minWidthPx, Math.min(maxWidth, newWidth));
      setDrawerWidth(`${newWidth}px`);
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", doDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if (!isDraggable) return;
    const modal = document.querySelector(".customScrollBar") as HTMLElement;
    const offsetX = e.clientX - modal.getBoundingClientRect().left;
    const offsetY = e.clientY - modal.getBoundingClientRect().top;

    const move = (event: MouseEvent) => {
      modal.style.top = `${event.clientY - offsetY}px`;
      modal.style.left = `${event.clientX - offsetX}px`;
      modal.style.position = "absolute";
    };

    const stop = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
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
          onClick={onBackdropClick}
        />
      )}
      <ModalContent
        position="fixed"
        right={isOpen ? "0" : `-${drawerWidth}`}
        top="0"
        height={isFullScreen ? "100vh" : "100vh"}
        width={isFullScreen ? "100vw" : isLargeScreen ? drawerWidth : "100vw"}
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

        {showFullscreenToggle && (
          <Button
            size="sm"
            onClick={() => setIsFullScreen((prev) => !prev)}
            position="absolute"
            top="4"
            right="12"
            zIndex="20"
          >
            {isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
          </Button>
        )}

        {header && (
          <ModalHeader
            fontSize={{ base: "md", lg: "xl" }}
            color={headerColor}
            fontWeight="700"
            position={stickyHeader ? "sticky" : "relative"}
            top="0"
            zIndex="10"
            bg={modalBg}
            onMouseDown={handleDragStart}
            style={{ cursor: isDraggable ? "move" : "default" }}
          >
            {header}
          </ModalHeader>
        )}

        {!disableCloseButton && (
          <Button>{customCloseIcon || undefined}</Button>
        )}

        <ModalBody p={padding}>
          {isLoading ? (
            <Spinner size="lg" color="teal.500" thickness="4px" />
          ) : (
            body
          )}
        </ModalBody>

        {footer && (
          <ModalFooter
            justifyContent={footerAlign}
            position={stickyFooter ? "sticky" : "relative"}
            bottom="0"
            zIndex="10"
            bg={modalBg}
          >
            {footer}
          </ModalFooter>
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
