import express from "express";
import * as pageController from "../controllers/pageContorller.js"; // ! pageController sayfasında export edilenler default olarak
// ! import edilmediğinden as kullanarak import edildi ve js uzantısıda kullanıldı.

const router = express.Router(); // ! yönlendirici

router.route("/").get(pageController.getIndexPage); // ! / isteği gelince pageControler dosyasındaki getIndexPage fonksiyonunu çalıştır.
router.route("/about").get(pageController.getAboutPage);
router.route("/index").get(pageController.getIndexPage);
router.route("/register").get(pageController.getRegisterPage);
export default router; 