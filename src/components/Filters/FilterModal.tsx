import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import CategoriesList from "@/data/categories.json"

import searchHook from "@/hooks/searchHook"

const TRANSLATE_AMOUNT = 200

export function FilterModal() {
  const { searchText, setSearchText } = searchHook();

  const [translate, setTranslate] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const categories: any[] = CategoriesList

  useEffect(() => {
    if (containerRef.current == null) return

    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target
      if (container == null) return
    })

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [categories, translate])

  return (
    <div className="overflow-x-hidden relative">
      <div ref={containerRef} className="ml-16 mr-56 overflow-x-hidden relative">
        <div
          className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
          style={{ transform: `translateX(-${translate}px)` }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={(e) => setSearchText(`subject:${category.value}`)}
              className="w-fit h-fit py-1 px-6 text-sm text-gray-10 text-gray-200 colorLight rounded-lg whitespace-nowrap overflow-hiddwen tracking-wide"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-10 text-gray-200 colorLight rounded-lg w-12 h-full">
        <button
          className="h-full ml-2"
          onClick={() => {
            setTranslate(translate => {
              const newTranslate = translate - TRANSLATE_AMOUNT
              if (newTranslate <= 0) return 0
              return newTranslate
            })
          }}
        >
          <ChevronLeft />
        </button>
      </div>


      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-x-4 h-full">

        <button
          className="h-full px-6 text-sm text-gray-10 text-gray-200 colorLight rounded-lg whitespace-nowrap overflow-hidden tracking-wide"
        >
          All Categories
        </button>

        <div className="w-12 text-gray-200 colorLight rounded-lg h-full">
          <button
            className="h-full ml-3"
            onClick={() => {
              setTranslate(translate => {
                if (containerRef.current == null) {
                  return translate
                }
                const newTranslate = translate + TRANSLATE_AMOUNT
                const edge = containerRef.current.scrollWidth
                const width = containerRef.current.clientWidth
                if (newTranslate + width >= edge) {
                  return edge - width
                }
                return newTranslate
              })
            }}
          >
            <ChevronRight />
          </button>
        </div>
      </div>


    </div>
  )
}