import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "~/components/navigation/navbar";
import { Footer } from "~/components/navigation/footer";
import { ScrollProgress } from "~/components/navigation/scroll-progress";
import { SearchModal } from "~/components/navigation/search-modal";
import { LoadingScreen } from "~/components/shared/loading-screen";
import { PageTransition } from "~/components/shared/page-transition";
import { SearchProvider } from "~/hooks/useSearchModal";
import { useLenis } from "~/hooks/useLenis";

export default function MainLayout() {
  const location = useLocation();
  useLenis();

  return (
    <HelmetProvider>
      <SearchProvider>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <SearchModal />
        <main id="main-content">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </SearchProvider>
    </HelmetProvider>
  );
}
