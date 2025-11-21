<script lang="ts">
	import '../app.css'
	import { Stepper, Notifications, log, Sprites } from '$lib'
	let { children } = $props()
</script>

<div class="layout">
	<div class="app-bar p-4 bg-slate-800"></div>
	<main class="main">
		{@render children?.()}
	</main>
	<div class="foo-bar p-4 bg-slate-800"></div>
	<div class="side-bar flex flex-col bg-slate-200 border-l border-slate-800">
		<Notifications>

		</Notifications>
	</div>
</div>
<Sprites></Sprites>
