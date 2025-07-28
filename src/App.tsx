import { useState } from "react";
import CustomModal from "./components/CustomModalSS";
import { CloseButton } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { IoIosClose } from "react-icons/io";

export default function ApprovalPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div style={{ padding: "20px" }}>
      <Button onClick={handleOpen} colorScheme="teal">
        Open Custom Modal
      </Button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={handleClose}
        header="My Modal Header"
        footer="My Modal Footer"
        width="50vw"
        isCentered
        scrollBehavior="inside"
        animationDuration="0.6s"
        overlayBlur="4px"
        backgroundColor="white"
        padding="6"
        hideOverlay={false}
        footerAlign="center"
        isResizable
        disableEscClose
        isDraggable
        showFullscreenToggle
        stickyHeader
        stickyFooter
        isLoading={false}
        variant="info"
        onBackdropClick={() => console.log("Backdrop clicked")}
        customCloseIcon={<IoIosClose />}

        // body={
        //   <div style={{ minHeight: '200px', padding: '20px' }}>
        //     <p>This is the modal content.</p>
        //     <p>You can add any components or content here.</p>
        //     <div style={{ marginTop: '20px' }}>
        //       <Button colorScheme="blue" size="sm">Sample Button</Button>
        //     </div>
        //   </div>
        // }
      />
    </div>
  );
}
