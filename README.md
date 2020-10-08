This repository contains a sample web application with Clickjacking vulnerabilities and its attacker website.

The application is used in the [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) article to explain how Clickjacking attacks work and how to fix those vulnerabilities 

---
### Technology

This project uses the following technologies:

-  [Node.js](https://nodejs.org/)

### Running the Application

To run this project, follow these steps:

1. Clone this repository (`git clone https://github.com/auth0-blog/clickjacking-sample-app.git`)

2. Move to the root folder of the project (`clickjacking-sample-app`) in your machine and install the dependencies by running the following command:

   ```shell
   npm install
   ```

3. To launch the web application, run the following command:

   ```shell
   npm start
   ```

4. Point your browser to [http://localhost:3000](http://localhost:3000) to access the sample web app.

5. To launch the attacker website, run the following command:

   ```shell
   node attacker-server.js
   ```

6. Point your browser to [http://localhost:4000](http://localhost:4000/) to access the attacker website



Please, read the [Clickjacking Attacks and How to Prevent Them](https://auth0.com/blog/preventing-clickjacking-attacks/) article to learn more about Clickjacking attacks and the techniques to prevent them.