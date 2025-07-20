<script lang="ts">
  import PTable from "$lib/Table/PTable.svelte";
  

</script>

<div class="tablelayout">
  <div id="tlblip"></div>
  <div id="toprow"></div>
  <div id="trblip"></div>
  <div id="leftcol"></div>
  <PTable></PTable>
  <div id="rightcol"></div>
</div>

<style>
.tablelayout {
  display: grid;
  grid-template-columns: 2.94vw 94.12vw 2.94vw;
  grid-template-rows: 2.94vh;
}
</style>