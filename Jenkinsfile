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
            steps {
                sh 'npm install'             
                sh 'npm test'
            }
        }
        stage('integration test') {
            steps {
                echo 'run integration tests with Docker compose'
                sh 'docker-compose -f test-integration.yml up -d'
                script {
                    def status = sh(script: 'docker wait test-integration', returnStdout: true)
                    println status
                }
            }
        }
    }
    post {
        always {
            echo 'clean resources'
            sh 'docker-compose -f test-integration.yml down --rmi all -v'
            cleanWs()
        }
    }
}