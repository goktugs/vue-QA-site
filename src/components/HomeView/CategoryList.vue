<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categoryList: "categories/categoryList",
      isAuthenticated: "users/isAuthenticated",
    }),
  },
};
</script>

<template>
  <!-- KATEGORILER -->
  <div class="col-2">
    <div class="d-grid gap-2 mb-3">
      <button
        class="
          btn btn-primary
          d-flex
          justify-content-between
          align-items-center
        "
        @click="$router.push({ name: 'NewQuestionView' })"
      >
        <span>Soru Sor</span>
        <i class="fa fa-edit"></i>
      </button>
    </div>
    <div class="list-group">
      <a
        v-for="category in categoryList"
        :key="category.id"
        href="#"
        class="
          active
          list-group-item list-group-item-action
          d-flex
          justify-content-between
          align-items-center
          category-item
        "
        aria-current="true"
      >
        <div>
          <i class="fa fa-hashtag custom-text-light me-2"></i>
          <span> {{ category.title }} </span>
        </div>
        <i class="check-icon fa fa-check-circle"></i>
      </a>
    </div>
  </div>
  <!-- !KATEGORILER -->
</template>