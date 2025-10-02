import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
