import * as React from "react";
import Layout from "@components/Layout/LayoutComponent";

const ServicesComponent = () => {
  return (
    <Layout
      name="services"
      className="flex items-center justify-center py-20 md:py-60 px-10 md:px-0"
    >
      <section className="w-full lg:w-3/4 lg:mx-auto">
        <h1 className="mb-16">Szolgáltatások</h1>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl">
              <span className="font-thin text-3xl text-gray-400 mr-4">01</span>
              Látványtervezés
            </h3>
            Opcionálisan választható kiegészítő szolgáltatás a belsőépítészeti
            tervezés vagy az egyedi bútortervezés szolgáltatások mellé. Beltéri
            látványtervezés az ingatlan főbb helyiségeiről, pontos textúrákkal,
            felületképzéssel, termék- és színhasználattal, valós
            fényviszonyoknak megfelelően.
          </div>

          <div>
            <h3 className="text-2xl">
              <span className="font-thin text-3xl text-gray-400 mr-4">02</span>
              Egyedi bútortervezés
            </h3>
            A megrendelő igényeinek és a helyiség adottságainak megfelelő és
            funkcionális bútorok tervezése, pontos felületképzés
            feltüntetésével, anyag- és termék kiírással. Asztalossal
            egyeztetett, személyreszabott esztétikus megoldások akár az ingatlan
            minden helyiségébea a tér optimális kihasználásval, a használóira
            pozitív élettani hatást kifejtve.
          </div>

          <div>
            <h3 className="text-2xl">
              <span className="font-thin text-3xl text-gray-400 mr-4">03</span>
              Belsőépítészeti tervezés
            </h3>
            Összetett, több ütemű tervezési folyamat, amiben minden fázis célja
            a megrendelő igényeinek megvalósítása, az ingatlan lehetőségeihez
            mérten a lehető leghatékonyabban, értéknövelő módon. A tervezés
            végeztével elkészül a szakágakkal egyeztetett teljes kiviteli
            tervdokumentáció, melyből akadálytalanul megvalósítható a
            végeredmény.
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesComponent;
