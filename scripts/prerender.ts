// scripts/prerender.ts
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  "/",
  "/blog",
  "/about",
  "/contact",
  "/get-started",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/blog/how-to-apply-internships-south-africa",
  "/blog/tvet-college-learnership-opportunities",
  "/blog/avoid-internship-learnership-scams",
  "/blog/top-internships-graduates-south-africa-2026",
  "/blog/interns-learnerships-pay-south-africa",
  "/blog/internship-application-mistakes-get-you-rejected",
  "/blog/what-to-do-if-rejected-internships",
  "/blog/learnership-placement-timeline-how-long-to-get-placed",
  "/blog/apply-for-multiple-internships-at-once-rules-explained",
  "/blog/after-completing-internship-learnership-what-happens",
  "/blog/prepare-for-internship-learnership-interviews",
  "/blog/age-limits-internships-learnerships-south-africa",
  "/blog/monthly-internship-learnership-application-calendar-2026-2027",
  "/blog/latest-learnerships-south-africa",
  "/blog/yes-programmes-explained-youth-employment-service",
  "/blog/difference-internships-learnerships-graduate-programmes",
  "/blog/government-learnerships-unemployed-youth",
  "/blog/best-companies-graduate-programmes-south-africa",
  "/blog/paid-vs-unpaid-internships-south-africa",
  "/blog/build-cv-internships-no-experience",
  "/internship/services-seta",
  "/internship/dept-tourism",
  "/internship/visa",
  "/internship/sa-govt",
  "/internship/mercedes-benz",
  "/internship/pernod-ricard",
  "/internship/unilever",
  "/internship/sanral",
  "/internship/mict-seta",
  "/internship/merseta",
  "/internship/wrseta",
  "/internship/bankseta",
  "/internship/uif-lap",
  "/internship/dept-agriculture",
  "/internship/learnme",
  "/internship/yes-learnership",
];

const BASE_URL = "http://localhost:4173";
const DIST_DIR = path.resolve(__dirname, "../dist");

async function prerender() {
  console.log("🚀 Starting prerender...");

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",                      // ✅ Required for Vercel
      "--disable-setuid-sandbox",          // ✅ Required for Vercel
      "--disable-dev-shm-usage",           // ✅ Prevents memory issues
      "--disable-gpu",                     // ✅ No GPU in CI
      "--no-first-run",
      "--no-zygote",
      "--single-process",                  // ✅ Helps in restricted environments
    ],
  });

  const page = await browser.newPage();

  for (const route of routes) {
    try {
      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      const html = await page.content();

      const routeDir = route === "/"
        ? DIST_DIR
        : path.join(DIST_DIR, ...route.split("/").filter(Boolean));

      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");

      console.log(`✅ ${route}`);
    } catch (err) {
      console.error(`❌ Failed: ${route}`, err);
    }
  }

  await browser.close();
  console.log("✅ Prerender complete!");
}

prerender();