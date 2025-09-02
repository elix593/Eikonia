import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Film, Layers, Rocket } from "lucide-react";
import React from "react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Creación de Fotografías",
    description: "Creamos imágenes desde cero, sin necesidad de referencias, para una estética completamente original. Ideal para campañas que exigen autenticidad superior.",
    icon: <Wand2 />,
  },
  {
    title: "Guion Fotográfico Consistente",
    description: "Producimos series fotográficas que narran una historia continua, asegurando la cohesión de personajes, vestimenta y elementos cruciales.",
    icon: <Film />,
  },
  {
    title: "Universo Visual Consistente",
    description: "Aseguramos la continuidad de atmósfera, iluminación y estilo visual, creando un universo de marca único e inconfundible.",
    icon: <Layers />,
  },
  {
    title: "Elevación Narrativa de Fotografías",
    description: "Transformamos una imagen existente en una obra con profunda narrativa y emoción, inyectando un nivel de producción cinematográfica.",
    icon: <Rocket />,
  },
];

export function Services() {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline">
          Servicios a la medida de{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            tu creatividad
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Descubre cómo podemos llevar tus ideas al siguiente nivel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {serviceList.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center p-6 bg-card hover:bg-muted/50 transition-colors shadow-lg">
            <CardHeader>
              <div className="mb-4 text-primary mx-auto">
                {React.cloneElement(service.icon, { className: "w-12 h-12" })}
              </div>
              <CardTitle className="font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardDescription className="text-base">
              {service.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
