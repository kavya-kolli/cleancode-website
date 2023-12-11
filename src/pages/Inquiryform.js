import React, {useState} from 'react'; 
import './inquiryform.css';
export const Inquiryform =() => {
    const [formData, setformData] = useState({
      firstname: '',
      lastname: '',
      Gender : '',
      occupation :'',
      phoneNO : '',
       course :[],
    })
    
      
     const onChangeHandler = (event) =>{
    
      console.log(event)
      if(event.target.name === 'course'){
    
        let copy = {...formData}
        if(event.target.checled){
    copy.course.push(event.target.value)
        }else{
          copy.course = copy.course.filter(el =>el !== event.target.value)
        }
        setformData(copy)
    
      }else{
     setformData(() => ({
      ...formData,
      [event.target.name]: event.target.value
     }))
    }
     } 
       
    const onSubmitHandler = (event)=> {
      event.preventDefault()
      console.log(formData)
    }
    
     return (
    
        <div className='inquiry'>
    <form onSubmit={onSubmitHandler}>
      <div>
        <h2> STUDENT INQUIRY FORM</h2>
      </div><br></br>
      <div className='form-group'>
        <label htmlfor="firstname" className='form-label'>First name</label>
        <input className='form-comtrol' name="firstname" onChange={onChangeHandler}/>
      </div>
      <div className='form-group'>
        <label htmlfor="lastname" className='form-label'>Last name</label>
        <input className='form-comtrol' name="lasttname" onChange={onChangeHandler}/>
      </div>
      <div>
      <div className='form-group'>
        <label htmlfor="Gender" className='form-label'>Gender</label>
      </div>
      <div>
        <input type="radio" name="gender" value="male" onChange={onChangeHandler}/>
        <label htmlfor="male">male</label>
      </div>
      <div>
        <input type="radio" name="gender" value="female" onChange={onChangeHandler}/>
        <label htmlfor="female">female</label>
      </div>
      <div>
        <input type="radio" name="gender" value="others" onChange={onChangeHandler}/>
        <label htmlfor="others">others</label>
      </div>
      </div>
      <div className='form-group'>
        <label htmlfor="occupation" className='form-label'>Occupation</label>
        <select className='form-select' name="occupation" onChange={onChangeHandler}>
          <option value="student">student</option>
          <option value="employee">employee</option>
          <option value="others">others</option>
       </select>
      </div>
      <div className='form-group'>
        <label htmlfor="phone NO" className='form-label'>phone NO</label>
        <input className='form-comtrol' name="phone NO" onChange={onChangeHandler}/>
      </div>
      <div className='form-group'>
        <label htmlfor="gender" className='form-label'>Course</label>
      
    
      <div>
        
        <input type="checkbox" name='course' value="html" onChange={onChangeHandler}/>
        <label htmlfor="html">HTML</label>
    </div>
    <div>
        
        <input type="checkbox" name='course' value="css" onChange={onChangeHandler}/>
        <label htmlfor="css">CSS</label>
    </div>
    <div>
        
        <input type="checkbox" name='course' value="javascript" onChange={onChangeHandler}/>
        <label htmlfor="javascript">JavaScript</label>
    </div>
    
      </div>
     <div className='form-group'>
      <button className='btn' type='button' >submit</button>
     </div>
     
      
    </form>
        </div>
      );
    
     }
 
    