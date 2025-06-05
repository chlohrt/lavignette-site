<template>

  <div class="version-list">
    <h2>Available Versions</h2>

    <ul class="versionlist">
      <li v-for="version in versions" :key="version">
        <button @click="selectedVersion = version" :class="{ active: selectedVersion === version }">{{ version
        }}</button>
      </li>
    </ul>

    <div v-if="selectedVersion" class="board-types">
      <h3>Boards for Version {{ selectedVersion }}</h3>
      <ul class="boardlist">
        <li v-for="board in boards" :key="board">
          <button @click="selectedBoard = board" :class="{ active: selectedBoard === board }">{{ board }}</button>
        </li>
      </ul>
    </div>
    <div v-if="manifestPath" class="board-types">
      <h3>Upload Firmware</h3>
      <esp-web-install-button :manifest="manifestPath">
        <button class="update" slot="activate">Upload</button>

      </esp-web-install-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, computed, onMounted, watch } from "vue";

let EspWebTools: any;

onMounted(async () => {
  EspWebTools = await import("esp-web-tools");
});

const selectedVersion: Ref<string | null> = ref(null);
const selectedBoard: Ref<string | null> = ref(null);
const manifestPath = computed(() => {
  if (!selectedVersion.value || !selectedBoard.value) {
    return null;
  }
  return `/assets/releases/${selectedVersion.value.toLocaleLowerCase()}/${selectedBoard.value}/manifest.json`;
})
const versions: Ref<string[]> = ref([
  // "0.0.2",
  "0.0.4",
  "0.0.5",
]);

const boards = ref<string[]>([]);
const boardsPerVersion: Record<string, string[]> = {
  // "0.0.2": ["Motion", "Range"],
  "0.0.4": ["Motion", "Range"],
  "0.0.5": ["motion", "motion_rev1_1", "range", "range_rev1_1", "analog_rev2"],
};

watch(selectedVersion, (newVersion) => {
  selectedBoard.value = null;
  boards.value = newVersion && boardsPerVersion[newVersion] ? boardsPerVersion[newVersion] : [];
});
</script>

<style scoped>
ul {
  margin: 1rem 0;
  display: flex;
  gap: 1em;
  list-style-type: none;
  padding: 0;

}

li {
  margin: 0.5rem 0;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #f0f0f0;
  cursor: pointer;
}

button:hover {
  background-color: #e0e0e0;
}

button.active {
  background-color: #00ff7b;
}

button.active:hover {
  background-color: #00e66e;
}

button.update {
  background-color: #007bff;
}

button.update:hover {
  background-color: #0056b3;
}
</style>