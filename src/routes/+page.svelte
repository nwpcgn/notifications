<script lang="ts">
	import Notifications from '$lib/components/notifications/Notifications.svelte'
</script>

<div
	class="relative grid h-full w-full grid-cols-1 grid-rows-[1fr_min-content] overflow-hidden md:grid-cols-[1fr_min-content] md:grid-rows-1">
	<main class="relative overflow-hidden">
		<section class="grid h-full w-full place-content-center">
			<Notifications label="Logger"></Notifications>
		</section>
	</main>
	<aside></aside>
</div>
