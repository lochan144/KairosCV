"use client"

import { CheckIcon } from "@/components/icons"

interface ProgressTrackerProps {
  progress: number
  stage: string
  message: string
}

export default function ProgressTracker({ progress, stage, message }: ProgressTrackerProps) {
  const stages = ["uploading", "parsing", "enhancing", "generating", "compiling"]
  const stageLabels: Record<string, string> = {
    uploading: "Upload",
    parsing: "Parse",
    enhancing: "AI Enhance",
    generating: "Generate",
    compiling: "Compile",
  }
  const stageMessages: Record<string, string> = {
    uploading: "Uploading your resume...",
    parsing: "Extracting resume content...",
    enhancing: "AI is enhancing your content...",
    generating: "Generating optimized document...",
    compiling: "Compiling final PDF...",
  }

  const currentStageIndex = stages.indexOf(stage)

  return (
    <div className="card animate-in fade-in">
      <div className="mb-6 border-b-2 border-primary pb-4">
        <h2>Processing Your Resume</h2>
        <p className="text-sm text-muted-foreground mt-2">
          This usually takes less than 60 seconds
        </p>
      </div>

      {/* Processing indicator */}
      <div className="mb-8 relative">
        <div className="flex items-center justify-center gap-3 py-4">
          {/* Animated processing dots */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-primary border-2 border-primary animate-processing-dot" />
            <div className="w-3 h-3 bg-primary border-2 border-primary animate-processing-dot" style={{ animationDelay: "0.2s" }} />
            <div className="w-3 h-3 bg-primary border-2 border-primary animate-processing-dot" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>

      <div className="space-y-5 mb-8">
        {stages.map((s, idx) => {
          const isCompleted = currentStageIndex > idx
          const isActive = stage === s
          const isPending = currentStageIndex < idx

          return (
            <div
              key={s}
              className={`flex items-start gap-4 transition-all duration-300 ${
                isActive ? "scale-105" : ""
              }`}
            >
              {/* Stage Dot */}
              <div
                className={`stage-dot ${isCompleted ? "completed" : isActive ? "active" : ""}`}
              >
                {isCompleted ? (
                  <CheckIcon className="w-5 h-5 animate-in zoom-in" />
                ) : isActive ? (
                  <span className="text-sm font-black animate-processing-pulse">{idx + 1}</span>
                ) : (
                  <span className="text-sm font-black">{idx + 1}</span>
                )}
              </div>

              {/* Stage Info */}
              <div className="flex-1 pt-2">
                <p className={`font-bold text-sm transition-colors duration-200 ${
                  isPending ? "text-muted-foreground" : isActive ? "text-primary" : ""
                }`}>
                  {stageLabels[s]}
                </p>
                {isActive && (
                  <p className="text-muted-foreground text-xs mt-1 animate-in fade-in">
                    {stageMessages[s]}
                  </p>
                )}
                {isCompleted && (
                  <p className="text-xs mt-1 text-success font-semibold animate-in fade-in">
                    ✓ Complete
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Enhanced Progress Bar */}
      <div className="mt-8 p-6 bg-secondary border-2 border-primary">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-bold">Overall Progress</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success animate-pulse" />
            <p className="text-sm font-black">{Math.round(progress)}%</p>
          </div>
        </div>
        <div className="h-4 border-3 border-primary bg-white overflow-hidden relative">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Animated stripe overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
            </div>
            {/* Diagonal stripes for texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255, 255, 255, 0.5) 10px,
                  rgba(255, 255, 255, 0.5) 20px
                )`
              }}
            />
          </div>
        </div>
      </div>

      {message && (
        <p className="text-center text-muted-foreground text-sm mt-6 animate-in fade-in font-medium">
          {message}
        </p>
      )}
    </div>
  )
}
