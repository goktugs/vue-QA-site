<script>
export default {
  name: "RegisterView",
  data: () => ({
    categoryList: [],
    // Userın etkileşime girdiği data
    userData:
  }),
  methods: {
    fetchCategories() {
      this.$appAxios.get("/categories").then(({ data: categoryList }) => {
        console.log(categoryList);
        this.categoryList = categoryList || [];
      });
    },
  },

  mounted() {
    this.fetchCategories();
  },
};
</script>


<template>
  <div class="container loginPage">
    <div class="row">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">Kayıt Ol</div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Ad Soyad</label>
              <input
                type="text"
                class="form-control"
                placeholder="İsim Giriniz"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">E-posta adresi</label>
              <input
                type="email"
                class="form-control"
                placeholder="info@gmail.com"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Şifre</label>
              <input type="password" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">İlgi Duyduğunuz Kategori</label>
              <select class="form-select">
                <option selected>Lütfen bir kategori seçiniz</option>
                <option v-for="category in categoryList" :key="category.id">
                  {{ category.title }}
                </option>
              </select>
            </div>
            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button class="btn btn-sm btn-primary">Kayıt Ol</button>
            </div>
          </div>
          <div class="card-footer text-center">
            <router-link
              :to="{ name: 'LoginView' }"
              class="p-0 m-0 btn btn-link text-primary"
              >Zaten Üyeyim
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 