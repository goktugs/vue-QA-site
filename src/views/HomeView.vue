<script>
import CategoryList from "@/components/HomeView/CategoryList.vue";

export default {
  components: {
    CategoryList,
  },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <category-list />
      <!-- SORULAR -->
      <div class="col-10">
        <div class="card text-left mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title">Soru Başlığı</h5>
              <span>
                <i class="fa fa-heart text-primary"></i>
              </span>
            </div>
            <div class="mt-3">
              <p class="text-muted">Soru açıklaması burada yer alacaktır..</p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="custom-text-light">
                  <i class="fa fa-user-circle me-1"></i>
                  Admin Admin 15:00'de sordu
                </div>
                <div class="custom-text-light">Kategori Adı</div>
              </div>
            </div>
          </div>
          <div
            class="
              card-footer
              text-muted
              py-3
              question-footer
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <div>
              <span class="comment-container">
                <i class="custom-text-light fa fa-user-circle me-1"></i>
                <small class="text-dark">20 </small>
              </span>
              <span class="custom-seperator"> | </span>
              <small class="custom-text-light">1 ay önce cevaplandı</small>
            </div>
            <button
              @click="
                $router.push({ name: 'QuestionDetailView', params: { id: 1 } })
              "
              class="btn-sm btn btn-primary"
            >
              Soruyu görüntüle
            </button>
          </div>
        </div>
      </div>
      <div class="col-4 offset-3 mt-5">
        <div class="alert alert-primary" role="alert">
          Bu Kategori(lere) ait bir soru bulunamadı. Soru sormak için
          <a href="#">tıklayınız</a>
        </div>
      </div>
      <!-- !SORULAR -->
    </div>
  </div>
</template>