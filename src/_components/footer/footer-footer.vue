<template>
  <div class="fds-footer">
    <div class="fds-footer__bd">
      <div class="fds-grid">
        <div class="fds-footer__primary fds-grid__1/1 fds-grid__9/12@l">
          <div class="fds-grid">
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Program Information</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item"><a to="/" target="_blank">About {{APP_ABBR_NAME}}</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">{{APP_ABBR_NAME}} - Handbook 1</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">{{APP_ABBR_NAME}} - Handbook 2</a></li>
              </ul>
            </div>
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Agency Guidelines</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item"><a href="/" target="_blank">Publications</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Handbooks</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Notices</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">FFAS Employee Forms</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Software Transmittals</a></li>
              </ul>
            </div>
            <div class="fds-grid__1/1 fds-grid__1/3@m">
              <h3 class="fds-footer__cat-header">Resources</h3>
              <ul class="fds-footer__list">
                <li class="fds-footer__list-item"><a href="/" target="_blank">Inside FPAC</a></li>
                <li class="fds-footer__list-item"><a href="/" target="_blank">Policies and Links</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fds-footer__secondary fds-grid__1/1 fds-grid__3/12@l">
          <ul class="fds-footer__list fds-footer__secondary-list">
            <li class="fds-footer__list-item fds-footer__secondary-list-item">
              <a class="fds-btn fds-footer__btn" href="/" target="_blank">Contact Us</a>
            </li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="tel:+8005551234" target="_blank">1-800-555-1234</a></li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="//www.fpacbc.usda.gov/" target="_blank">FPAC Website</a></li>
            <li class="fds-footer__list-item fds-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    APP_ABBR_NAME: String
  }
}
</script>