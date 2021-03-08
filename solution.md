### Installation & Configuration

#### Running the Application

1. Install [Node.js](https://nodejs.org/en/) 
1. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/)
1. From within this root directory, run `yarn install`
1. Launch the application with `yarn start`

#### Configuring the Application

There is a `.env` file in the root directory which will allow you to:

* Specify the port of this web application
* Specify the Count API namespace
* Specify the Count API key

### Approach

I love coding assignments that are a little more freeform in their requirements and allow candidates to let loose and
build something. With that in mind, I went ahead and reached for
[Create React App](https://reactjs.org/docs/create-a-new-react-app.html) as a method for getting a Web UI quickly off
the ground. 

From a functionality and presentation standpoint, I completed the challenge in a little over two hours. I then spent a
quick 30 minutes tidying up the repository and documenting. 

### Assumptions

Two hours can go by pretty fast, even for such a simple web application. I don't like to submit projects that aren't
completely well-rounded but in staying true to the rough time limit I found that there would need to be trade-offs on
where I could sink my time. I chose to focus on the presentational aspect of the application, rather than on the
"productionizing" facets - testing, error handling, Dockerization, and everything else below in the next section. These
areas are important to a real application, and while not always trivial, are fairly boilerplate. Sticking with the
scenario in the assignment's introduction, if we were shopping a PoC to potential client they would have a more
immediate concern for how the application felt, rather than its unit test coverage numbers or the ease of deployment.

**Other Notes**
* I'm not always a fan of micro-dependencies, but I brought in the animating count dependency as opposed to sinking a
chunk of my time creating something similar

### Future Features

* Error handling for API failures (network down, bad API key)
* Responsive design
* Unit tests
* Accessibility considerations
* Move the get/hit logic out of the render function of CountInfo into a more app-wide context
* Configuration option to set an initial count for a namespace