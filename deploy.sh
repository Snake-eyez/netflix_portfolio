#!/bin/bash

# Configuration
PROJECT_ID="your-project-id"  # Replace with your GCP project ID
SERVICE_NAME="netflix-portfolio"
REGION="us-central1"  # Change to your preferred region
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

echo "Building Docker image..."
docker build -t ${IMAGE_NAME} .

echo "Pushing image to Google Container Registry..."
docker push ${IMAGE_NAME}

echo "Deploying to Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image ${IMAGE_NAME} \
  --platform managed \
  --region ${REGION} \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --timeout 300 \
  --max-instances 10

echo "Deployment complete!"
echo "Your app should be available at the URL shown above."
