'use client';
import { EikoniaLogo } from "@/components/icons";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CurrentYear() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (currentYear === null) {
    return null; // O un placeholder/spinner
  }

  return <>{currentYear}</>;
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <EikoniaLogo className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Tu Director Creativo e Ingeniero de Prompts para la era de la inteligencia artificial.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-1 lg:col-span-2">
            <div className="ml-auto">
              <h4 className="font-headline text-lg font-medium">Contacto</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="mailto:contacto@eikonia.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="h-4 w-4" /> contacto@eikonia.com</a></li>
                <li><a href="tel:+123456789" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="h-4 w-4" /> +1 (234) 567-89</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-lg font-medium">Redes</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><Instagram className="h-4 w-4" /> Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; <CurrentYear /> Eikonia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
