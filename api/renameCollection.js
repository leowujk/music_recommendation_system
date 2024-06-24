// pages/api/renameCollection.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { oldName, newName } = req.body;

    const filePath = path.join(process.cwd(), `app/bookmarks-1/page.tsx`);
    
    try {
      // Read the existing file content
      let fileContent = await fs.promises.readFile(filePath, 'utf8');
      
      // Replace the old name with the new name in the file content
      const updatedContent = fileContent.replace(oldName, newName);
      
      // Write the updated content back to the file
      await fs.promises.writeFile(filePath, updatedContent, 'utf8');

      res.status(200).json({ message: 'Collection renamed successfully' });
    } catch (error) {
      console.error('Error renaming collection:', error);
      res.status(500).json({ error: 'Error renaming collection' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
