"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Heart,
  Repeat2,
  Share2,
  Trash2,
  Edit2,
  MoreVertical,
} from "lucide-react";

export function Buzzsheet({ id }: { id: any }) {
  const router = useRouter();
  return (
    <Sheet>
      <SheetTrigger>
        <MoreVertical />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Buzz Actions</SheetTitle>
          <SheetClose />
        </SheetHeader>
        <SheetDescription>
          <Edit2
            onClick={() => {
              router.push(`/buzz/${id}/edit`);
            }}
          >
            Edit
          </Edit2>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
