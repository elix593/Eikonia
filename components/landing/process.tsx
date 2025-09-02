import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Consulta",
    description: "Empezamos con una sesión de brainstorming donde capturamos tu visión creativa.",
  },
  {
    number: "02",
    title: "Estrategia",
    description: "Creamos un guion visual detallado para asegurar la precisión y coherencia narrativa.",
  },
  {
    number: "03",
    title: "Creación",
    description: "Generamos las imágenes, iterando contigo para perfeccionar cada detalle hasta el final.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Recibes las imágenes listas para usar, perfectamente alineadas con tu proyecto.",
  },
];

export function Process() {
  return (
    <section id="process" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-headline">
        Tu idea,{" "}
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          nuestra magia
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-16 text-lg text-muted-foreground">
        Tú te enfocas en la creatividad, nosotros nos encargamos de la ejecución técnica con un proceso simple y colaborativo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <Card key={step.title} className="bg-card shadow-lg">
            <CardHeader className="flex items-start">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 text-2xl font-bold text-primary border-2 border-primary rounded-full">
                  {step.number}
                </div>
                <CardTitle className="text-start font-headline">{step.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-start">
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
