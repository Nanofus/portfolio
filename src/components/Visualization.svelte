<script lang="ts">
	import { T, useTask } from "@threlte/core";
	import { interactivity } from "@threlte/extras";
	import { spring } from "svelte/motion";
	import {getCSSColor} from "@utils/getCSSColor";

	interactivity();
	const scale = spring(1);
	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta * 0.2;
	});
	
	const color = getCSSColor('--accent-color');
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	oncreate={(ref) => {
		ref.lookAt(0, 1, 0);
	}}
/>
<T.DirectionalLight intensity={1} position={[0, 10, 10]} />
<T.AmbientLight intensity={1} />
<T.Mesh
	rotation.y={rotation}
	position.y={1}
	scale={$scale}
	onpointerenter={() => scale.set(1.1)}
	onpointerleave={() => scale.set(1)}
>
	<T.BoxGeometry args={[5, 5, 5]} />
	<T.MeshStandardMaterial {color} />
</T.Mesh>
