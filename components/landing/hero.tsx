'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-headline">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Eikonia:
            </span>{" "}
            El arte de convertir tu visión en imágenes con IA
          </h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Tu Director Creativo e Ingeniero de Prompts para la era de la inteligencia artificial.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" asChild>
            <Link href="#services">Explora nuestros servicios</Link>
          </Button>
          <Button variant="outline" className="w-full md:w-1/3" asChild>
             <Link href="#contact">Agenda una consulta</Link>
          </Button>
        </div>
      </div>

      <div className="lg:w-[500px] lg:h-[500px] hidden lg:flex justify-center items-center">
        {mounted ? (
          <Carousel className="w-full max-w-xs"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {[
                { src: "https://picsum.photos/400/500", hint: "cinematic portrait" },
                { src: "https://picsum.photos/400/501", hint: "abstract art" },
                { src: "https://picsum.photos/400/502", hint: "futuristic city" },
              ].map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-[4/5] items-center justify-center p-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.src}
                          alt={`Carousel image ${index + 1}`}
                          width={400}
                          height={500}
                          data-ai-hint={item.hint}
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : null}
      </div>
    </section>
  );
}
