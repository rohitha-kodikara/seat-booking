import React from 'react'

const Legend = () => {
  return (
     <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-md border border-cyan-400/60 bg-cyan-400/10"></span>
                Available
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-md bg-gradient-to-br from-amber-300 to-pink-500"></span>
                Selected
              </div>
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-md bg-white/10"></span>
                Taken
              </div>
            </div>
  )
}

export default Legend
