export default function reduceStates(e, formState) { 

  const value = (event) => {

    try {

      return formatData(event);

    } catch (error) {

      throw new SyntaxError(`reduceStateError: ${error}`);

    }
    
  }

  const formatData = (event) => {
 
    const { name, value, type } = event.target;
    let formattedData = {};

    // input has nested data
    if (name.includes('.')) {

      // create reversed array of keys
      const keyArr = name.split('.').reverse();

      // build object from reversed array
      keyArr.forEach((currentKey, i) => {

        if (i === 0) {

          if (type === 'checkbox') {

            formattedData = { [ currentKey ]: event.target.checked };

          } else {

            formattedData = { [ currentKey ]: value };

          }
          
        } else {

          formattedData = { [ currentKey ]: formattedData };

        }

      });

      
    } else {

      // input has standard? data, simply return the value, possibly should check if its a checkbox
      formattedData[name] = value; 

    }
    
    return { event, data: formattedData };

  }

  
  const reduce = (state, formData) => {

    try {

      return reduceFormData(state, formData);

    } catch (error) {

      throw new SyntaxError(`reduceStateError: ${error}`);

    }
    
  }

  const reduceFormData = (state, formData) => {

    const { event, data: incomingState } = formData;
    const keys = event.target.name.split('.');

    let stateTest = state;
    let incomingStateTest = incomingState;
    let reducedState = {};

    keys.forEach((key, i) => {

      // if both state and incomingState have data
      if (stateTest[key] && incomingStateTest[key]) {

        // if the data doesnt match
        if (stateTest[key] !== incomingStateTest[key]) {

          // if both states have children...
          if (stateTest[key][keys[i+1]] && incomingStateTest[key][keys[i+1]]) {

            const stateParent = stateTest[key];
            const incomingStateParent = incomingStateTest[key];
            const parentKey = [keys[i+1]];
            const stateChild = stateParent[parentKey];
            const incomingStateChild = incomingStateTest[key][parentKey];

            const childrenData = childrenDataTypeReducer(
              stateParent,
              incomingStateParent,
              parentKey,
              stateChild,
              incomingStateChild
            );

            reducedState[key] = childrenData;

          } else {
            
            reducedState[key] = dataTypeReducer(state[key], incomingState[key]);

          } // end if both have children

        } // end if data doesnt match

      } // end if both have data

    }); // end forEach

    // console.log('reducedFormData', reducedState);

    return reducedState;
  }

  const dataTypeReducer = (state, incomingState) => {
    const stateType = typeof state;
    const incomingStateType = typeof incomingState;
    let reducedDataByType = {};


    if (stateType === incomingStateType) {

      if (stateType === 'object') {

        reducedDataByType = {...state, ...incomingState};

      } else if (stateType === 'string') {

        reducedDataByType = incomingState;

      }
      else {

        console.log('EXCEPTION!', {
          1:{state, incomingState},
          2:{stateType, incomingStateType}
        });

        reducedDataByType = {...state, ...incomingState};
      }
    } else {

      console.log('EXCEPTION!', {
        1:{state, incomingState},
        2:{stateType, incomingStateType}
      });

      // default handling is to spread both states into the same object
      reducedDataByType = {...state, ...incomingState};
    }

    return reducedDataByType;
  }

  const childrenDataTypeReducer = (stateParent, incomingStateParent, parentKey, stateChild, incomingStateChild) => {

    const stateChildType = typeof stateChild;
    const incomingStateChildType = typeof incomingStateChild;
    let reducedState = {};

    // reduce state by child data type
    if (stateChildType === 'object' && incomingStateChildType === 'object') {

      const reducedChild = dataTypeReducer(stateChild, incomingStateChild);
      reducedState = dataTypeReducer(stateParent, {[parentKey]: reducedChild});

    } else if (stateChildType === 'string' && incomingStateChildType === 'string') {

      reducedState = dataTypeReducer(stateParent, incomingStateParent);

    } else { 

      console.log('EXCEPTION!', {
        stateParent, incomingStateParent, parentKey, stateChild, incomingStateChild
      });

    }


    return reducedState;
  }


  const inputData = value(e);
  const reducedState = reduce(formState, inputData);

  return reducedState;

}