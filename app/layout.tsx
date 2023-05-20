"use client"
import '@fontsource/inter/400.css'
import '@fontsource/work-sans/700.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import WithSubnavigation from "@/components/Navbar"
import SmallWithSocial from "@/components/Footer"

const theme = extendTheme({
  fonts: {
    heading: `'Work Sans', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <title>Avner&apos;s ELL Portfolio</title>
      <head />

      <body>
        <ChakraProvider theme={theme}>
          <div>
            <WithSubnavigation />
            {children}
            <SmallWithSocial/>
          </div>
        </ChakraProvider>
      </body>
    </html>
  )
}