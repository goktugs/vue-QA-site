<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    userData: {
      details: null,
      title: null,
      categoryId: null,
    },
  }),
  methods: {
    onSubmit() {
      const userData = this.copy(this.userData);
      console.log(userData);
    },
  },
  computed: {
    ...mapGetters({
      categoryList: "categories/categoryList",
    }),
  },
};
</script>



<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-8 offset-2">
        <div class="card">
          <div class="card-header">Yeni Soru</div>
          <div class="card-body">
            <div class="mb-3">
              <label for="question-title" class="form-label"
                >Kısa bir başlık</label
              >
              <input
                v-model="userData.title"
                type="text"
                class="form-control"
                id="question-title"
                placeholder="Bu soru çokomelli"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Detaylar</label>
              <quill-editor v-model:value="userData.content" />
            </div>
            <div class="mb-3">
              <label for="question-category" class="form-label">Kategori</label>
              <select
                class="form-select"
                v-model="userData.categoryId"
                id="question-category"
              >
                <option selected>Lütfen bir kategori seçiniz</option>
                <option
                  v-for="category in categoryList"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.title }}
                </option>
              </select>
            </div>
          </div>

          <div
            class="
              card-footer
              text-muted
              d-flex
              justify-content-end
              align-items-center
            "
          >
            <button @click="onSubmit" class="btn btn-sm btn-primary">
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>