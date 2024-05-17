import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";

export async function ProfileCard() {
  const session = await getServerSession();

  return (
    <Card className="mx-auto text-center">
      <CardHeader>
        <Avatar className="mx-auto h-16 w-16">
          <AvatarImage src="https://avatars.githubusercontent.com/u/2254658?v=4" />
        </Avatar>
        <CardTitle className="pt-6">{session?.user?.name}</CardTitle>
        <CardDescription></CardDescription>
        <CardDescription className="text-base">I love buzzloop</CardDescription>
      </CardHeader>
      {/* <CardContent className="flex justify-center gap-4">
        <CardDescription>Followers</CardDescription>
        <CardDescription>Posts</CardDescription>
        <CardDescription>Likes</CardDescription>
      </CardContent> */}
    </Card>
  );
}
