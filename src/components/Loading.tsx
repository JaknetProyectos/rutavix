"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-xl">
      
      <div className="flex flex-col items-center gap-8">
        
        {/* Loader animado tipo marca */}
        <div className="relative flex items-center justify-center">
          
          {/* Anillo exterior */}
          <div className="w-20 h-20 rounded-full border border-gray-200" />

          {/* Spinner principal */}
          <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-300 animate-spin" />

          {/* Punto central animado */}
          <div className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse" />

        </div>

        {/* Texto */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Loading Experience
          </p>

          <div className="flex justify-center mt-2 gap-1">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.2s]" />
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.1s]" />
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </div>
  );
}