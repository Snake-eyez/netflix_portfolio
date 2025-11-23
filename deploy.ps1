# Configuration
$PROJECT_ID = "your-project-id"  # Replace with your GCP project ID
$SERVICE_NAME = "netflix-portfolio"
$REGION = "us-central1"  # Change to your preferred region
$IMAGE_NAME = "gcr.io/$PROJECT_ID/$SERVICE_NAME"

Write-Host "Building Docker image..." -ForegroundColor Green
docker build -t $IMAGE_NAME .

Write-Host "Pushing image to Google Container Registry..." -ForegroundColor Green
docker push $IMAGE_NAME

Write-Host "Deploying to Cloud Run..." -ForegroundColor Green
gcloud run deploy $SERVICE_NAME `
  --image $IMAGE_NAME `
  --platform managed `
  --region $REGION `
  --allow-unauthenticated `
  --port 8080 `
  --memory 512Mi `
  --timeout 300 `
  --max-instances 10

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your app should be available at the URL shown above." -ForegroundColor Cyan
