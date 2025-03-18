import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileRemover = async (filename) => {
  try {
    await fs.promises.unlink(path.join(__dirname, "../uploads", filename));
    console.log(`Removed ${filename}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`File ${filename} doesn't exist, won't remove it.`);
    } else {
      console.log(filename)
      console.log(__dirname)
      console.log(err.message);
      console.log(`Error occurred while trying to remove file ${filename}`);
    }
  }
};

export { fileRemover };



// const fileRemover = async (filename) => {
//   try {
//     if (!filename) {
//       console.log("⚠️ No filename provided");
//       return;
//     }

//     // فقط نام فایل رو بگیر
//     const filePath = path.join(
//       __dirname,
//       "../uploads",
//       path.basename(filename)
//     );
//     console.log(`🔎 Trying to remove: ${filePath}`);

//     // چک کن که مسیر فایل باشه نه دایرکتوری
//     const stats = await fs.promises.stat(filePath);
//     if (!stats.isFile()) {
//       console.log(`🚨 ${filePath} is not a file`);
//       return;
//     }

//     // حذف فایل با مجوز مناسب
//     await fs.promises.chmod(filePath, 0o666);
//     await fs.promises.unlink(filePath);

//     console.log(`✅ Removed: ${filename}`);
//   } catch (err) {
//     if (err.code === "ENOENT") {
//       console.log(`⚠️ File ${filename} doesn't exist`);
//     } else if (err.code === "EPERM") {
//       console.log(`🚫 Permission error`);
//     } else {
//       console.log(`❌ Error: ${err.message}`);
//     }
//   }
// };
// export { fileRemover };
