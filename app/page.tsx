import React from "react";
import { BuzzDropdownMenu } from "@/components/BuzzDropdownMenu";
import { BuzzFooter } from "@/components/BuzzFooter";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateBuzzForm from "@/components/CreateBuzzForm";
import { ProfileCard } from "@/components/ProfileCard";
import { fetchBuzzes } from "@/lib/useBuzz";

export default async function Home() {
  const buzzes = await fetchBuzzes();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (!buzzes) {
    return <div>No buzzes found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto flex space-x-4">
      <div className="flex-1 space-y-4">
        {buzzes.map((buzz) => (
          <div key={buzz.id} className="mb-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{buzz.content}</CardTitle>
                  <div className="relative">
                    <BuzzDropdownMenu id={buzz.id} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Created at: {formatDate(buzz.createdAt)}
                </CardDescription>
                <CardDescription>
                  Author: {buzz.author || "Anonymous"}
                </CardDescription>
              </CardContent>
              <BuzzFooter />
            </Card>
          </div>
        ))}
      </div>
      <div className="w-80 space-y-4">
        <ProfileCard />
        <Card>
          <CardHeader>
            <CardTitle>Create Buzz</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateBuzzForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
