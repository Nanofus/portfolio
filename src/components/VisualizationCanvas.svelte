<script lang="ts">
  import {Canvas} from "@threlte/core";
  import Visualization from "src/components/Visualization.svelte";
</script>

<div class="visualization-wrapper">
    <Canvas>
        <Visualization/>
    </Canvas>
</div>

<style>
    .visualization-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        filter: brightness(1.1) saturate(150%);
    }
</style>
