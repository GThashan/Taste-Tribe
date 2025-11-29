import { Flame } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Flame className="w-8 h-8 text-primary fill-primary" />
      </div>
      <div className="text-2xl font-bold">
        <span className="text-foreground">Tasty</span>
        <span className="text-primary">Zone</span>
      </div>
    </div>
  );
};
