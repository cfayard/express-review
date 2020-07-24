console.log("Before");
getUser(1, getRepositories);
console.log("After");

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({
        id: id,
        gitHubUsername: "cfayard",
      });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["commit"]);
    }, 2000);
  });
}
