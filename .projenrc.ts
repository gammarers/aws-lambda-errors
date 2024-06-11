import { typescript, javascript } from 'projen';
const project = new typescript.TypeScriptProject({
  authorName: 'yicr',
  authorEmail: 'yicr@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-lambda-errors',
  description: 'aws lambda errors',
  repository: 'https://github.com/gammarers/aws-lambda-errors.git',
  projenrcTs: true,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 17 * * *']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();
