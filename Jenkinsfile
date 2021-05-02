pipeline {
    agent any
    stages {
        stage('audit tools') {
            steps {
                sh '''
                    docker -v
                    docker-compose -v
                '''
            }
        }
        stage('unit test') {
            agent any
            steps {
                echo 'run unit tests using Docker container base image'                
            }
        }
        stage('integration test') {
            steps {
                echo 'run integartion tests with Docker compose'
            }
        }
    }
    post {
        always {
            echo 'clean resources'
        }
    }
}