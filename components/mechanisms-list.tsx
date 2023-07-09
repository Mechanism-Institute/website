"use client";

import useMechanismQuery from "@/hooks/use-mechanism-query";
import MechanismCard from "@/components/mechanism-card";
import Typography from "@/components/ui/typography";
import { Fragment, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

function Skeletons() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={`skeleton_${i}`}
          className="flex flex-col p-6 rounded-2xl animate-pulse h-[578px] bg-gray-400"
        />
      ))}
    </div>
  );
}

export default function MechanismsList() {
  const router = useRouter();
  const { ref, inView } = useInView();
  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } = useMechanismQuery();
  const isEmpty = status === "success" && data.pages[0].mechanisms.length === 0;

  const clearFilters = () => {
    router.push("/library");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    if (inView) {
      fetchNextPage().then();
    }
  }, [inView, fetchNextPage]);

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full mt-20 gap-8">
        <Typography variant="hero-title">No mechanisms with the criteria found</Typography>
        <Button variant="outline" onClick={clearFilters}>
          Clear filters
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {status === "loading" ? (
          <Skeletons />
        ) : status === "error" ? (
          <div>Oops, there was something wrong</div>
        ) : (
          <>
            {data?.pages.map((page, index) => (
              <Fragment key={`page_${index}`}>
                {page.mechanisms.map((mechanism) => (
                  <MechanismCard key={mechanism.id} mechanism={mechanism} />
                ))}
              </Fragment>
            ))}
          </>
        )}
      </div>
      <div className="mt-10 flex w-full justify-center">
        {hasNextPage ? (
          <Button
            ref={ref}
            variant="outline"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "View More"}
          </Button>
        ) : (
          <>
            {!isEmpty && (
              <Button
                className="flex items-center"
                ref={ref}
                variant="outline"
                onClick={scrollToTop}
              >
                Back to top
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
}
