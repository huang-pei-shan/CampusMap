// 將此檔案另存為 config.js 並填入你的值（放在 index.html 同目錄）
// 注意：如果你把 config.js 提交到公開 repo，檔案內容會公開。
// 對於 GitHub Pages，通常會把這種檔案加入 .gitignore 或不放入 repo。
// export const SUPABASE_URL = 'https://mfljkyvdadxlrbxlboce.supabase.co';
// export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbGpreXZkYWR4bHJieGxib2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTQwMDUsImV4cCI6MjA4MDM5MDAwNX0.Z4OeacVpO8yM1d1uOWZ6jU2Gl7wgEbhXvAFSqF5pBRs';

<script type="module">
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// config.js
// ⚠ 記得改成你自己的 Supabase 專案 URL 與 anon 公鑰
export const SUPABASE_URL = "https://mfljkyvdadxlrbxlboce.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbGpreXZkYWR4bHJieGxib2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTQwMDUsImV4cCI6MjA4MDM5MDAwNX0.Z4OeacVpO8yM1d1uOWZ6jU2Gl7wgEbhXvAFSqF5pBRs";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentSortColumn = null;
let currentSortDirection = 'asc';

async function loadData(sortBy = null, ascending = true) {
  let query = supabase.from('your_table').select('*');

  if (sortBy) {
    query = query.order(sortBy, { ascending });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return;
  }

  renderTable(data);
}

function renderTable(data) {
  const tbody = document.querySelector('#data-table tbody');
  tbody.innerHTML = '';

  data.forEach(row => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${row.col1}</td>
      <td>${row.col2}</td>
      <td>${row.col3}</td>
      <td>${row.col4}</td>
      <td>${row.col5}</td>
      <td>${row.col6}</td>
      <td>${row.col7}</td>
    `;

    tbody.appendChild(tr);
  });
}

document.querySelectorAll('#data-table thead th').forEach(th => {
  th.addEventListener('click', () => {
    const sortColumn = th.dataset.sort;

    if (currentSortColumn === sortColumn) {
      // 點第二次反向排序
      currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // 選新的欄位
      currentSortColumn = sortColumn;
      currentSortDirection = 'asc';
    }

    loadData(currentSortColumn, currentSortDirection === 'asc');
  });
});

// 初始化載入
loadData();

</script>

