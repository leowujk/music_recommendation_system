export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { oldName, newName } = req.body;

    // 這裡可以加入更多邏輯來處理收藏的重新命名，例如更新數據庫
    console.log(`Renaming collection from ${oldName} to ${newName}`);

    // 模擬成功的響應
    res.status(200).json({ message: 'Collection renamed', oldName, newName });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
