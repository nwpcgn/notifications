<script lang="ts">
	import {Stepper, Notifications, log} from '$lib'
</script>

<div
	class="sky relative grid h-full w-full grid-cols-1 grid-rows-[1fr_min-content] overflow-hidden md:grid-cols-[1fr_min-content] md:grid-rows-1">
	<main class="relative overflow-hidden">
		<section class="grid h-full w-full place-content-center">
			<Stepper></Stepper>
		</section>
	</main>
	<aside class="flex flex-col w-full md:w-[250px] lg:w-[320px] md:border md:border-left p-2 gap-2 relative overflow-hidden">
		<Notifications label="Logger"></Notifications>
	
	</aside>
</div>
