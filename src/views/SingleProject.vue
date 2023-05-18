<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects.js';

export default {
  name: 'Projects',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  data() {
    return {
      project: null,
      projectId: null
    };
  },
  mounted() {
    this.projectId = parseInt(this.$route.params.id); // Convert ID to the appropriate type
    feather.replace();
    this.fetchProjectData();
  },
  methods: {
    fetchProjectData() {
      console.log(this.projectId);
      this.project = projects.find((proj) => proj.id === this.projectId);
    },
  },
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20" v-if="project">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="project" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="project.projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="project.projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="project.relatedProject" />
  </div>
</template>

<style scoped></style>
