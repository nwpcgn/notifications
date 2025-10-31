<script lang="ts">
	import { fade, slide } from 'svelte/transition'
	import { getNote, log } from './log.svelte.js'
	function typewriter(node, { speed = 3 }) {
		const valid =
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE

		if (!valid) {
			throw new Error(
				`This transition only works on elements with a single text node child`
			)
		}

		const text = node.textContent
		const duration = text.length / (speed * 0.01)

		return {
			duration,
			tick: (t) => {
				const i = ~~(text.length * t)
				node.textContent = text.slice(0, i)
			}
		}
	}
	let frame: HTMLDivElement | null = $state(null)
	let fh = $state(0)
	let fw = $state(0)
	let fch: number = $state(0)
	let { label } = $props()
	const addNote = async () => {
		const obj = getNote()
		log.addMessage(obj)
	}
	const clearList = () => {
		log.empty()
	}
	$effect(async () => {
		if (frame) {
			log.init(frame)
		}

		if (fch) {
			frame.scrollTo({ top: fch, behavior: 'smooth' })
		}
	})
</script>

{#snippet msgLine({ id, type, message, dismissible })}
	<div
		transition:slide|global
		role="alert"
		class="alert"
		class:alert-info={type === 'info'}
		class:alert-error={type === 'error'}
		class:alert-success={type === 'success'}>
		{#if !dismissible}
			<button
				style="--fs: 16px;"
				aria-label="close"
				onclick={() => {
					log.remove(id)
				}}
				class="size-4 cursor-pointer rounded-box text-sm">
				&#10006;
			</button>
		{/if}
		<span out:fade={{ duration: 200 }} in:typewriter>{message}</span>
	</div>
{/snippet}

<div class="flex flex-col gap-2">
	{#if label}
		<header class="flex items-center gap-2 rounded-box bg-base-300 p-4">
			<div class="h4">
				<span
					class="transition-opacity duration-300 ease-in"
					class:opacity-40={log.busy}>{label}</span>
				{#if log.messages.length}
					<span class="text-lg text-accent" transition:fade
						>+{log.messages.length}</span>
				{/if}
			</div>

			<span class="flex-1"></span>
			<nav class="grid grid-cols-2 gap-2">
				<button
					onclick={addNote}
					aria-label="addNote"
					class="size-6 cursor-pointer rounded-box bg-info text-info-content">
					&#10010;
				</button>
				<button
					disabled={log.busy}
					onclick={clearList}
					aria-label="clearNotes"
					class="size-6 cursor-pointer rounded-box bg-error text-error-content">
					&#10006;
				</button>
			</nav>
		</header>
	{/if}

	<div
		class="size-96 overflow-y-auto rounded-l-box bg-base-100 bg-neutral p-2 text-neutral-content"
		bind:this={frame}
		bind:clientHeight={fh}
		bind:clientWidth={fw}>
		<div class="grid gap-2" bind:clientHeight={fch}>
			{#each log.list as note (note.id)}
				{@render msgLine(note)}
			{:else}
				<div class="p-4 grid place-content-center">
					<span>no Messages</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- prettier-ignore -->
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="game-notes" viewBox="0 0 28 32"><title>notes</title><path d="M14 0c-7.73 0-14 6.27-14 14 0 3.832 1.547 7.297 4.043 9.828l-0.043 8.172 6.703-4.434c1.063 0.262 2.156 0.434 3.297 0.434 7.73 0 14-6.27 14-14s-6.27-14-14-14z"></path></symbol><symbol id="game-ok" viewBox="0 0 32 32"><title>ok</title><path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z"></path></symbol><symbol id="game-close" viewBox="0 0 32 32"><title>close</title><path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM23.914 21.086l-2.828 2.828-5.086-5.086-5.086 5.086-2.828-2.828 5.086-5.086-5.086-5.086 2.828-2.828 5.086 5.086 5.086-5.086 2.828 2.828-5.086 5.086 5.086 5.086z"></path></symbol><symbol id="game-settings" viewBox="0 0 32 32"><title>settings</title><path d="M32 17.969v-4l-4.781-1.992c-0.133-0.375-0.273-0.738-0.445-1.094l1.93-4.805-2.829-2.828-4.762 1.961c-0.363-0.176-0.734-0.324-1.117-0.461l-2.027-4.75h-4l-1.977 4.734c-0.398 0.141-0.781 0.289-1.16 0.469l-4.754-1.91-2.828 2.828 1.938 4.711c-0.188 0.387-0.34 0.781-0.485 1.188l-4.703 2.011v4l4.707 1.961c0.145 0.406 0.301 0.801 0.488 1.188l-1.902 4.742 2.828 2.828 4.723-1.945c0.379 0.18 0.766 0.324 1.164 0.461l2.023 4.734h4l1.98-4.758c0.379-0.141 0.754-0.289 1.113-0.461l4.797 1.922 2.828-2.828-1.969-4.773c0.168-0.359 0.305-0.723 0.438-1.094l4.782-2.039zM15.969 22c-3.312 0-6-2.688-6-6s2.688-6 6-6 6 2.688 6 6-2.688 6-6 6z"></path></symbol><symbol id="game-add" viewBox="0 0 32 32"><title>add</title><path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"></path></symbol><symbol id="game-remove" viewBox="0 0 32 32"><title>remove</title><path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM24 18h-16v-4h16v4z"></path></symbol></defs></svg>
