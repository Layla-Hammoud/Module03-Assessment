import db from "../models/index.js";
import fs from "fs";
const { ArticleModel } = db;

const createArticle = async (request, response) => {
  let { title, category, body, author } = request.body;
  let image=null
  try {
    if (!request.file) {
      return res.status(400).json({ error: "Please upload an image" });
    } else {
      image = request.file.path;
    }

    const newArticle = await ArticleModel.create({
      title,
      category,
      body,
      author,
      image,
    });

    return response.status(201).json({
      message: "Article successfully created",
      success: true,
      data: newArticle,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
    });
  }
};

const updateArticle = async (request, response) => {
  try {
    const id = request.params.id;
    const { title, category, body, author } = request.body;

    const article = await ArticleModel.findByPk(id);
    if (!article) {
      return response.status(404).json({ message: "Article not found" });
    }
    let image = null;

    if (request.file) {
        let imagePath = request.file.path;
      if (article.image) {
        fs.unlink(article.image, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
      image = imagePath;
    }

    const editedArticle = await ArticleModel.update(
      {
        title,
        category,
        body,
        author,
        image,
      },
      {
        where: { id: id },
      }
    );
    return response
      .status(200)
      .json({ message: "Article updated successfully", data: editedArticle });
  } catch (error) {
    // If there's an error, delete the uploaded file (if it exists) to avoid saving incomplete data
    if (request.file) {
      fs.unlink(request.file.path, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        }
      });
    }
    return response.status(500).json({ message: error.message });
  }
};

const getArticles = async (request, response) => {
  try {
    const articles = await ArticleModel.findAll();

    return response.status(200).json({
      data: articles,
      success: true,
      message: "articles list",
    });
  } catch (error) {
    return response.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

const getArticle = async (request, response) => {
  const id = request.params.id;

  try {
    const article = await ArticleModel.findOne({ where: { id } });

    if (!article) {
      return response.status(401).json({ message: "article not found" });
    }

    return response.status(200).json({
      data: article,
      success: true,
      message: "article found",
    });
  } catch (error) {
    return response.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteArticle = async (request, response) => {
  try {
    const id = request.params.id;
    const article = await ArticleModel.findByPk(id);
    if (!article) {
      return { success: false, message: "article not found" };
    }
    await article.destroy();
    return response
      .status(200)
      .json({ success: true, message: "article deleted" });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export { deleteArticle, createArticle, getArticle, getArticles, updateArticle };
