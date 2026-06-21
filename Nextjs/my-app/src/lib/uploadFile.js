import fs from "fs";
import path from "path";

export async function uploadsFile(file) {
  const uploadDir = path.join(process.cwd(), "public/uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const fileName = Date.now() + "-" + file.name;

  const filePath = path.join(uploadDir, fileName);

  fs.writeFileSync(filePath, buffer);

  return `/uploads/${fileName}`;
}