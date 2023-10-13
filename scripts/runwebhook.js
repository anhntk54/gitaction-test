const url = 'https://api.github.com/repos/[USERNAME]/[REPOSITORY]/dispatches';
const githubPAT = "GITHUB_PAT"; // keep this secret
await got.post(url, {
  json: {
    event_type: 'publish_blog',
  },
  headers: {
    Authorization: "token " + githubPAT,
  },
});
