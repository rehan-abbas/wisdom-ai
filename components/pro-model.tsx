"use client";

import axios from "axios";
import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useProModel } from "@/hooks/use-pro-model";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

const tools = [
  {
    label: "conversation",
    icon: MessageSquare,
    color: "text-nuetral-200",
    bgcolor: "bg-nuetral-900",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-nuetral-200",
    bgcolor: "bg-nuetral-900",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-nuetral-200",
    bgcolor: "bg-nuetral-900",
  },
  {
    label: "Video Genneration",
    icon: VideoIcon,
    color: "text-nuetral-200",
    bgcolor: "text-onuetral-900",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-nuetral-200",
    bgcolor: "text-nuetral-900",
  },
];

export const ProModel = () => {
  const proModel = useProModel();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModel.isOpen} onOpenChange={proModel.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
              Upgrade to Wisdom
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tools) => (
              <Card
                key={tools.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tools.bgcolor)}>
                    <tools.icon className={cn("w-6 h-6", tools.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tools.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            size="lg"
            variant="premium"
            className="w-full"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
