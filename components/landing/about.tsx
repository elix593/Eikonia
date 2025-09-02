import Image from "next/image";

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-card border rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-headline">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Sobre{" "}
              </span>
              Nosotros
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              Somos Eikonia, un estudio de inteligencia artificial especializado en Estrategia Visual. Operamos como tu Director Creativo e Ingeniero de Prompts personal, transformando ideas abstractas en instrucciones técnicas precisas para modelos de IA generativa de imágenes.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              No solo generamos imágenes, creamos mundos. Nuestra experiencia técnica y visión creativa garantizan que tu idea se traduzca de forma perfecta, sin perder su esencia.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/600/400"
              alt="About Eikonia"
              data-ai-hint="creative studio"
              width={600}
              height={400}
              className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
