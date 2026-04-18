import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Consultants } from "@/components/Consultants";
import { Process } from "@/components/Process";
import { Stories } from "@/components/Stories";
import { Contact } from "@/components/Contact";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const services = await prisma.medicalService.findMany({
    orderBy: { order: "asc" },
  });

  const consultants = await prisma.consultant.findMany({
    orderBy: { order: "asc" },
  });

  const processSteps = await prisma.processStep.findMany({
    orderBy: { step: "asc" },
  });

  const patientStories = await prisma.patientStory.findMany({
    where: { featured: true },
    take: 3,
  });

  return (
    <>
      <Hero />
      <About />
      <Services services={services} />
      <Consultants consultants={consultants} />
      <Process steps={processSteps} />
      <Stories stories={patientStories} />
      <Contact />
    </>
  );
}
