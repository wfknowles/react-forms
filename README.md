# react-forms
A form handling class for retrieving and reducing nested form data in React.


## Sample Library Usage

```
    import ReactForms from '../utils/ReactForms';

    const [ formState, setFormState] = useState({someModel: {}});

    const handleChange = (e) => {

        const inputData = ReactForms.value(e);
        const reducedFormState = ReactForms.reduce(formState, inputData);

        setFormState({
            ...formState,
            ...reducedFormState
        });
    };


  return (
    <form onSubmit={submitHandler}>
        <input type="text" name="someModel.data1" onChange={changeHandler}/>
        <input type="text" name="someModel.data2" onChange={changeHandler}/>
        <input type="text" name="someModel.data3" onChange={changeHandler}/>
        <input type="text" name="someModel.data4" onChange={changeHandler}/>
        <input type="submit"/>
    </form>
  )

```

## Expected Sample Data
```
    formState: {
        someModel: {
            data1: "",
            data2: "",
            data3: "",
            data4: ""
        }
    }
```

## Questions or Improvements?
Github: https://github.com/wfknowles/react-forms<br>
Email: will@willknowles.com

## Contribution
Made with ❤️ by Will Knowles
©️2021