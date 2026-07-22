import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Page = "portfolio" | "hobbies" | "photos" | "media";

interface SiteNavProps {
  current: Page;
}

const pages: { id: Page; label: string; to: string }[] = [
  { id: "portfolio", label: "Portfolio", to: "/portfolio" },
  { id: "hobbies",   label: "Hobbies",   to: "/hobbies"   },
  { id: "photos",    label: "Photos",     to: "/photos"    },
  { id: "media",     label: "Media",      to: "/media"     },
];

const SiteNav = ({ current }: SiteNavProps) => (
  <nav className="p-4 md:p-6 flex justify-between items-center gap-2">
    {/* Left: back to Portfolio on sub-pages, empty spacer on Portfolio */}
    {current !== "portfolio" ? (
      <Link to="/portfolio">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-[#66666e]/50 transition-colors text-foreground/90 hover:text-[#cbf3f0]"
        >
          <ArrowLeft className="w-4 h-4 mr-1 md:mr-2" />
          <span className="hidden sm:inline">Portfolio</span>
        </Button>
      </Link>
    ) : (
      <div />
    )}

    <div className="flex gap-2">
      {pages.map(({ id, label, to }) =>
        id === current ? (
          <Button
            key={id}
            variant="outline"
            size="sm"
            disabled
            className="border-foreground/60 text-foreground/90 opacity-100 cursor-default"
          >
            {label}
          </Button>
        ) : (
          <Link key={id} to={to}>
            <Button
              variant="outline"
              size="sm"
              className="border-[#9999a1] text-foreground/90 hover:bg-[#66666e]/20 hover:text-[#cbf3f0]"
            >
              {label}
            </Button>
          </Link>
        )
      )}
    </div>
  </nav>
);

export default SiteNav;
