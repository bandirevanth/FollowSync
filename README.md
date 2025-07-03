# FollowSync: GitHub Follow-Back Checker

Ever wondered how many people you follow on GitHub **haven’t followed you back**?  
Sure, you could manually check... but that’s tedious.  
Instead, let’s automate it using the **GitHub API** and **JavaScript**!

---

## ✅ What This Script Does

This tool helps you:

- 🔍 Fetch your **followers** and **following** lists via GitHub API  
- 🔁 Identify users who **haven’t followed you back**
- 📊 Display both **mutual followers** and **non-followers**
- 🖥️ Run the script via **Node.js** or directly in the **browser console**

---

## 🔑 Step 1: Generate a GitHub Personal Access Token (PAT)

1. Go to [GitHub Token Settings](https://github.com/settings/tokens)
2. Click **"Generate new token"**
3. Select the scope: `read:user`
4. Copy and save the token (⚠️ it will only be shown once!)

---

## 📥 Step 2: Clone the Repository

```bash
git clone https://github.com/bandirevanth/followsync.git
cd followsync
```

## Step 4: Add Your GitHub Username and Token
Open `followsync.js` and replace the placeholders:

```javascript
const GITHUB_USERNAME = 'your-github-username'; // Replace with your GitHub username
const GITHUB_TOKEN = 'your-github-token'; // Replace with your GitHub Personal Access Token
```

and then

✅ Option 1: Run in Node.js
node github-follow-check.js

✅ Option 2: Run in Browser Console
Open GitHub and log in.
Press F12 to open the Developer Console.
Copy-paste the script above.
Press Enter to execute.

✅ Option 3: Use Live Server (VS Code extension)
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
2. Open the `index.html` file in VS Code.
3. Right-click and select "Open with Live Server"/"Go Live".

---

🎯 Expected Output
If some users haven't followed you back:

✅ These users have followed you back:
- user1
- user2
- user3

❌ These users haven't followed you back:
- user4
- user5
- user6
  
If everyone has followed you back:

✅ These users have followed you back:
- user1
- user2
- user3
- user4
  
🎉 Everyone you follow has followed you back!

---

## 🔥 Conclusion  
This GitHub Follow-Back Checker automates the tedious task of checking who hasn’t followed you back. It's a great example of using GitHub API, JavaScript, and Node.js together.

---

📌 Want more features? You can extend this script to:

Export data to CSV for easy tracking.
Send alerts via email/notification when someone unfollows you.
Build a web interface to visualize the data.
💡 Feel free to contribute to the project! Happy coding! 🚀
