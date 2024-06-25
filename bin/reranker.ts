#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RerankerStack } from '../lib/reranker-stack';

const app = new cdk.App();
new RerankerStack(app, 'RerankerStack');
