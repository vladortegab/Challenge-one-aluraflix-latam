import "./Footer.css";

function Footer() {
  return (
    <footer class="footer__container">
      <div class="footer__line"></div>
      <div class="footer__information_company">
        <p>
          Copyright © 2023 VladFlix | All Rights Reserved | Vlad Web
          Education  Latam
        </p>
      </div>
      <h3 class="footer_myinformation">Diseñado por Vladimir Ortega</h3>
      <nav>
        <ul class="footer__social__media">
          <li class="footer__social_media__item">
            <a target="__blank" href="https://github.com/vladortegab">
              <i class="fab fa-github footer__social__media-item"></i>
            </a>
          </li>
          <li class="footer__social_media__item">
            <a target="__blank" href="https://www.linkedin.com/in/vlado-or/">
              <i class="fab fa-linkedin footer__social__media-item"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default  Footer;