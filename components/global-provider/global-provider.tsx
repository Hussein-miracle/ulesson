'use client'
import { ChakraProvider } from '@chakra-ui/react'

function GlobalProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}

export default GlobalProvider;