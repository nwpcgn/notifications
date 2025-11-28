<script lang="ts">
	import { Stepper, Notifications, log } from '$lib'

	log.addMessage({ message: 'Welcome' })
</script>

<div class="padded page">
	<Stepper views="[1,2,3,4,5,6,7,8,9]"></Stepper>
</div>
<div class="aside">
	<Notifications></Notifications>
</div>
