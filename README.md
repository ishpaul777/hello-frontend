<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)


<!-- PROJECT DESCRIPTION -->

# 📖 Hello World App <a name="about-project"></a>

> This is a React Hello World App the loads a list of greetings from the backend in a frontend page.

### Backend Repo - [Hello Rails Backend](https://github.com/ishpaul777/hello-backend)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

- JavaScript
- React
- Redux

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Loads a greetings from the backend in a frontend page.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Ruby runtime environment.
  > If you dont have installed on your computer, you can download it from [here](https://www.ruby-lang.org/en/downloads/).
- PostgreSQL.
  > If you dont have PostgreSQL installed on your computer, you can download it from [here](https://www.postgresql.org/download/).
- Rails.
  > If you dont have Rails installed on your computer, you can download it from [here](https://rubyonrails.org/).
- Node.js.
	> If you dont have Node.js installed on your computer, you can download it from [here](https://nodejs.org/en/download/).

### Setup

If you have installed git you can clone the code to your machine, or download a ZIP of all the files directly.

Download the ZIP , or run the following git command to clone the files to your machine:
- Clone the Backend Repo
```bash
git clone git@github.com:ishpaul777/hello-backend.git
```
- Clone the Frontend Repo
```bash
git clone git@github.com:ishpaul777/hello-frontend.git
```

### Install
Once the files are on your machine

- open the backend folder in your code editor. Run the following command in your terminal to install the required gems and run the application:

Install gem packages with:

```bash
bundle install
```

- Open the `config/database.yml` file in the project directory and change the username and password to your PostgreSQL username and password. Edit the default section of the file to look like this:

```rb
 default: &default
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: <your PostgreSQL role username>
  password: <your PostgreSQL role password>
```

- Create the database with:

```bash
rails db:create
```

- Run the migrations with:

```bash
rails db:migrate
```

- Finally, run the server with:

```bash
bin/dev
```

- open the frontend folder in your code editor. Run the following command in your terminal to install the required gems and run the application:

Install npm packages with:

```bash
npm install
```

- Run the application with:

```bash
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Ishpaul Singh**

- GitHub: [@ishpaul777](https://github.com/ishpaul777)
- Twitter: [@ishpaul777](https://twitter.com/ishpaul777)
- LinkedIn: [LinkedIn](https://linkedin.com/in/ishpaul777)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project give it a ⭐️!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank Microverse for the idea of this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
