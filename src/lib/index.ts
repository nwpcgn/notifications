// Reexport your entry components here
// @index('./components/**/*.svelte', (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Notifications } from './components/notifications/Notifications.svelte'
export { default as Sprites } from './components/sprites/sprites.svelte'
export { default as Stepper } from './components/stepper/stepper.svelte'
// @endindex

// @index('./componentsx/**/*.json', (f, _) => `export { default as ${_.camelCase(f.name)} } from '${f.path}${f.ext}'`)

// @endindex
// @index('./componentsx/**/*.svelte.ts', (f, _) => `export { default as ${_.camelCase(f.name)} } from '${f.path}${f.ext}'`)

// @endindex

export { default as log } from './components/notifications/log.svelte.ts'
