import express from "express";
import { deleteArticle, createArticle, getArticle, getArticles,updateArticle } from '../controllers/article.js'
import { upload } from '../middleware/multer.js';

const ArticleRouter = express.Router();

ArticleRouter.get("/", getArticles);

ArticleRouter.get("/:id", getArticle);

ArticleRouter.post("/",upload.single("image"), createArticle);

ArticleRouter.delete("/:id", deleteArticle);

ArticleRouter.patch("/:id",upload.single("image"), updateArticle);

 export default ArticleRouter