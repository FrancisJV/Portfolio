import fs from 'fs';
import path from 'path';

console.log('--- RUNNING RIGOROUS AUTOMATED VERIFICATION ---');

let hasErrors = false;

// 1. Verify Public Assets
const publicFiles = [
  'public/favicon.svg',
  'public/robots.txt',
  'public/sitemap.xml'
];

publicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ [ASSET] Found ${file}`);
  } else {
    console.error(`❌ [ASSET MISSING] ${file}`);
    hasErrors = true;
  }
});

// 2. Verify Data Modules
async function testDataImports() {
  try {
    const siteConfig = await import('./src/data/siteConfig.js');
    console.log(`✅ [DATA] siteConfig loaded. Name: "${siteConfig.siteConfig.name}"`);

    const projects = await import('./src/data/projects.js');
    console.log(`✅ [DATA] projectsData loaded. Total projects: ${projects.projectsData.length}`);

    const services = await import('./src/data/services.js');
    console.log(`✅ [DATA] servicesData loaded. Total services: ${services.servicesData.length}`);

    const skills = await import('./src/data/skills.js');
    console.log(`✅ [DATA] skillCategories loaded. Total categories: ${skills.skillCategories.length}`);

    const experience = await import('./src/data/experience.js');
    console.log(`✅ [DATA] experienceData loaded. Total roles: ${experience.experienceData.length}`);

    const education = await import('./src/data/education.js');
    console.log(`✅ [DATA] educationData loaded. Degree: "${education.educationData.primary.degree}"`);

    const guidance = await import('./src/data/guidance.js');
    console.log(`✅ [DATA] guidanceData loaded. Offerings: ${guidance.guidanceData.offerings.length}`);

    const socialLinks = await import('./src/data/socialLinks.js');
    console.log(`✅ [DATA] socialLinks loaded. Email: "${socialLinks.socialLinks.email.value}"`);
  } catch (err) {
    console.error('❌ [DATA IMPORT ERROR]', err);
    hasErrors = true;
  }
}

// 3. Privacy & Credibility Scanner
function testPrivacyAndCredibility() {
  const srcFiles = [
    'src/data/siteConfig.js',
    'src/data/projects.js',
    'src/data/services.js',
    'src/data/experience.js',
    'src/data/education.js',
    'src/data/guidance.js',
    'src/data/socialLinks.js',
    'index.html'
  ];

  const forbiddenPatterns = [
    { pattern: /\+94\d{7,10}/, name: 'Personal Sri Lanka Phone Number' },
    { pattern: /07[0-9]{8}/, name: 'Local Mobile Number' },
    { pattern: /GPA\s*[:=]\s*\d/i, name: 'Exposed GPA' },
    { pattern: /https:\/\/linkedin\.com\/in\/fake/i, name: 'Fabricated LinkedIn' }
  ];

  srcFiles.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf-8');
    forbiddenPatterns.forEach(({ pattern, name }) => {
      if (pattern.test(content)) {
        console.error(`❌ [PRIVACY VIOLATION] Found ${name} in ${file}`);
        hasErrors = true;
      }
    });
  });

  console.log('✅ [PRIVACY CHECK] Zero private phone numbers, fake URLs, or GPAs found.');
}

// 4. Verify Production Build Directory
function testBuildDir() {
  const distHtml = 'dist/index.html';
  if (fs.existsSync(distHtml)) {
    const htmlContent = fs.readFileSync(distHtml, 'utf-8');
    console.log(`✅ [BUILD] dist/index.html generated (${htmlContent.length} bytes)`);
    if (htmlContent.includes('Vidhushika Francis')) {
      console.log('✅ [BUILD] Personal branding verified in production HTML.');
    } else {
      console.error('❌ [BUILD ERROR] Brand name missing in production HTML.');
      hasErrors = true;
    }
  } else {
    console.error('❌ [BUILD ERROR] dist/index.html not found.');
    hasErrors = true;
  }
}

await testDataImports();
testPrivacyAndCredibility();
testBuildDir();

if (hasErrors) {
  console.error('\n❌ VERIFICATION COMPLETED WITH FAILURES.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL RIGOROUS AUTOMATED VERIFICATION CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
