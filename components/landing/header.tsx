import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EikoniaLogo } from "@/components/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <EikoniaLogo className="h-7 w-auto" />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="#contact">Agenda una consulta</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
