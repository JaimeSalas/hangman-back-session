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
  }  
}