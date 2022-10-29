pipeline {
    agent any

    stages {
        stage('npm build') {
            when {
                branch 'master'
            }
            steps {
                echo 'Building npm modules...'
                sh 'npm install'
            }
        }
        stage('run app') {
            steps {
                echo 'Deploying application...'
                sh 'git push heroku master'
            }
        }
    }
}
