export interface FunctionData {
  id: string
  ownerId: string
  functionName: string
  gpuCapable: boolean
  scope: string
  imageName: string
  functionVersion: string
}

export interface FunctionGetObj {
  functions: FunctionData[]
}

export interface FunctionDeleteObj {
  deletedFunctions: FunctionData[]
}

export interface FunctionPostObj {
  newFunction: FunctionData[]
}

export interface FunctionPutObj {
  updatedFunctions: FunctionData[]
}
