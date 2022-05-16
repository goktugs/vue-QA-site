<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-4 offset-4">
        <div class="card">
          <div class="card-header text-center">Hesap Detayları</div>
          <div class="card-body">
            <div class="mb-3">
              <label class="form-label">Ad Soyad</label>
              <input
                type="text"
                class="form-control"
                placeholder="Depde Kandemir"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">E-posta adresi</label>
              <input
                type="email"
                class="form-control"
                placeholder="info@kablosuzkedi.com"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">İlgi Duyduğunuz Kategori</label>
              <select class="form-select">
                <option selected>Lütfen bir kategori seçiniz</option>
                <option>Kategori Adı</option>
              </select>
            </div>
            <div class="mb-3 d-flex justify-content-end align-items-center">
              <button class="btn btn-sm btn-primary">Düzenle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>