'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export interface Photo {
  id: string
  cloudinaryId: string
  title: string
  width: number
  height: number
  category?: string
}

function getCloudinaryUrl(cloudinaryId: string, width = 800): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dmycfncex'
  return `https://res.cloudinary.com/${cloudName}/image/upload/w_${width},q_auto,f_auto/${cloudinaryId}`
}

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [cols, setCols] = useState(3)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateCols = () => {
      if (window.innerWidth < 720) setCols(2)
      else setCols(3)
    }
    updateCols()
    window.addEventListener('resize', updateCols)
    return () => window.removeEventListener('resize', updateCols)
  }, [])

  // Create columns for the masonry layout
  const masonryCols = Array.from({ length: cols }, () => [] as typeof photos)
  photos.forEach((photo, i) => masonryCols[i % cols].push(photo))

  return (
    <div suppressHydrationWarning>
      {!mounted ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
             <div key={photo.id} className="relative rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: photo.width && photo.height ? `${photo.width} / ${photo.height}` : '4 / 3' }}>
               <Image src={getCloudinaryUrl(photo.cloudinaryId, 800)} alt={photo.title} fill className="object-cover" />
             </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-4">
          {masonryCols.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 flex-1 min-w-0">
              {col.map((photo) => {
                const aspectRatio = photo.width && photo.height ? `${photo.width} / ${photo.height}` : '4 / 3'
                return (
                  <a 
                    key={photo.id} 
                    href="https://photography.justinsaju.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative block rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                    style={{ aspectRatio, backgroundColor: 'var(--bg-secondary, #f3f4f6)' }}
                  >
                    <Image
                      src={getCloudinaryUrl(photo.cloudinaryId, 800)}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white font-semibold text-sm drop-shadow-md">{photo.title}</p>
                      {photo.category && <p className="text-white/80 text-xs mt-1 uppercase tracking-wider font-medium">{photo.category}</p>}
                    </div>
                  </a>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
