#!/usr/bin/env node
import { spawn } from 'child_process'
import { startWatcher } from './core/watcher.js'

startWatcher()

spawn('next', ['dev', '--turbo'], {
  stdio: 'inherit',
  shell: true,
})
