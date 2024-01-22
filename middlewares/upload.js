import multer from "multer";
import path from "path";
import { HttpError } from "../helpers/index.js";

const destination = path.resolve("tmp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, callback) => {
    callback(null, file.originalname);
    // filename: (req, file, callback) => {
    //   const uniquePrefix = `${nanoid()}`;
    //   const filename = `${uniquePrefix}-${file.originalname}`;
    //   callback(null, filename);
  },
});

const limits = { fileSize: 1024 * 1024 * 6 };
const fileFilter = (req, file, callback) => {
  const extention = req.originalname.split(".").pop();
  if (extention === "exe") {
    callback(HttpError(400, ".exe not valid extention"));
  }
};

const upload = multer({
  storage,
  limits,
  //   fileFilter,
});

export default upload;
