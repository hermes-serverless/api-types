export interface RunData {
  id: string
  userId: string
  status: string
  startTime: Date | null
  outputPath: string | null
  endTime: Date | null
  watcherID: string | null
  function: {
    functionName: string
    language: string
    gpuCapable: boolean
    scope: string
    imageName: string
    functionVersion: string
    owner: { username: string }
  }
}

interface RunGetObj {
  runs: RunData[]
}

interface RunDeleteObj {
  deletedRuns: RunData[]
}

interface RunPostObj {
  createdRun: RunData[]
}

interface RunPutObj {
  updatedRuns: RunData[]
}
