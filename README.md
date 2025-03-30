# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Redux is the independent state management library so it can work with react , vue etc.
## To use redux with react we need react-redux 

## Before redux there was a flux library which is deigned by architecture facebook.

## After redux is introduced redux toolkit comesinto the picture which gives some buil it codes so that we dont have to create like middleware ,, auth.

React-Redux is the official binding library that connects React with Redux. It provides hooks like useSelector, useDispatch, and Provider that allow React components to interact with the Redux store.

## Redux and Redux Toolkit includes
### 1. Store - It is a kind of global variable from where we can take th values.
### 2. Reducers - It is used to update anything in the store
### 3. useSelector - Helps to select the values
### 4. useDispatcher - Helps to dispatch the values


##### STEPS TO  INSTALL THE REDUX IN THE PROJECT

Step1: Create a React Project
Step2: npm install @reduxjs/toolkit,  npm install react-redux ( inside project run these two commands )
Step3: create a folder inside src named as app and inside that create a file called store.js
Step4: create reducers to creaet that i have to create a file that names ending with slice like  todoSlice.js

