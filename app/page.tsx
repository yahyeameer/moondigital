import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Work } from "@/components/home/Work";
import { Contact } from "@/components/home/Contact";
import { AIChatBubble } from "@/components/ui/AIChatBubble";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <Work />
      <Contact />
      <AIChatBubble />
    </div>
  );
}
