# Checkout pricing service

## Installation

To use this service, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)
- [Bower](https://bower.io/)

This service uses a gulp-powered workflow.

### Using the CLI

Install the Foundation CLI with:

```bash
npm install foundation-cli --global
```

Install the required dependencies:

```bash
npm install
bower install
```

Compile the source files and start a local server:

```bash
gulp
```

If you have the Foundation CLI installed, you can also use:

```bash
foundation watch
```

 The service will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

## About the service
This is a very basic service built to meet the requirements of a code test for the Digital Transformation Agency. Users can add or remove items to or from a 'cart'. Products and prices use a pricing guide supplied via JSON from [http://api.myjson.com/bins/gx6vz](http://api.myjson.com/bins/gx6vz).
## Rationale
I built the service in the simplest way I could imagine using technologies and tools I am most comfortable with. I used the Foundation framework to bootstrap the service and provide styling and templates, and jQuery to script the service.

Given the parameters of the test, I believe  building the service  quickly without providing anything outside  the brief would be the best approach. As a result the code is straightforward, lightweight and does not rely on any external dependencies.

Following the Digital Service Standard, the service is ready for user testing. The simplicity of the code allows it to be quickly iterated over and gulp allows on-the-fly changes to be made to reflect user requirements.
## Future improvements
Given time constraints, products and pricing are hard-coded. However, it would be very simple to dynamically create the service using the supplied JSON file directly without making substantial changes to the HTML or script.

The service could be rebuilt using Angular or similar to provide a more robust framework for a production environment and end-to-end testing.

The service could communicate with a back end for payment and other merchant functions by adding a function to build a JSON object from the user's selections. This object would provide the required data to a back end. Event listeners are already provided in the code upon clicking the 'Buy it' button. 
