#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Dhyey8965482CdkProjectStack } from '../lib/dhyey8965482-cdk-project-stack';

const app = new cdk.App();

new Dhyey8965482CdkProjectStack(app, 'Dhyey8965482Stack', {
  env: {
    account: '904027817250',
    region: 'us-east-1',
  },
});
