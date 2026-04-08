<script lang="ts">
	import { T, useTask } from "@threlte/core";
	import { interactivity } from "@threlte/extras";
	import { spring } from "svelte/motion";
	import {getCSSColor} from "@utils/getCSSColor";
  import MonsterMask from "@components/MonsterMask.svelte";

	interactivity();
	const scale = spring(2);
	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta * 0.2;
	});
	
	const color = getCSSColor('--accent-color');
</script>

<T.PerspectiveCamera
	makeDefault
	position={[1, 1.2, 1]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
/>
<T.DirectionalLight intensity={1} position={[0, 20, 10]} />
<T.AmbientLight intensity={1} />
<MonsterMask
	rotation.y={rotation}
	position.y={1}
	scale={$scale}
	onpointerenter={() => scale.set(2.2)}
	onpointerleave={() => scale.set(2)}
	{color}
/>
