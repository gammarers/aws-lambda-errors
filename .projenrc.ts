import { typescript } from 'projen';
const project = new typescript.TypeScriptProject({
  authorName: 'yicr',
  authorEmail: 'yicr@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: '@yicr/aws-lambda-errors',
  description: 'aws lambda errors',
  repository: 'https://github.com/yicr/aws-lambda-errors.git',
  projenrcTs: true,
  releaseToNpm: false,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '16.19.1',
});
project.synth();
