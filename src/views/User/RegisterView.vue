<script>
export default {
  name: "RegisterView",
  data: () => ({
    categoryList: [],
    // Userın etkileşime girdiği data
    userData: {
      full_name: null,
      email: null,
      password: null,
      categoryId: null,
    },
  }),
  methods: {
    fetchCategories() {
      this.$appAxios.get("/categories").then(({ data: categoryList }) => {
        console.log(categoryList);
        this.categoryList = categoryList || [];
      });
    },
    onSubmit() {
      // userdan gelen datayı parçalamak gerekli. 2 yol var 1) spread operator ile parçala. uzun iş 2) mixin kullan

      // const userData = {
      //   ...this.userData,
      // };

      // mixin
      const userData = this.copy(this.userData);
      this.$appAxios.post("/users", userData).then((user_save_response) => {
        console.log(user_save_response);
        this.$router.push("/HomeView");
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
                v-model="userData.full_name"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">E-posta adresi</label>
              <input
                type="email"
                class="form-control"
                placeholder="info@gmail.com"
                v-model="userData.email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Şifre</label>
              <input
                type="password"
                class="form-control"
                v-model="userData.password"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">İlgi Duyduğunuz Kategori</label>
              <select class="form-select" v-model="userData.categoryId">
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

            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button @click="onSubmit" class="btn btn-sm btn-primary">
                Kayıt Ol
              </button>
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