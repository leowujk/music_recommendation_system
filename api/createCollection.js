export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name } = req.body;
  
      // 這裡可以加入更多邏輯來處理收藏的創建，例如保存到數據庫
      console.log('Creating collection:', name);
  
      // 模擬成功的響應
      res.status(200).json({ message: 'Collection created', name });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  