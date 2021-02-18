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
        echo 'running unit tests'
      } 
    }
    stage('integration test') {
      steps {
        echo 'running integration tests Docker compose'
      } 
    }
  }  
  post {
    always {
      echo 'clean resources'     
    }
  }
}