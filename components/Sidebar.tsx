"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FreeCounter } from "./free-counter";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/Dashboard",
    color: "text-stone-300",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-stone-300",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-stone-300",
  },
  {
    label: "Video Genneration",
    icon: VideoIcon,
    href: "/video",
    color: "text-stone-300",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-stone-300",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-stone-300",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
interface SidebarProps {
  apiLimitCount: number;
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-zinc-800 text-stone-300">
      <div className="px-3 py-2 flex-1">
        <Link href="/Dashboard" className="flex items-center pl-3 mb-14">
          <div className=" flex relative w-8 h-8 mr-4">
            <Image width={100} height={100} alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold flex", montserrat.className)}>
            Wisdom
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} />
    </div>
  );
};
export default Sidebar;
