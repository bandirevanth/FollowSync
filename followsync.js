const GITHUB_USERNAME = "your-username"; // 🔹 Replace with your GitHub username
const GITHUB_TOKEN = "your-personal-access-token"; // 🔹 Replace with your GitHub token

const API_URL = "https://api.github.com";

async function fetchGitHubData(endpoint) {
    let users = [];
    let page = 1;

    while (true) {
        const response = await fetch(`${API_URL}/users/${GITHUB_USERNAME}/${endpoint}?per_page=100&page=${page}`, {
            headers: { Authorization: `token ${GITHUB_TOKEN}` }
        });

        if (!response.ok) {
            console.error(`Error fetching ${endpoint}:`, response.statusText);
            return [];
        }

        const data = await response.json();
        if (data.length === 0) break;

        users = users.concat(data.map(user => user.login));
        page++;
    }
    return users;
}

async function checkFollowBack() {
    const following = await fetchGitHubData("following");
    const followers = await fetchGitHubData("followers");

    const notFollowingBack = following.filter(user => !followers.includes(user));
    const followingBack = following.filter(user => followers.includes(user));

    console.log("\n✅ These users have followed you back:");
    followingBack.forEach(user => console.log(`- ${user}`));

    console.log("\n❌ These users haven't followed you back:");
    if (notFollowingBack.length > 0) {
        notFollowingBack.forEach(user => console.log(`- ${user}`));
    } else {
        console.log("🎉 Everyone you follow has followed you back!");
    }
}

checkFollowBack();
