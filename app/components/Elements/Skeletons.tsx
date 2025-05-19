// Skeleton Loader Component
export const SkeletonCard = () => (
    <div className="md:py-32 animate-pulse">
      <div className="text-stone-900 md:block hidden text-base font-normal font-clash-regular leading-tight tracking-tight mb-2">
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
      </div>
      <div className="md:flex justify-between md:mt-6 gap-8">
        <div className="max-h-[372px] md:mt-0 mt-3 h-auto max-w-[454px] order-last flex-shrink-0">
          <div className="h-[372px] w-[454px] bg-gray-200 rounded-3xl"></div>
        </div>
        <div className="max-w-[675px] w-auto mt-7 md:mt-0 flex flex-col gap-4">
          <div className="text-stone-900 md:hidden text-[14px] font-normal font-clash-regular leading-tight tracking-tight">
            <div className="h-3 w-16 bg-gray-200 rounded"></div>
          </div>
          <div className="w-auto text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium md:leading-[53.20px] leading-[33px] md:mt-0 mt-6 text-left">
            <div className="h-8 w-2/3 bg-gray-200 rounded"></div>
          </div>
          <div className="max-w-[565px] text-neutral-900 md:mt-5 mt-6 md:text-[22px] text-[16px] font-normal md:leading-[30.80px] leading-[16px] md:tracking-wide tracking-[0.5px]">
            <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>
          <div className="md:w-[190px] md:h-16 border border-gray-300 rounded-[40px] md:mt-10 mt-6 py-4 px-6 flex gap-3 items-center">
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
            <div className="h-5 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {/* Skeleton for TrackSongs */}
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-40 h-16 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
  // Fallback UI Component
  export const FallbackUI = () => (
    <div className="w-full flex flex-col items-center justify-center py-24">
      <div className="text-stone-900 text-2xl font-clash-medium mb-4">Something went wrong</div>
      <div className="text-gray-500 mb-6">We couldn't load the tracks right now. Please try again later.</div>
      <button
        className="px-6 py-2 border border-black rounded-[40px] text-stone-900 font-medium font-clash-medium hover:bg-gray-200 transition"
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  );
  



// Skeleton Loader for Film Card
export const FilmCardSkeleton: React.FC<{ reverse?: boolean }> = ({ reverse }) => (
    <div
      className={`animate-pulse ${
        reverse ? "lg:flex lg:flex-row-reverse" : "lg:flex"
      } lg:gap-14 w-full md:mt-20 mt-8`}
    >
      <div className="md:w-[520px] w-auto h-[480px] bg-gray-200 rounded-3xl" />
      <div className="lg:w-[520px] w-full md:max-h-[552px] h-auto md:py-20 py-8 flex flex-col justify-between">
        <div className="w-full">
          <div className="h-10 md:h-[52px] bg-gray-200 rounded mb-4 md:w-3/4 w-2/3" />
          <div className="flex items-center gap-5 mt-[10px] md:mt-6">
            <div className="px-2 py-1 rounded-lg border border-gray-300 flex items-center">
              <div className="h-5 w-16 bg-gray-200 rounded" />
            </div>
            <div className="h-5 w-12 bg-gray-200 rounded" />
            <div className="h-5 w-4 bg-gray-200 rounded" />
            <div className="h-5 w-12 bg-gray-200 rounded" />
            <div className="h-5 w-4 bg-gray-200 rounded" />
            <div className="h-5 w-16 bg-gray-200 rounded" />
          </div>
          <div className="md:py-10 py-8">
            <div className="lg:w-[552px] w-auto flex flex-col gap-2">
              <div className="h-5 bg-gray-200 rounded w-full" />
              <div className="h-5 bg-gray-200 rounded w-5/6" />
              <div className="h-5 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
          <div className="hidden lg:flex gap-4">
            <div className="filmButtonBg md:w-[235px] w-auto h-16 rounded-[40px] flex items-center justify-center">
              <div className="h-8 w-32 bg-gray-300 rounded-[40px]" />
            </div>
            <div className="w-[204px] h-16 border border-gray-300 rounded-[40px] flex items-center justify-center">
              <div className="h-8 w-24 bg-gray-300 rounded-[40px]" />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:hidden items-start">
            <div className="border border-gray-300 rounded-[40px] py-4 px-6 flex gap-3 items-center w-40">
              <div className="h-6 w-6 bg-gray-300 rounded-full" />
              <div className="h-5 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );


 export const SkeletonCardFeatureFilm = () => (
    <div className="md:max-w-[264px] h-full md:h-[400px] md:py-9 animate-pulse">
      <div className="relative">
        <div
          className="absolute p-5 w-full h-full rounded-3xl"
          style={{
            background: `
              linear-gradient(180deg, rgba(0, 0, 0, 0) 35.74%, rgba(0, 0, 0, 0.5) 100%),
              radial-gradient(68.92% 68.92% at 50% 31.08%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)
            `,
          }}
        >
          <div className="w-full h-full flex justify-start items-end">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="bg-gray-700 rounded w-32 h-6 mb-2" />
              <div className="bg-gray-700 rounded w-16 h-4" />
            </div>
          </div>
        </div>
        <div className="object-cover w-full h-[428px] md:h-[340px] rounded-3xl bg-gray-800" />
      </div>
    </div>
  );