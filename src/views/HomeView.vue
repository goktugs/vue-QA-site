<script>
import CategoryList from "@/components/HomeView/CategoryList.vue";
import AppQuestionList from "@/components/AppShared/AppQuestionList";
export default {
  components: {
    CategoryList,
    AppQuestionList,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <category-list />
      <app-question-list />
    </div>
  </div>
</template>