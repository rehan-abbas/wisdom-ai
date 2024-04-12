"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rehan",
    avatar: "R",
    title: "Software Developer",
    description: "Great application . Easy to use and its helpful.",
  },

  {
    name: "Ritesh",
    avatar: "R",
    title: "Developer",
    description: "Fantastic Tool for Creativity and Productivity",
  },
  {
    name: "Praveen",
    avatar: "P",
    title: "Developer",
    description: "Awesome resourse and responses are very quick ",
  },
  {
    name: "Jack",
    avatar: "J",
    title: "Developer",
    description: "Great design and the easy to use  interface. Love it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-zinc-400 font-extrabold mb-10">
        Reviews
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-zinc-900 border-none text-zinc-400"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
