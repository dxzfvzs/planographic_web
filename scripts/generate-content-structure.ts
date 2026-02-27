import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const subject = process.argv[2];

if (!subject) {
  console.error("Please provide subject name.");
  process.exit(1);
}

async function run() {
  const filePath = path.resolve(
    process.cwd(),
    "src",
    "content",
    `${subject}-content.ts`
  );

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const moduleUrl = pathToFileURL(filePath).href;
  const contentModule = await import(moduleUrl);

  const contentKey = Object.keys(contentModule).find(key =>
    key.toLowerCase().includes("content")
  );

  if (!contentKey) {
    console.error("No exported *Content array found.");
    process.exit(1);
  }

  const content = contentModule[contentKey];

  const BASE_DIR = path.resolve(process.cwd(), "public", subject);

  function ensureDir(dirPath: string) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log("📁 Created folder:", dirPath);
    }
  }

  function ensureFile(filePath: string, frontmatter: string) {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, frontmatter);
      console.log("📄 Created file:", filePath);
    }
  }

  ensureDir(BASE_DIR);

  for (const section of content) {
    const sectionDir = path.join(BASE_DIR, section.sectionSlug);
    ensureDir(sectionDir);

    for (const article of section.articles) {
      const mdPath = path.join(sectionDir, `${article.url}.md`);
      ensureFile(mdPath, "Prozatím tu nic není.");
    }
  }

  console.log("Done!");
}

run();
