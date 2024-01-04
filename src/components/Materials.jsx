import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { materials, todayAtYourLibrary } from "../data/materials/data";
import { cn } from "../lib/utils";

const Materials = () => {
  return (
    <main className="container py-16">
      <div className="  max-w-full">
        <div className="hidden md:block">
          <div className="border">
            <div className="bg-background">
              <div className="grid lg:grid-cols-1">
                <div className="col-span-3 lg:col-span-5 lg:border-l">
                  <div className="h-full px-4 py-6 lg:px-8">
                    <Tabs defaultValue="music" className="h-full space-y-6">
                      <TabsContent
                        value="music"
                        className="border-none p-0 outline-none"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              Top resources for you
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Click and check out.
                            </p>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className="flex space-x-4 pb-4 ">
                              {materials.map((material) => {
                                return (
                                  <div className="relative group cursor-pointer">
                                    <div className="flex flex-col gap-4 justify-center items-center overflow-hidden rounded-md group-hover:relative group-hover:after:bg-gradient-to-br hover:duration-500 hover:delay-100 hover:ease-in-out  from-[rgba(8,8,12,1)] via-[rgba(8,8,12,0.7)] to-[rgba(40,40,61,1)] group-hover:after:absolute group-hover:after:top-0 group-hover:after:left-0 group-hover:after:w-full group-hover:after:h-full group-hover:after:flex group-hover:after:flex-col group-hover:after:justify-center group-hover:after:items-center">
                                      <img
                                        src={material.cover}
                                        alt={material.name}
                                        className={cn(
                                          "h-72 w-72 object-cover transition-all hover:scale-105 aspect-[3/4]",
                                          "group-hover:gradient"
                                        )}
                                      />
                                      <div className="absolute  w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity ">
                                        <p className="text-gray-400 text-opacity-80 text-2xl px-4 z-10">
                                          Go to
                                          <p className="text-white text-3xl ">
                                            {material.path}
                                          </p>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="space-y-3 flex justify-center items-center text-lg pt-5 text-center">
                                      <h3 className="font-medium  leading-none">
                                        {material.name}
                                      </h3>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                        <div className="mt-12 space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Today at your library
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Updated daily.
                          </p>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className="flex space-x-4 pb-4">
                              {todayAtYourLibrary.map((each) => {
                                return (
                                  <div className="flex flex-col gap-4 justify-center items-center relative">
                                    <div className="overflow-hidden rounded-md gradient">
                                      <img
                                        src={each.cover}
                                        alt={each.name}
                                        className={cn(
                                          "h-72 w-72 object-cover transition-all hover:scale-105 aspect-[3/4] opacity-25"
                                        )}
                                      />
                                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                                        <p className="text-gray-400 text-opacity-80 text-center text-2xl">
                                          more than
                                          <p className="text-5xl text-white">
                                            {each.text}
                                          </p>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="space-y-1 text-lg">
                                      <h3 className="font-medium leading-none">
                                        {each.name}
                                      </h3>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="podcasts"
                        className="h-full flex-col border-none p-0 data-[state=active]:flex"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              New Episodes
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Your favorite podcasts. Updated daily.
                            </p>
                          </div>
                        </div>
                        <Separator className="my-4" />
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Materials;
