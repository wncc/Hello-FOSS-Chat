# Contributing Instructions

### Basic Instructions

- Change the branch from 'master' to 'development'
- Fork the 'development' branch into your personal github account
- Add your contribution to the code in the forked repository.
- Generate a Pull Request to 'development' branch of the project.
- Note that any PRs to 'master' branch will not be accepted 

### Understanding The Code

- Clone the fork of this repository on you local PC
- Make sure that you have 'Python 3' installed on your local PC
- Set up virtual environment in the project folder. Refer this [documentation](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)
- Install the packages mentioned in requirements.txt => pip install -r requirements.txt 
- After successful installation, you can run the flask app => py application.py
- Open your browser. The app will run on localhost => 127.0.0.1:5000

application.py - Flask application which holds the backend code of the chat application.

static\js\socketio.js - Javascript file that holds the client side code of the applciation 

templates\index.html - Homepage 

templates\login.html - Page that displays user details, conversations and channels

### Pull Request 

- Make all the necessary changes to the project and commit them to your fork
- Test the application on your local PC
- Generate a Pull Request from your fork to 'development' branch of wncc/Hello-FOSS-Dev
- An appropriate Title should be given to the PR. Also mention the issue id if working on existing issue.
- Mention in brief what changes you have done to the project. This should include purpose of your contribution, any package version changes(if any), addition of new files(if any), new algorithms used(if any).
- PRs with no proper documentation or contribution that does not count towards improvement of the project are bound to be considered invalid/spam.
