import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "./search";
import { Suspense } from "react";
import { SellcoinsData } from "./discoverSellingCoins";

export const DiscoverPage = () => {
  
  return (
    <div >
      <div className="flex space-x-4">
        <div>
          <h1>Hi,welcome </h1>
          <p className="text-gray-400">Discover sellers selling coins </p>
        </div>
        <Search />
      </div>
      <div className="border-b my-10"/>
      <h1 className="my-3 text-4xl">Discover</h1>
      <p className="text-gray-400">
        Discover top sellers selling their coins on fairtrade
      </p>
      <Suspense fallback={<DiscoverToggleSkeleton />}>
        <SellcoinsData />
      </Suspense>
    </div>
  );
};

export const DiscoverToggleSkeleton = () => {
  return (
    <div>
      <Skeleton className="rounded-xl p-5 w-full" />
      <div className="flex space-x-4 my-2">
        <Skeleton className="w-1/4 p-2" />
        <Skeleton className="w-1/2 p-2" />
      </div>
    </div>
  );
};
