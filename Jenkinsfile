pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('VERCEL_TOKEN') 
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'skipping test'  // If you have a build script
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'  // If you have a build script
            }
        }

        stage('Deploy to Vercel') {
            steps {
               bat 'npx vercel --prod --yes
                --token=%$VERCEL_TOKEN%'
    }
    }
    }
}