import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  // Add your theme customizations here
  // Example:
  // colors: {
  //   brand: {
  //     900: '#1a365d',
  //     800: '#153e75',
  //     700: '#2a69ac',
  //   },
  // },
});

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
} 