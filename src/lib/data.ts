import fs from 'fs/promises';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/portfolio.json');

export async function getPortfolioData() {
  try {
    const fileContent = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading portfolio data:', error);
    // Return a default structure or null if the file doesn't exist or is invalid
    return null;
  }
}
