export const dbData = {
	"topics": [
		{
			"name": "Angular",
			"courses": [
				{
					"url": "getting-started-with-angular2",
					"description": "Angular Tutorial For Beginners",
					"longDescription": "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
					"numberOfLessons": "13",
					"totalDuration": "46:29",
					"lessons": [
						{
							"description": "Build Your First App - Hello World Step By Step",
							"duration": "2:49",
							"longDescription": "This is step by step guide to create your first Angular application. Its aimed at beginners just starting out with the framework.This lesson will show how to create a component, and how to link the component to a given custom HTML tag. It will show how to give the component a given template.",
							"tags": "BEGINNER",
							"url": "angular2-hello-world-write-first-application"
						},
						{
							"description": "Building Your First Angular Component - Component Composition",
							"duration": "2:07",
							"longDescription": "In this lesson we are going to see how to include a component inside another component. We are going to create a simple search box component and include it in our main application.",
							"tags": "BEGINNER",
							"url": "angular2-build-your-first-component"
						},
						{
							"description": "Component @Input - How To Pass Input Data To an Angular Component",
							"duration": "2:33",
							"longDescription": "In this lesson we are going to learn how to use the Angular template syntax for properties, and learn how we can use it to pass input data to a component. We are going to see also a simplified input syntax for passing constant strings as component inputs.",
							"tags": "BEGINNER",
							"url": "angular2-passing-data-to-component-using-input"
						},
						{
							"description": "Angular Component Events - Using @Output to create custom events",
							"duration": "4:44",
							"longDescription": "In this lesson we are going to see how components can emit custom events via EventEmitter and the @Output decorator. We are going to see how we can subscribe to standard browser events, and how the syntax for that is exactly the same as in the case of custom component events. We will also learn how Typescript literals can be used to output variables inside template strings.",
							"tags": "BEGINNER",
							"url": "angular2-component-events"
						},
						{
							"description": "Angular Component Templates - Inline Vs External",
							"duration": "2:55",
							"longDescription": "In this lesson we are going to learn how a component template can be defined both inline and in an external file. We are going to learn how to configure the component so that Angular can find the template at the correct location, using the module commonjs variable. We are going to learn also some best practices for component naming, from the official Angular Style Guide.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-component-templates-internal-vs-external"
						},
						{
							"description": "Styling Angular Components - Learn About Component Style Isolation",
							"duration": "3:27",
							"longDescription": "In this lesson we are going to learn how components can be styled using both inline styles and an external css file. We will learn some more best practices on file naming. We will learn how the mechanism for style isolation works in Angular.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-components-styling-component-isolation"
						},
						{
							"description": "Angular Component Interaction - Extended Components Example",
							"duration": "9:22",
							"longDescription": "In this lesson we are going to put together all that we have learned so far about components to create a more complex example. We are going to create two components: a color picker and a color previewer and see how they can interact.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-components-component-interaction"
						},
						{
							"description": "Angular Components Tutorial For Beginners - Components Exercise !",
							"duration": "1:26",
							"longDescription": "In this video we are going to present an exercise for putting in practice the several concepts that we have learned so far about components.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-components-exercise"
						},
						{
							"description": "Angular Components Tutorial For Beginners - Components Exercise Solution Inside",
							"duration": "2:08",
							"longDescription": "This video contains the solution for the introduction to components exercise.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-components-exercise-solution"
						},
						{
							"description": "Angular Directives - Inputs, Output Event Emitters and How To Export Template References",
							"duration": "4:01",
							"longDescription": "Angular Components are actually simply just Directives. All the functionality that we have learned so far about Components also applies to Directives. In this lesson we are going to learn how to Directives can also have inputs and outputs, and how the use of the decorators @Input and @Output also applies to directives. We are also learn a new functionality for exporting a template reference for the directive itself into the template on which the directive is being used.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-directives-inputs-outputs-event-emitters"
						},
						{
							"description": "Angular Core Directives  - ngFor",
							"duration": "3:46",
							"longDescription": "This is an overview on the ngFor core directive, how it works and some common use cases on how it should be used to build templates. It demonstrates how ngFor can be used with any iterable and not only arrays, and how to use together with other mechanisms of the framework like @ContentChildren.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-core-directives-ngfor"
						},
						{
							"description": "Angular Core Directives - ngClass and ngStyle",
							"duration": "3:15",
							"longDescription": "This lesson is an overview on how to use the ngClass and ngStyle Directives, when to use which, and alternative syntax in case we only to modify one property/style.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-core-directives-ngclass-ngstyle"
						},
						{
							"description": "Angular Core Directives - ngIf",
							"duration": "3:56",
							"longDescription": "This lesson covers the use of the core directive ngIf, as well as two other alternative way of showing or hiding elements from the DOM: the hidden property and the visibility CSS property.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-core-directives-ngIf"
						}
					]
				},
				{
					"url": "angular2-http",
					"description": "Angular HTTP and Services",
					"longDescription": "Build Services using Observables, learn to use the HTTP module effectively",
					"numberOfLessons": "15",
					"totalDuration": "1:06:52",
					"lessons": [
						{
							"description": "What is an Observable ? Introduction to Streams and RxJs Observables",
							"duration": "5:41",
							"longDescription": "In this lesson we are going to present a couple of baseline concepts that are essential for being able to build service layers in Angular: we will introduce the notions of stream and Observable. We are going to understand that these are two  different concepts: an Observable is not a stream. During the lesson we will write our first Observable and we will learn one of the main properties of Observables: that they are inherently inert, and that we need to subscribe to them in order for them to work. We are also going to introduce our first RxJs operator: the do operator which should only be used for debugging purposes as it introduces side effects.",
							"tags": "BEGINNER",
							"url": "angular2-what-is-an-observable"
						},
						{
							"description": "Observables Error Handling and Completion - How do Observables handle Errors?",
							"duration": "5:28",
							"longDescription": "In this lesson we are going to present two other foundation concepts of Observables: error handling and completion. We are going to initially call our backend server using the browser Fetch API, which is promises based. We will then learn how to create an Observable from a promise, and see how and why an observable is a good way to model a network call. We will learn about some advantages of Observables vs Promises.",
							"tags": "BEGINNER",
							"url": "angular2-observables-error-handling-and-completion-network-calls-as-observables"
						},
						{
							"description": "How does Angular HTTP use Observables ? The HTTP Response object",
							"duration": "4:32",
							"longDescription": "In this lesson we are going to learn the relation between the Angular HTTP module and Observables, and how its essential to understand Observables in order to do even the most common backend-communication tasks using the HTTP module. We are going to learn how Angular HTTP models network responses using Observables, and how completion is handled.",
							"tags": "BEGINNER",
							"url": "how-does-angular2-use-observables-http-response-object"
						},
						{
							"description": "How to use Observables and HTTP to build a Service Layer",
							"duration": "4:32",
							"longDescription": "In this lesson we are going to learn how to use Angular HTTP to build the service layer of our application. We are going to learn how to build strongly typed services and we are going to learn how the service layer can be designed around the notion of Observables.",
							"tags": "BEGINNER",
							"url": "angular2-how-to-use-observables-and-http-to-build-a-servicelayer"
						},
						{
							"description": "Introduction to Functional Reactive Programming - Using the Async Pipe - Pitfalls to Avoid",
							"duration": "4:36",
							"longDescription": "In this lesson we are going to do an introduction to Functional Reactive Programming, and we are going to see how an application can be built around the notion of Observables. We are going to see how programs can be build with very little state variables, and how data can be passed on from Observables directly to templates by using the Async Pipe. We are going to learn also why in some cases its not a good idea to call the service layer directly from a template expression - this is a pitfall to avoid.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-how-to-use-the-async-pipe-to-pass-observables-into-a-template"
						},
						{
							"description": "The RxJs Map Operator - How to create an Observable from another Observable",
							"duration": "3:04",
							"longDescription": "In this lesson we are going to learn one of the key concepts about Observables: we can easily derive new Observables from existing Observables using the many RxJs operators available to us. In this lesson we are going to create an Observable from another Observable by using the RxJs map operator.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-observable-map-operator-how-to-create-an-observable-from-another"
						},
						{
							"description": "Observable Composition - combine multiple Observables Using combineLatest",
							"duration": "5:59",
							"longDescription": "In this lesson we are going to learn that Observables can be combined with other Observables. In this case we are going to create an Observable of mouse moves that only emits if the mouse is bellow a certain region of the page. We are also going to create an Observable of mouse clicks, that emits if the user clicks anywhere on the page - both of these Observables will be created using fromEvent. We will then combine these two Observables to create third Observable using the RxJs combineLatests operator.",
							"pro": true,
							"tags": "BEGINNER",
							"url": "angular2-observable-composition-combine-latests"
						},
						{
							"description": "Avoid the Biggest Pitfall of Angular HTTP - Learn the RxJs Cache Operator",
							"duration": "5:10",
							"longDescription": "In this lesson we are going to use the HTTP module to implement a modification operation: we are going to add a lesson to a lessons list via an HTTP POST call, and then reload the data from the server.  While implementing this simple use case, we are going to come across something that might be surprising at first: its really simple to do duplicate network calls accidentally while using Angular HTTP. We are going to learn the reason why that is the case, and learn how we can avoid that using the RxJs Cache Operator.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-how-to--aAvoid-duplicate-http-requests-rxjs-cache-operator"
						},
						{
							"description": "How to do multiple HTTP requests using the RxJs Concat Operator",
							"duration": "4:19",
							"longDescription": "In this lesson we are going to learn how we make multiple sequential requests to the server by using the RxJs Concat operator. This is another example of how from the point of view of the Angular HTTP module network requests are really just Observables that can be easily combined using the many RxJs operators available. We are going to implement the following concrete example: do a delete on the server, then a second delete and finally reload the new list from the server and display it on the screen.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-how-to-do-multiple-http-requests-using-the-rxjs-concat-operator"
						},
						{
							"description": "How to do two HTTP Requests in Parallel using the RxJs combineLatest Operator",
							"duration": "3:58",
							"longDescription": "In this lesson we are going to learn how to do two HTTP requests in parallel, wait for each to return and produce a result that contains the combination of the two HTTP calls. For that we are going to use an operator that we presented before, the combineLatest Operator which will in this time be used in a completely different context. This is a good example of the power of the approach that the Angular HTTP module gives us, by modeling network calls as Observables; any RxJs operator can potentially by used to process network calls.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-how-to-do-two-http-requests-in-parallel-using-the-rxjs-combinelatest-operator"
						},
						{
							"description": "How to setup an HTTP request sequence using the RxJs switchMap Operator",
							"duration": "4:33",
							"longDescription": "In this lesson we are going to learn how we can build a chain of HTTP requests, but now we will be able to take the result of one request and then use it to build the next request. For this we are going to introduce a new RxJs Operator for combining Observables, the switchMap Operator. This lesson will give us a first contact with the more general Switch strategy of combining Observables.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-how-to-setup-an-http-request-sequence-using-the-rxjs-switchmap-operator"
						},
						{
							"description": "Retry HTTP requests in Error using the retry and retryWhen RxJs Operators",
							"duration": "3:42",
							"longDescription": "In this lesson we are going to learn how RxJs and Observables make it very simple to deal with certain uses cases that before might be challenging. For example, we are going to learn how to retry a network call in case of error. This is very useful in situations when the backend occasionally returns errors that are of an intermittent nature. In those scenarios a good strategy is to try to send the network call again a second time, usually after a certain delay has elapsed. In this lesson we are going to learn how we can use the RxJs Operators retry and retryWhen to implement service layers that are resilient to temporary errors.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-retry-http-requests-in-error-using-the-retry-and-retrywhen-rxjs-operators"
						},
						{
							"description": "How to Cancel an HTTP Request using an RxJs Subscription",
							"duration": "2:56",
							"longDescription": "In this lesson we are going to learn how to implement a use case using RxJs and Observables that was very hard to do previously: the cancellation of an ongoing HTTP request. We are going to learn about the RxJs subscription object and how to use it to implement cancellation.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-how-to-cancel-an-http-request-using-an-rxjs-subscription"
						},
						{
							"description": "Exercise - Improve a Search Service and Build a Typeahead",
							"duration": "3:15",
							"longDescription": "This lesson is the setup for the exercise of the Services and HTTP series. We are going to implement a Typeahead that continuously retrieves from the backend new search results depending on what the use is typing. We are going to show how to use the Angular HTTP API to pass a GET parameter request to the backend.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-exercise-improve-a-search-service-and-build-a-typeahead"
						},
						{
							"description": "Exercise Solution - Learn How to build a Typeahead that cancels obsolete search requests",
							"duration": "5:07",
							"longDescription": "This is the solution for the HTTP and Services exercise, where we will build a Typeahead. For that we are going to use a couple of RxJs Operators that we have previously presented in this course. We are going to see how results from a previous search can be implicitly canceled.",
							"pro": true,
							"tags": "INTERMEDIATE",
							"url": "angular2-exercise-solution-learn-how-to-build-a-typeahead-that-cancels-obsolete-search-requests"
						}
					]
				}
			]
		},
		{
			"name": "RxJS",
			"courses": [
				{
					"url": "intro-reactive-programming",
					"description": "Introduction to Reactive Programming",
					"longDescription": "In this series, we will discover what it means to think Reactive through RxJS. We will exercise our minds, and let go of our old imperative and stateful habits of programing.",
					"numberOfLessons": "6",
					"totalDuration": "29:04",
					"lessons": [
						{
							"description": "Understand Reactive Programming using RxJS",
							"duration": "4:31",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "understand-reactive-programming-rxjs"
						},
						{
							"description": "Use an event stream of double clicks in RxJS",
							"duration": "4.36",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "event-stream-double-clicks-rxjs"
						},
						{
							"description": "Use RxJS Async Requests and Responses",
							"duration": "7:14",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "async-requests-responses-rxjs"
						},
						{
							"description": "Render on the DOM with RxJS",
							"duration": "5.22",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "render-dom-rxjs"
						},
						{
							"description": "Send new requests from refresh clicks in RxJS",
							"duration": "5:07",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "new-requests-refresh-clicks-rxjs"
						},
						{
							"description": "An overview of RxJS reactive concepts",
							"duration": "2:14",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "overview-rxjs-concepts"
						}
					]
				},
				{
					"url": "rxjs-building-observables-scratch",
					"description": "RxJS Beyond the Basics: Creating Observables from scratch",
					"longDescription": "In this course we will gain intermediate knowledge of RxJS, focusing on one aspect: how to create Observables. We will see how Observables compare to functions, how they compare to ES6 generators, what are the empty(), throw() and never() Observables, and other static factories that help in making Observable sequences.",
					"numberOfLessons": "6",
					"totalDuration": "19:18",
					"lessons": [
						{
							"description": "Observables are almost like Functions",
							"duration": "6:43",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "observables-like-functions"
						},
						{
							"description": "Observables (push) compared to generator functions (pull)",
							"duration": "3:21",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "observables-compare-generator-functions"
						},
						{
							"description": "Observables can throw errors",
							"duration": "1:39",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "observables-can-throw-errors"
						},
						{
							"description": "Observables can complete",
							"duration": "1:48",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "observables-can-complete"
						},
						{
							"description": "Observables operator: of()",
							"duration": "2:06",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "observables-operator-of"
						},
						{
							"description": "Observables operator: from, fromArray, fromPromise",
							"duration": "3:41",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "observables-operator-from"
						}
					]
				},
				{
					"url": "step-by-step-async-javascript-rxjs",
					"description": "Step-by-Step Async JavaScript with RxJS",
					"longDescription": "Step-by-step building an application with many asynchronous pieces. Each lesson focuses on a single operator or idea of how RxJS helps simplify your code as well as making you code flexible enough to easily add more asynchronous pieces as your codebase grows.",
					"numberOfLessons": "8",
					"totalDuration": "25:15",
					"lessons": [
						{
							"description": "Starting a Stream with SwitchMap",
							"duration": "5:48",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "starting-stream-switchmap"
						},
						{
							"description": "Stopping a Stream with TakeUntil",
							"duration": "4:10",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "stopping-stream-takeuntil"
						},
						{
							"description": "Updating Data with Scan",
							"duration": "2:10",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "updating-data-with-scan"
						},
						{
							"description": "Displaying Initial Data with StartWith",
							"duration": "1:06",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "display-initial-data-startwith"
						},
						{
							"description": "Changing Behavior with MapTo",
							"duration": "2:32",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "change-behavior-mapto"
						},
						{
							"description": "Handling Multiple Streams with Merge",
							"duration": "2:59",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "handling-multiple-streams-merge"
						},
						{
							"description": "Refactoring Composable Streams in RxJS",
							"duration": "4:44",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "refactoring-composable-streams-rxjs"
						},
						{
							"description": "Getting Input Text with Map",
							"duration": "1:46",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "getting-input-text-map"
						}
					]
				}
			]
		},
		{
			"name": "NodeJS",
			"courses": [
				{
					"url": "introduction-node-fundamentals",
					"description": "Introduction to Node: The Fundamentals",
					"longDescription": "Understand node built-in features and how they operate. Learn to architect applications in such a way that allows your app to scale. Use debugging tools to identify and resolve errors.",
					"numberOfLessons": "10",
					"totalDuration": "57:22",
					"lessons": [
						{
							"description": "Use the Node.js REPL shell",
							"duration": "4:19",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "node-js-repl-shell"
						},
						{
							"description": "Understand Callbacks in Node.js",
							"duration": "7:03",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "callbacks-node-js"
						},
						{
							"description": "Understand the Node.js process object",
							"duration": "6.26",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "node-js-process-object"
						},
						{
							"description": "Understand Node.js buffers",
							"duration": "10:30",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "node-js-buffers"
						},
						{
							"description": "Understand Global Namespace in Node.js",
							"duration": "4.42",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "global-namespace-node-js"
						},
						{
							"description": "Export Modules in Node.js",
							"duration": "5:50",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "export-modules-node-js"
						},
						{
							"description": "Create a TCP Server using the Node.js Net Module",
							"duration": "3.54",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "tcp-server-node-js-net-module"
						},
						{
							"description": "Publish and Share a Node.js Module",
							"duration": "4:30",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "publish-share-node-js-module"
						},
						{
							"description": "Build a Simple HTTP Server with Node.js",
							"duration": "4:08",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "build-http-server-node-js"
						},
						{
							"description": "Add and Remove EventEmitters in Node.js",
							"duration": "6:00",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "event-emitters-node-js"
						}
					]
				},
				{
					"url": "introduction-express-js",
					"description": "Getting Started with Express.js",
					"longDescription": "Express is a minimal web server built on Node.js that provides essential functionality for delivering web applications to the browser and mobile devices. This series will guide you through the first steps of using Express for building your own applications.",
					"numberOfLessons": "11",
					"totalDuration": "64:00",
					"lessons": [
						{
							"description": "Create a Basic Server with Express",
							"duration": "4:24",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "basic-server-express-js"
						},
						{
							"description": "Define dynamic routes through Express",
							"duration": "4:30",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "dynamic-routes-express-js"
						},
						{
							"description": "Use Template Engines with Express",
							"duration": "3:20",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "template-engines-express-js"
						},
						{
							"description": "Serve static files with express",
							"duration": "3:20",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "static-files-express-js"
						},
						{
							"description": "Save and Delete Content in Express with HTTP Verbs",
							"duration": "7:04",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "save-delete-content-express-js"
						},
						{
							"description": "Handle Errors with a Redirect in Express",
							"duration": "6:48",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "handle-errors-redirect-express-js"
						},
						{
							"description": "Organize Code by Subpath in Express",
							"duration": "3:59",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "organize-code-subpath-express-js"
						},
						{
							"description": "Use Streams in Express",
							"duration": "6:59",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "streams-express-js"
						},
						{
							"description": "Handle Errors with Express Middleware",
							"duration": "5:28",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "errors-express-middleware"
						},
						{
							"description": "Integrate MongoDB into your Express App",
							"duration": "9:09",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "integrate-mongodb-express-js"
						},
						{
							"description": "Use virtual properties with Mongoose and MongoDB",
							"duration": "8:59",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "virtual-prop-mongoose-mongodb"
						}
					]
				},
				{
					"url": "node-js-rest-api-loopback",
					"description": "Build a Node.js REST API with LoopBack",
					"longDescription": "In this course the developer will learn how to create a LoopBack API and build it out to an API that can be used as a backend for apps.",
					"numberOfLessons": "8",
					"totalDuration": "15:35",
					"lessons": [
						{
							"description": "Initialize a LoobBack Node.js Project through the CLI",
							"duration": "1:17",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "initialize-loopback-project"
						},
						{
							"description": "Create a model to presist data in a Node.js LoopBack API",
							"duration": "3:01",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "loopback-data-model"
						},
						{
							"description": "Persist in-memory data to a file when developing Node.js LoopBack API's",
							"duration": "0:43",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "in-memory-data-loopback-api"
						},
						{
							"description": "Setup development mode using nodemon",
							"duration": "0:29",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "development-mode-nodemon-loopback"
						},
						{
							"description": "Create a relation between two LoopBack models",
							"duration": "3:00",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "relation-loopback-models"
						},
						{
							"description": "Define a remote method on a LoopBack model",
							"duration": "2:18",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "remote-method-loopback-model"
						},
						{
							"description": "Add validation rules to a model in LoopBack API",
							"duration": "2:08",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "validation-rules-loopback-model"
						},
						{
							"description": "Add Operation Hools to a LoopBack model",
							"duration": "2:39",
							"longDescription": "",
							"tags": "INTERMEDIATE",
							"url": "operation-hooks-loopback-model"
						}
					]
				}
			]
		},
		{
			"name": "JavaScript",
			"courses": [
				{
					"url": "understand-javascript-arrays",
					"description": "Understand JavaScript Arrays",
					"longDescription": "In this series, we will explore JavaScript (es6) array methods. We will slice, join, map, and reduce our way to better understanding of the powerful array methods that modern JavaScript delivers.",
					"numberOfLessons": "11",
					"totalDuration": "70:14",
					"lessons": [
						{
							"description": "Use Concat to Add Values to an Array",
							"duration": "4:38",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "concat-add-array"
						},
						{
							"description": "Combine Values of an Array into a String with Join",
							"duration": "4:42",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "join-combine-array"
						},
						{
							"description": "Check if a Value is in an Array with indexOf",
							"duration": "5:21",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "indexof-value-array"
						},
						{
							"description": "Create a Shallow Copy of an Array with Slice",
							"duration": "9:15",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "slice-shallow-copy-array"
						},
						{
							"description": "Sort an Array Alphabetically or Numerically",
							"duration": "6:23",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "sort-alphabetically-array"
						},
						{
							"description": "Filter an Array with Truthy Values",
							"duration": "6:44",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "filter-values-array"
						},
						{
							"description": "Use Some as a Ternary Operator or Conditional",
							"duration": "5:43",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "some-ternary-operator-array"
						},
						{
							"description": "Add Elements onto an Array with Push",
							"duration": "3:26",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "push-add-elements-array"
						},
						{
							"description": "Modify Values in an Array with Map",
							"duration": "9:26",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "map-modify-values-array"
						},
						{
							"description": "Validate Data with the Every Method",
							"duration": "6:04",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "every-validate-array"
						},
						{
							"description": "Produce a single value from an Array with reduce",
							"duration": "8:32",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "reduce-single-value-array"
						}
					]
				},
				{
					"url": "reduce-data-javascript-array-reduce",
					"description": "Reduce Data with JavaScript Array#reduce",
					"longDescription": "Reduce is a powerful tool, and essential to functional programming techniques. This course will dig deep into the Array#reduce in JavaScript and give you a solid understanding to start using it today.",
					"numberOfLessons": "8",
					"totalDuration": "48:25",
					"lessons": [
						{
							"description": "Transform an array into a single value using reduce",
							"duration": "3:56",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "transform-array-reduce"
						},
						{
							"description": "Reduce an array into a single object",
							"duration": "3:59",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "array-single-object-reduce"
						},
						{
							"description": "Use reduce to filter and map over large datasets",
							"duration": "8:32",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "filter-map-large-datasets-reduce"
						},
						{
							"description": "Learn how to use optional reduce arguments",
							"duration": "4:47",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "optional-arguments-reduce"
						},
						{
							"description": "Avoid common mistakes when working with reduce",
							"duration": "4:17",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "common-mistakes-reduce"
						},
						{
							"description": "Learn to flatten and flatmap arrays with reduce",
							"duration": "8:06",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "flatten-flatmap-arrays-reduce"
						},
						{
							"description": "Compose functions with reduce",
							"duration": "8:19",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "compose-functions-reduce"
						},
						{
							"description": "Safely inspect nested objects with Reduce",
							"duration": "6:29",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "nested-objects-inspect-reduce"
						}
					]
				},
				{
					"url": "ecmascript-2015",
					"description": "Learn ES6 (ECMAScript 2015)",
					"longDescription": "This course takes a look at some of the new features that JavaScript has available with ES6 (ECMAScript 2015). It is a 'montage' from several instructors.",
					"numberOfLessons": "10",
					"totalDuration": "29:36",
					"lessons": [
						{
							"description": "Arrow Function => in ES6",
							"duration": "2:57",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "arrow-function-es6"
						},
						{
							"description": "The let keyword in ES6",
							"duration": "2:58",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "let-keyword-es6"
						},
						{
							"description": "Default values for Function Parameters",
							"duration": "2:16",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "default-values-func-params-es6"
						},
						{
							"description": "const Declarations in ES6",
							"duration": "2:14",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "const-declaration-es6"
						},
						{
							"description": "Shorthand Properties in ES6",
							"duration": "1:01",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "shorthand-properties-es6"
						},
						{
							"description": "Object Enhancements in ES6",
							"duration": "2:12",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "object-enhancements-es6"
						},
						{
							"description": "Using the ES6 Spread Operator",
							"duration": "1:40",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "spread-operator-es6"
						},
						{
							"description": "Using Template Literals in ES6",
							"duration": "4:12",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "template-literals-es6"
						},
						{
							"description": "Destructuring Assignment in ES6",
							"duration": "4:33",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "destructuring-es6"
						},
						{
							"description": "ES6 Modules (ES2015) - Import and Export",
							"duration": "5:33",
							"longDescription": "",
							"tags": "BEGINNER",
							"url": "modules-es6"
						}
					]
				}
			]
		}
	]
};
