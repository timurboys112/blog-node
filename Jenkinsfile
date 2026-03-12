pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/timurboys112/blog-node.git', branch: 'main'
            }
        }

        stage('Build Docker') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker compose down
                docker compose up -d --build
                docker ps
                '''
            }
        }

    }
}