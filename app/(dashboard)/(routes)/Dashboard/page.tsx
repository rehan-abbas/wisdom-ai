"use client";

import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "conversation",
    icon: MessageSquare,
    color: "text-neutral-900",

    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-neutral-900",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-neutral-900",
  },
  {
    label: "Video Genneration",
    icon: VideoIcon,
    href: "/video",
    color: "text-neutral-900",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-neutral-900",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-2xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light-sm md:text-lg text-center">
          Chat with the smartest AI - experience the power of AI{" "}
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tools) => (
          <Card
            onClick={() => router.push(tools.href)}
            key={tools.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md")}>
                <tools.icon className={cn("w-8 h-8", tools.color)} />
              </div>
              <div className="font-semibold">{tools.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default DashboardPage;
