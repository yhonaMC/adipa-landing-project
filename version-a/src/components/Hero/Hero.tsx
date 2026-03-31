import type { HeroProps } from "./Hero.types";

const suggestionPills = [
  "Psicologia Clinica",
  "Neurociencias",
  "Psicologia Infantil",
  "Terapia de Pareja",
];

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section
      className={`bg-adipa-purple pt-[110px] desktop:pt-[170px] pb-16 desktop:pb-20 ${className}`}
    >
      <div className="max-w-container mx-auto px-5 tablet:px-10 text-center">
        <h1 className="text-white text-2xl tablet:text-4xl desktop:text-[36px] leading-tight desktop:leading-[48px] font-semibold mb-4">
          Formacion continua en{" "}
          <span className="font-bold uppercase">Psicologia y Salud Mental</span>
        </h1>
        <p className="text-white/80 text-base tablet:text-lg max-w-2xl mx-auto mb-8">
          Accede a cursos, diplomados y especializaciones dictados por
          profesionales de excelencia en Latinoamerica.
        </p>
        <a
          href="#cursos"
          className="inline-block bg-adipa-cyan text-white text-[17px] font-medium px-8 py-3 rounded-[5px] border border-adipa-cyan hover:brightness-110 transition-all duration-200 shadow-[0_4px_10px_rgba(44,183,255,.3)]"
        >
          Explorar cursos
        </a>
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {suggestionPills.map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 rounded-[7px] text-white text-sm bg-white/30 border border-white cursor-pointer hover:bg-white/50 transition-colors duration-200"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
