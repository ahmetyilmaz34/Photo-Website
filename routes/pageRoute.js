import express from "express";
import * as pageController from "../controllers/pageContorller.js"; // ! pageController sayfasında export edilenler default olarak
// ! import edilmediğinden as kullanarak import edildi ve js uzantısıda kullanıldı.
import * as authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router(); // ! yönlendirici

router.route("/").get(authMiddleware.authenticateToken, pageController.getIndexPage); // ! / isteği gelince pageControler dosyasındaki getIndexPage fonksiyonunu çalıştır.
router.route("/about").get(pageController.getAboutPage);
router.route("/index").get(pageController.getIndexPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/login").get(pageController.getLoginPage);
export default router; 