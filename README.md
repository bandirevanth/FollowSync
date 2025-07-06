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

---

## 🔑 Step 1: Generate a GitHub Personal Access Token (PAT)

1. Go to [GitHub Token Settings](https://github.com/settings/tokens)
2. Click **"Generate new token (Choose the classic one)"**
3. Select the scope: `read:user`
4. Copy and save the token (⚠️ it will only be shown once!)

## Step 2: Visit the website
https://followsync.onrender.com
1. Enter your GitHub username.
2. Enter your GitHub API key
3. View the results and export them as a CSV file, if desired.

---

### 🎯 Expected Output  
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
This tool automates the tedious task of checking who hasn’t followed you back. It's a great example of using the GitHub API and JavaScript together.

---

💡 Feel free to contribute to the project! Happy coding! 🚀  
Hope you give me a star and a follow...
