import React, { Component } from 'react';


const Step1 = (props) => {
  return (
    <section className="body-sign">
      <div className="center-sign">
       This is step 1

      <form onSubmit={props.formHandler}>
        <div>
          this is form
          <input name="name" type="text" onChange={props.changeHandler} placeholder="Enter Name" />
          <input name="country" type="text" onChange={props.changeHandler} placeholder="Enter Country" />
        </div>
        <input type="submit"/>
      </form>
      </div>
      
    </section>
  )
}

const Step2 = (props) => {
  return (
    

      <section className="body-sign">
        <div className="center-sign">
        This is step 2

        <form onSubmit={props.formHandler}>
          
          <input name="age" type="text" onChange={props.changeHandlers} placeholder="Enter Age" />
          <button type="submit"/>
        </form>
        </div>
        
      </section>
      
    
  )
}

export default class MultistepForm extends Component {
    constructor(props){
      super(props)
      this.state ={
        step:1,
        last:2,
        form: {}
      }
      this.formsubmit = this.formsubmit.bind(this);
      this.update = this.update.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    onStepChange = (stats) => {
      console.log({ stats });
    }
    onChange(e){
      this.update(e.target.name,e.target.value);

    }

    update(key,value){
      // values = {}
      const {form} = this.state
      form[key] = value
      // values
      this.setState({form})

    }

    formsubmit(e){
      // var values  = {}
      e.preventDefault();
      console.log(this.state);
      this.setState({
        step: this.state.step + 1
      })
    }

    // render(){
    //   return(
    //     <StepWizard onStepChange={this.onStepChange}>
    //       <Step1 />
    //       <Step2 />
    //     </StepWizard>
    //   );
    // }

    render() {
      switch (this.state.step) {
        case 1:
          return <Step1 step={this.state.step} changeHandler={this.onChange} formHandler={this.formsubmit} />;
        case 2:
          return <Step2 step={this.state.step} changeHandler={this.onChange} formHandler={this.formsubmit} />;
        
      }
    }
}
