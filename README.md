# react-forms
A form handling class for retrieving and reducing nested form data.
https://github.com/wfknowles/react-forms

## Sample Component & Library Usage

```
    import React, { useState } from 'react'
    import ReactForms from 'ReactForm.js'

    import { useAppContext } from '../GlobalState';
    import { SOME_ACTION } from '../actions';

    function formComponent() {
        const [ state, dispatch ] = useAppContext();
        const { stateObj } = state;

        const changeHandler = (e) => {

        // using ReactForms for retrieving and reducing form object
        const inputData = ReactForms.value(e);
        const reducedState = ReactForms.reduce({ stateObj }, inputData);

        if (reducedState) {
            dispatch({
                type: SOME_ACTION,
                reducedState
            });
        }

        return (
            <form>
                <input name="stateObj.fruit.apple" onChange={changeHandler}/>
                <input name="stateObj.fruit.banana" onChange={changeHandler}/>
                <input name="stateObj.foo" onChange={changeHandler}/>
                <input name="stateObj.bar" onChange={changeHandler}/>
                <input name="stateObj.pizza.cheese" onChange={changeHandler}/>
                <input name="stateObj.pizza.pepperoni" onChange={changeHandler}/>
            </form>
        )

    }

```

## Sample Reducer
```
    case SOME_ACTION:
        return {
            ...state,
            ...action.reducedState
        };

```

## Expected Sample Data
```
    stateObj = {
        fruit: {
            apple: "",
            banana: ""
        },
        foo: "",
        bar: "",
        pizza: {
            cheese: "",
            pepperoni: ""
        }
    }
```

## Questions or Improvements?
Github: https://github.com/wfknowles/
Email: will@willknowles.com

## Contribution
Made with ❤️ by Will Knowles
©️2021