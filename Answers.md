 What problem does the context API help solve?

Context Api allows data to be stored on a context object instead of props, which can help prevent the often confusing nature of prop drilling.

 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 
Actions send data from the render to the store when dispatched, these often contain payloads. Reducer decide what will happen to the state/how it will respond from those actions. The store holds everything, especially state. 

What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global state, like redux or context api, and can be really good for large or complex apps that have lots of components. Component state , is more of a local state, like props, and is easy to use especially in smaller apps. 

 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

Thunk is a middleware, which interacts with the actions. It allows you to return a function rather than an action object, essentially allows asynchronous operations. 

 What is your favorite state management system you've learned and this sprint? Please explain why!

I think I like redux the best, it kinda takes a little of everything we have learned and makes it a more cohesive system that i can mostly follow. Lots of support for it to it seems. 
