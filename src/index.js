const https = require('https')
const fs = require('fs');
const Game = require('./game')
const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

const username = core.getInput('user');
const gitHubToken = core.getInput('token');
const gistsDescription = "Gists for FollowerPlace"

const octokit = new Octokit({
  auth: gitHubToken
});

const options = {
  host: 'api.github.com',
  path: `/users/${username}/followers`,
  method: 'GET',
  headers: { 'user-agent': username }
}

https.get(options, (resp) => {
  let data = ''
  resp.on('data', (chunk) => {
    data += chunk
  })

  resp.on('end', async () => {
    const followers = JSON.parse(data).map((follower) => follower.login)
    const gameInstance = new Game({ followers })
    const gameSvg = gameInstance.run()

    const allGists = await octokit.gists.listForUser({ username });

    const gistsToDelete = allGists.data.filter(gist => gist.description == gistsDescription);
    
    if (gistsToDelete.length > 0) {
      await octokit.gists.update({
        gist_id: gistsToDelete[0].id,
        files: {
          "followerplace.svg": {
            content: gameSvg
          }
        },
      }).then(response => {
        console.log(`Gist atualizado: ${response.data.html_url}`);
      }).catch(error => {
        console.error('Erro ao atualizar o Gist:', error);
      });;
    } else {
      octokit.gists.create({
        files: {
          "followerplace.svg": {
            content: gameSvg
          }
        },
        public: true,
        description: gistsDescription
      }).then(response => {
        console.log(`Gist criado: ${response.data.html_url}`);
      }).catch(error => {
        console.error('Erro ao criar o Gist:', error);
      });
    }
  })
})
