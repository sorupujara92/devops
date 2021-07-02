node {

    // reference to maven
    // ** NOTE: This 'maven-3.6.1' Maven tool must be configured in the Jenkins Global Configuration.
    def mvnHome = tool 'maven-3.6.1'
    // holds reference to docker image
    def dockerImage
    // ip address of the docker private repository(nexus)

    def dockerRepoUrl = "https://hub.docker.com/repository/docker/souravpujara/devops"
    def dockerImageName = "souravpujara/devops"
    def dockerImageTag = "${dockerImageName}:${env.BUILD_NUMBER}"
    def branchName = "${env.BRANCH_NAME}"
    stage('Clone Repo') { // for display purposes
      // Get some code from a GitHub repository
     git changelog: false, poll: true, branch: 'sourav_devops', url: 'https://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@github.com/zemoso-int/devops-bootcamp-9.git'
      // Get the Maven tool.
      // ** NOTE: This 'maven-3.6.1' Maven tool must be configured
      // **       in the global configuration.
      mvnHome = tool 'maven-3.6.1'
    }
    stage('Build Project') {
      // build project via maven
      dir("./backend/task-management/") {
          sh "pwd"
          sh "rm -rf  /opt/app/task-management*jar"
          sh "'${mvnHome}/bin/mvn' -Dmaven.test.failure.ignore clean package"
      }
    }

	stage('Publish Tests Results'){
      parallel(
        publishJunitTestsResultsToJenkins: {
          echo "Publish junit Tests Results"
		  junit '**/target/surefire-reports/TEST-*.xml'
		  archive 'target/*.jar'
        },
        publishJunitTestsResultsToSonar: {
          echo "This is branch b"
          echo "${branchName}"
      })
    }

 //   if("${branchName}" == 'sourav_devops'){

    stage('Build Docker Image') {
      // build docker image
      dir("./backend/task-management/") {
                     sh "whoami"
                     sh "ls -all /var/run/docker.sock"
                     dockerImage = docker.build("souravpujara/devops:${env.BUILD_NUMBER}")
      }
    }

    stage('Deploy Docker Image'){
     echo "Docker Image Tag Name: ${dockerImageTag}"
      docker.withRegistry( '', 'dockerhub' ) {
            sh "docker push souravpujara/devops:${env.BUILD_NUMBER}"
      }
    }
    stage('Remove Docker Image'){
          sh "docker rmi --force souravpujara/devops:${env.BUILD_NUMBER}"
     }
  //   }
}
