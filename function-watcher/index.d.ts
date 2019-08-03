import { Readable } from 'stream'

export interface DeletedRun {
  deletedRun: string
}

export interface RunStatus {
  status: string
  startTime?: string
  endTime?: string
  runningTime?: string
  error?: string
  out?: string
  err?: string
}

export interface ResultInfo {
  status: string
  startTime: string
  endTime: string
  runningTime: string
  error?: string
}

export type ResultOutput = Readable

export interface AsyncRun {
  startTime: string
  runID: string
}

export type SyncRun = Readable
