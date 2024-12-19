import { Card, CardContent } from "@/components/ui/card"

export default function StatsCards() {
  return (
    <div className="relative min-h-[400px] w-full max-w-3xl p-4">
      <Card className="absolute left-0 top-0 w-full max-w-md bg-white shadow-lg ">
        <CardContent className="p-6">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-6 w-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold">AI to Detect & Autofix Bad Code</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm text-muted-foreground">Language Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100K+</div>
              <div className="text-sm text-muted-foreground">Hours Saved</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="absolute left-[40%] top-[30%] w-64 bg-white shadow-lg">
        <CardContent className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Issues Fixed</div>
            <div className="flex items-center text-sm text-blue-600">
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              14%
              <span className="ml-1 text-xs text-muted-foreground">This week</span>
            </div>
          </div>
          <div className="text-3xl font-bold">500K+</div>
        </CardContent>
      </Card>

      <div className="absolute bottom-0 left-0 h-32 w-32 opacity-20">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

