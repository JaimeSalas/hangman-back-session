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
        sh 'npm install'
        sh 'npm test'
      } 
    }
    stage('integration test') {
      steps {
        echo 'running integration tests Docker compose'
        sh 'docker-compose -f test-integration.yml up -d'
        script {
          def status = sh(script: 'docker wait test-integration', returnStdout: true)
          def statusInt = status.toInteger()
          if (status != 0) {
              throw new Exception("Itegration test failed you can debug by removing d flag")
          }
        }
      } 
    }
  }  
  post {
    always {
      echo 'clean resources'
      sh 'docker-compose -f test-integration.yml down --rmi all -v'
      // cleanWs()   
    }
  }
}