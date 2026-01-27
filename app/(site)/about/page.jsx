import AboutCTA from "./AboutCTA";
import OurClients from "@/components/OurClients";
import AboutContent from "./AboutContent";
import { getClients } from "@/app/lib/data";

export default async function About() {
  const clients = await getClients();

  return (
    <>
      <AboutContent />
      <OurClients clients={clients} />
      <div className="py-20 bg-black">
        <AboutCTA />
      </div>
    </>
  );
}
