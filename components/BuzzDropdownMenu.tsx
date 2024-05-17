"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Trash2,
  Edit2,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteBuzz, editBuzz } from "@/lib/useBuzz";

export const BuzzDropdownMenu = ({ id }: { id: any }) => {
  const router = useRouter();

  const handleDeleteBuzz = async () => {
    const isDeleted = await deleteBuzz(id);
    if (isDeleted) {
      toast.success("Buzz deleted successfully");
      router.refresh()
    } else {
      toast.error("Failed to delete buzz");
    }
  };

  const handleEditBuzz = async () => {
    const isEdited = await editBuzz(id);
    if (isEdited) {
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={handleEditBuzz}>
            <Edit2 size={16} />
            <DropdownMenuLabel inset>Edit</DropdownMenuLabel>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleDeleteBuzz()}>
            <Trash2 size={16} />
            <DropdownMenuLabel inset>Delete</DropdownMenuLabel>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
