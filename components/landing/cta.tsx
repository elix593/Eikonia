import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <Card className="bg-muted/50 shadow-lg">
        <CardHeader className="p-8 md:p-12 lg:p-20 text-center">
          <CardTitle className="text-3xl md:text-4xl font-headline">
            ¿Listo para dar vida a tu próximo gran proyecto?
          </CardTitle>
          <CardDescription className="text-lg mt-4">
            Contacta con nosotros para una consulta gratuita y descubre cómo Eikonía puede elevar tu marca.
          </CardDescription>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="mailto:contacto@eikonia.com">Hablemos de tu proyecto</Link>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </section>
  );
}
