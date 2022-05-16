<script>
export default {
  name: "AppHeader",
  data: () => ({
    menuOpened: false,
  }),
};
</script>



<template>
  <nav
    class="navbar navbar-dark navbar-expand-lg sticky-top"
    style="background-color: #8409de"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">QA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link active-class="active" :to="{ name: 'HomeView' }">
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kategoriler</a>
          </li>
        </ul>

        <div class="d-flex me-auto">
          <input
            class="form-control searchBox"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <router-link
          :to="{ name: 'LoginView' }"
          class="btn btn-outline-primary me-0 mb-2"
          >Giriş Yap
        </router-link>

        <ul class="navbar-nav me-0 mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              @click="menuOpened = !menuOpened"
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Depde Kandemir</a
            >
            <ul
              :class="{ show: menuOpened }"
              class="dropdown-menu"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'MyQuestionsView' }"
                  >Sorularım
                </router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'MyFavoritesView' }"
                  >Favorilerim
                </router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'MyAccountView' }"
                  >Hesabım
                </router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#">Çıkış Yap</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>