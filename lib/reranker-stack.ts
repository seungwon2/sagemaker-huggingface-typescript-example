import { Construct } from 'constructs';
import { Stack, StackProps, Aws, CfnOutput } from 'aws-cdk-lib';
import { SageMakerInstanceType, HuggingFaceSageMakerEndpoint, DeepLearningContainerImage } from '@cdklabs/generative-ai-cdk-constructs';

export class RerankerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

  // Deploy a model supported by HuggingFace LLM Inference Container
  const RerankerEndpoint = new HuggingFaceSageMakerEndpoint(this, 'Reranker', {
    modelId: 'Dongjin-kr/ko-reranker',
    instanceType: SageMakerInstanceType.ML_G5_XLARGE,
    container:
    DeepLearningContainerImage.HUGGINGFACE_PYTORCH_INFERENCE_2_0_0_TRANSFORMERS4_28_1_GPU_PY310_CU118_UBUNTU20_04,
    endpointName: "reranker",
    environment: {
      HF_TASK: "text-classification"
    },
  });

  }
}
