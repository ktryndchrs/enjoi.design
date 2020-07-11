const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'master',
    repo: 'git@github.com:ktryndchrs/enjoi.design.git',
    user: {
      name: 'ktryndchrs',
      email:  'catherine.desrochers@gmail.com'
    },
  },
  () => {
    console.log('Deploy Complete!')
  }
)