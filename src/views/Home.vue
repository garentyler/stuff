<template>
  <div class="main">
    <div class="sidebar">
      <ul>
        <div class="section">
          <li class="bold">Inbox</li>
        </div>
        <div class="section">
          <li class="bold">Today</li>
          <li class="bold">Upcoming</li>
          <li class="bold">Anytime</li>
          <li class="bold">Someday</li>
        </div>
        <div class="section">
          <li class="bold">Logbook</li>
          <li class="bold">Trash</li>
        </div>
        <div class="section">
          <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
        </div>
        <div class="section" v-for="area in areas" :key="area.id">
          <li class="bold">{{ area.title }}</li>
          <ul>
            <li v-for="project in area.projects" :key="project.id">{{ project.title }}</li>
          </ul>
        </div>
      </ul>
    </div>
    <div class="workspace">
      <h1>Workspace</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const projects = ref([]);
projects.value.push({ id: 0, title: 'Meet Things for Mac' });
projects.value.push({ id: 1, title: 'Shopping List' });

const areas = ref([]);
areas.value.push({
  id: 0,
  title: 'YouTube',
  projects: [
    {
      id: 0,
      title: 'Video Ideas'
    },
  ],
});

</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #282A31;
}
.sidebar {
  height: 100%;
  background-color: #24262C;
  border-right: 1px solid #1E1E22;
  text-align: left;
}

@media (prefers-color-scheme: light) {
  .main {
    background-color: #FFFFFF;
  }
  .sidebar {
    background-color: #FAFAFA;
    border-color: #F2F4F7;
  }
}

.bold {
  font-weight: bolder;
}
ul {
  list-style-type: none;
  margin: 0 2em 0 1em;
  padding: 0;
}
.section {
  margin-top: 1em;
}
</style>

