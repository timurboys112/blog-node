pipeline {
    agent any

    environment {
    }

    stages {

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/timurboys112/blog-node.git',
                    branch: 'main'
            }
        }

        stage('Inject ENV') {
            steps {
                withCredentials([file(credentialsId: 'env-file', variable: 'ENVFILE')]) {
                    bat '''
                    del .env 2>nul
                    copy "%ENVFILE%" .env
                    '''
                }
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