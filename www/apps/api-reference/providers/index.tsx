"use client"

import {
  AnalyticsProvider,
  ColorModeProvider,
  MobileProvider,
  ModalProvider,
  NavbarProvider,
  PageLoadingProvider,
} from "docs-ui"
import BaseSpecsProvider from "./base-specs"
import SidebarProvider from "./sidebar"
import { ScrollControllerProvider } from "../hooks/scroll-utils"
import SearchProvider from "./search"

type ProvidersProps = {
  children?: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AnalyticsProvider writeKey={process.env.NEXT_PUBLIC_SEGMENT_API_KEY}>
      <PageLoadingProvider>
        <ModalProvider>
          <ColorModeProvider>
            <BaseSpecsProvider>
              <SidebarProvider>
                <NavbarProvider>
                  <ScrollControllerProvider>
                    <SearchProvider>
                      <MobileProvider>{children}</MobileProvider>
                    </SearchProvider>
                  </ScrollControllerProvider>
                </NavbarProvider>
              </SidebarProvider>
            </BaseSpecsProvider>
          </ColorModeProvider>
        </ModalProvider>
      </PageLoadingProvider>
    </AnalyticsProvider>
  )
}

export default Providers
