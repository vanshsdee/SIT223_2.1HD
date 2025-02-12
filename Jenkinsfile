pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = "my-node-backend"
        DOCKER_IMAGE_FRONTEND = "my-react-frontend"
        DOCKER_REGISTRY = "mydockerhubuser"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/your-username/my-project.git'
            }
        }

        stage('Build Backend') {
            steps {
                script {
                    echo "Building backend..."
                    dir('backend') {
                        sh 'npm install'
                        sh 'docker build -t $DOCKER_IMAGE_BACKEND .'
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    echo "Building frontend..."
                    dir('frontend') {
                        sh 'npm install'
                        sh 'npm run build'
                        sh 'docker build -t $DOCKER_IMAGE_FRONTEND .'
                    }
                }
            }
        }

        stage('Test Backend') {
            steps {
                script {
                    echo "Running backend tests..."
                    dir('backend') {
                        sh 'npm test'  // Modify based on your test framework
                    }
                }
            }
        }

        stage('Test Frontend') {
            steps {
                script {
                    echo "Running frontend tests..."
                    dir('frontend') {
                        sh 'npm test'  // Modify based on your frontend tests
                    }
                }
            }
        }

        stage('Code Quality Analysis') {
            steps {
                script {
                    echo "Running SonarQube Analysis..."
                    sh 'sonar-scanner -Dsonar.projectKey=my-project -Dsonar.host.url=http://localhost:9000'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Running Backend Container..."
                    sh 'docker run -d -p 5000:5000 $DOCKER_IMAGE_BACKEND'

                    echo "Running Frontend Container..."
                    sh 'docker run -d -p 3000:3000 $DOCKER_IMAGE_FRONTEND'
                }
            }
        }

        stage('Release') {
            steps {
                script {
                    echo "Pushing Docker images to Docker Hub..."
                    sh 'docker tag $DOCKER_IMAGE_BACKEND $DOCKER_REGISTRY/$DOCKER_IMAGE_BACKEND:latest'
                    sh 'docker tag $DOCKER_IMAGE_FRONTEND $DOCKER_REGISTRY/$DOCKER_IMAGE_FRONTEND:latest'
                    sh 'docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_BACKEND:latest'
                    sh 'docker push $DOCKER_REGISTRY/$DOCKER_IMAGE_FRONTEND:latest'
                }
            }
        }
    }
}
