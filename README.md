# react-forms
A library of components and helpers for react based forms.


## Sample Component

```
    import { FormInput, FormResponse, reduceStates } from '../utils/ReactForms';

    const [ formState, setFormState] = useState({someModel: {}});
    const [ formResponse, setFormResponse = useState({status: undefined, message: undefined })];

    const handleChange = (e) => {

      const reducedFormState = reduceStates(e, formState);

      setFormState({
        ...formState,
        ...reducedFormState
      });

    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    // send formData to endpoint

    // success message
    setFormResponse({
      ...formResponse,
      status: 'success',
      message: 'Lorem ipsum dolar sit amet'
    });

    // error message
    setFormResponse({
      ...formResponse,
      status: 'error',
      message: 'Lorem ipsum dolar sit amet'
    });

  };


  return (
    <>
    {
      formResponse.status && (
        <FormResponse status={formResponse.status} message={formResponse.message} />
      )
    }
    {
      !formResponse.status && (
        <form onSubmit={submitHandler}>
            <FormInput
                type="text"
                name="someModel.data1"
                onChange={changeHandler}
            >
            <FormInput
                type="text"
                name="someModel.data2"
                onChange={changeHandler}
            >
            <FormInput
                type="text"
                name="someModel.data2"
                onChange={changeHandler}
            >
            <FormInput
                type="text"
                name="someModel.data3"
                onChange={changeHandler}
            >
            <FormInput 
                type="submit"
                label="Send Message"
                variant="primary"
            />
        </form>
      )
    }
  )

```

## Questions or Improvements?
Github: https://github.com/wfknowles/react-forms<br>
Email: will@willknowles.com

## Contribution
Made with ❤️ by Will Knowles
©️2021