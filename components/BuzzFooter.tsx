import React from "react";
import { Heart, Repeat2, Share2 } from "lucide-react";
import { CardFooter } from "./ui/card";

export function BuzzFooter() {
  return (
    <CardFooter>
      <div className="flex justify-between w-full border-t items-center pt-4">
        <button className="flex items-center">
          <Heart size={20} />
        </button>
        <button className="flex items-center">
          <Repeat2 size={20} />
        </button>
        <button className="flex items-center">
          <Share2 size={20} />
        </button>
      </div>
    </CardFooter>
  );
}
