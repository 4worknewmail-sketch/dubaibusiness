import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xl font-bold">
            Seminant Business Setup & Auditing
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            End-to-end UAE setup and compliance. Onshore & free zones, visas,
            VAT/CT, accounting & audit, trademarks, and real-estate ops—with
            verified sources.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me//+971556496873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
            >
              <span className="sr-only">Chat on WhatsApp</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.06 2C8.84 2 3 7.73 3 14.83c0 3 .96 5.78 2.86 8.06L4 30l7.37-1.92c1.98 1.08 4.17 1.64 6.46 1.64 7.22 0 13.06-5.73 13.06-12.84S23.28 2 16.06 2Zm7.62 18.34c-.36 1.02-2.1 1.96-2.9 1.99-.75.03-1.68.04-2.72-.42-.63-.27-1.44-.46-2.48-.97-4.38-2.19-7.21-7.34-7.42-7.68-.22-.33-1.78-2.37-1.78-4.52 0-2.15 1.1-3.21 1.5-3.65.41-.44.9-.55 1.2-.55.3 0 .6.01.87.02.28.01.66-.11 1.03.78.36.89 1.22 3.08 1.33 3.3.11.22.18.48.03.78-.15.3-.22.49-.44.76-.22.27-.47.6-.67.81-.22.22-.45.45-.19.9.26.45 1.14 1.87 2.45 3.03 1.69 1.51 3.12 1.98 3.57 2.2.45.22.71.19.96-.11.26-.3 1.11-1.29 1.41-1.73.3-.44.6-.37.99-.22.39.15 2.5 1.18 2.92 1.39.41.22.68.33.78.51.1.18.1 1.05-.26 2.07Z" />
              </svg>
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
            <div>
              <div className="mb-2 font-semibold">Explore</div>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" to="/setup">
                    Business Setup
                  </Link>
                </li>
                <li className="inline-block">
                  <Link className="inline-block rounded px-1 py-0.5 hover:bg-accent hover:underline" to="/services">
                    Automation Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/why-middle-east">
                    Why Middle East
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold">Compliance & Tax</div>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:underline" to="/tax-legal">
                    VAT & Corporate Tax
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/compliance">
                    Work Permits (MOHRE)
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to="/compliance">
                    Ejari & DLD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © 2025 Seminant Business Setup & Auditing. All rights reserved to Seminant Solutions.
      </div>
    </footer>
  );
}
