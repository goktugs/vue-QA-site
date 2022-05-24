<script>
import AppQuestionListItem from "@/components/AppShared/AppQuestionListItem.vue";
export default {
  components: { AppQuestionListItem },
};
</script>

<template>
  <div class="col-10">
    <AppQuestionListItem />
    <div class="col-4 offset-2 mt-5">
      <div class="alert alert-primary" role="alert">
        Bu Kategori(lere) ait bir soru bulunamadı. Soru sormak için
        <a href="#">tıklayınız</a>
      </div>
    </div>
  </div>
</template>
