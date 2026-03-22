const githubApi = async () => {
  const actionsUrl = `https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/runs/23373748158`
  const workflowsUrl = `https://api.github.com/repos/ayush8116-tech/chat-app-project/actions/workflows/247722705`
  return await fetch(actionsUrl);
}

githubApi()
.then(async (res) => {
  const body = await res.json();
  return body 
})
.then(console.log)
