async function fetchGitHubData(username, token, endpoint) {
  let users = [];
  let page = 1;

  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${username}/${endpoint}?per_page=100&page=${page}`,
      {
        headers: {
          Authorization: `token ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }

    const data = await response.json();
    if (data.length === 0) break;

    users = users.concat(data.map(user => user.login));
    page++;
  }

  return users;
}

async function checkFollowBack() {
  const username = document.getElementById('username').value.trim();
  const token = document.getElementById('token').value.trim();
  const output = document.getElementById('output');

  if (!username || !token) {
    output.innerHTML = `
      <p style="color: var(--warning);">
        ❗ Please provide both username and token.
      </p>`;
    return;
  }

  output.innerHTML = '⏳ Fetching data, please wait...';

  try {
    const following = await fetchGitHubData(username, token, 'following');
    const followers = await fetchGitHubData(username, token, 'followers');

    const notFollowingBack = following.filter(
      user => !followers.includes(user)
    );
    const followingBack = following.filter(
      user => followers.includes(user)
    );

    output.innerHTML = `
  <h3>✅ Users who followed you back:</h3>
  <ul>
    ${followingBack.map(user => `<li>${user}</li>`).join('')}
  </ul>

  <h3>❌ Users who haven't followed you back:</h3>
  <ul>
    ${
      notFollowingBack.length > 0
        ? notFollowingBack.map(user => `<li>${user}</li>`).join('')
        : '<li>🎉 Everyone followed you back!</li>'
    }
  </ul>

  <button id="downloadBtn" style="margin-top: 1rem;">📥 Download CSV</button>
`;

document.getElementById("downloadBtn").onclick = () => {
  downloadCSV(followingBack, notFollowingBack);
};

  } catch (error) {
    output.innerHTML = `
      <p style="color: var(--warning);">
        ❌ ${error.message}
      </p>`;
  }
}

function downloadCSV(followingBack, notFollowingBack) {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "✅ Users Who Followed Back:\n";
  csvContent += followingBack.join(",") + "\n\n";
  csvContent += "❌ Users Who Didn't Follow Back:\n";
  csvContent += notFollowingBack.join(",");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "github-follow-check.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
