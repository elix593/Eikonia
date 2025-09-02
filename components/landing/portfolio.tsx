import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const portfolioItems = [
  { src: "https://picsum.photos/500/500", hint: "surreal landscape" },
  { src: "https://picsum.photos/500/501", hint: "sci-fi character" },
  { src: "https://picsum.photos/500/502", hint: "vintage poster" },
  { src: "https://picsum.photos/500/503", hint: "fantasy creature" },
];

const testimonials = [
  {
    name: "Cliente Satisfecho 1",
    avatar: "CS",
    text: "Eikonía transformó nuestra idea abstracta en una campaña visualmente impactante, superando todas nuestras expectativas.",
  },
  {
    name: "Cliente Satisfecho 2",
    avatar: "CS",
    text: "La consistencia y calidad cinematográfica de las imágenes que produjeron para nuestro storytelling de marca fue excepcional.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="container py-24 sm:py-32 bg-muted/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline">
          Así es como tu{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            visión cobra vida
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explora una selección de nuestros proyectos.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {portfolioItems.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={item.src}
              alt={`Portfolio item ${index + 1}`}
              data-ai-hint={item.hint}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="p-6 bg-card shadow-lg">
            <CardContent>
              <p className="text-lg">"{testimonial.text}"</p>
            </CardContent>
            <CardHeader className="flex flex-row items-center gap-4 pt-4 pb-0">
              <Avatar>
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base font-body font-bold">{testimonial.name}</CardTitle>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
