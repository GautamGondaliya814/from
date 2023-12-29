import { useFormik } from 'formik';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
function App() {
  const initialvalue = {
    name:'',
    username:'',
    email:'',
    phone:'',
    password:'',
    cpassword:'',
    gender:'',
  }
  const validata = Yup.object({
    name: Yup.string().min(2).max(25).required("Plz Enter Your Name"),
    username:Yup.string().matches(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/,"Your Username Is Invalid !!").required('Plz Enter Your User Name'),
    email: Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,"Your Email Id Is Invalid !!" ).required('Plz Enter Your Email Id'),
    Phone: Yup.string().max(10).matches(/^\(\d{3}\)\s\d{3}\s-\s\d{4}$/,"Your Phone number is invalid !!").required("Plz Enter Your Phone Number"),
    password: Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,"Your Password is Invalid Plz Enter Valid Password !!"),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'),null],"password must match"),
    gender: Yup.string().required("A Gender option is required")
  }) 
  const {values, handleChange , handleBlur ,handleSubmit, touched , errors} = useFormik({
    initialValues:initialvalue,
    validationSchema:validata,
    onSubmit:(values)=>{
      console.log(values);
    }
   })
  return (
    <div className="App d-flex align-content-center">
        <div className="form mx-auto">
         <form action="" onSubmit={handleSubmit}>
            <table>
              <tr>
                <th>
                  <h4>Registration</h4>
                </th>
              </tr>
              <tr className='d-flex position-relative'>
                <td className='d-flex px-2 ps-0 py-3'>
                  <input type="radio" name="gender" id="flexRadioDefault1" className='form-check-input'
                  value={'male'}
                   onChange={handleChange}
                   defaultChecked={values.gender==='male'}/><span className='text-white'>Male</span>
                </td>
                <td className='d-flex px-2 py-3'>
                  <input type="radio" name="gender" id="" className='form-check-input'
                  value={'female'}
                   onChange={handleChange}
                   defaultChecked={values.gender==='female'}/><span className='text-white'>Female</span>
                </td>
                {errors.gender ? (<span className='error' style={{bottom:'0'}}>{errors.gender}</span>): null}
              </tr>
              <tr>
                <td className='d-flex flex-column control my-3'>
                    <input type="text"
                    autofocus required
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    <label htmlFor="" className='text-white label-text'>Full Name</label>
                    {errors.name && touched.name ? (<span className='error'>{errors.name}</span>): null}
                </td>
              </tr>
              <tr>
                <td className='d-flex flex-column control my-3'>
                    <input type="text"
                    required
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    <label htmlFor="" className='text-white label-text'>User Name</label>
                    {errors.username && touched.username ? (<span className='error'>{errors.username}</span>): null}
                </td>
              </tr>
              <tr>
                <td className='d-flex flex-column control my-3'>
                    <input type="text"
                    required
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    <label htmlFor="" className='text-white label-text'>Email</label>
                    {errors.email && touched.email ? (<span className='error'>{errors.email}</span>): null}
                </td>
              </tr>
              <tr>
                <td className='d-flex flex-column control my-3'>
                    <input type="text"
                    required
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    <label htmlFor="" className='text-white label-text'>Phone Numbar</label>
                    {errors.phone && touched.phone ? (<span className='error'>{errors.phone}</span>): null}
                </td>
              </tr>
              <tr>
                <td className='d-flex flex-column control my-3'>
                    <input type="password"
                    required
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    <label htmlFor="" className='text-white label-text'>Password</label>
                    {errors.password && touched.password ? (<span className='error'>{errors.password}</span>): null}
                </td>
              </tr>
              <tr>
                <td className='d-flex flex-column control my-3'>
                    <input type="password"
                    required
                    name="cpassword"
                    value={values.cpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                    <label htmlFor="" className='text-white label-text'>Conmfirm Password</label>
                    {errors.cpassword && touched.cpassword ? (<span className='error'>{errors.cpassword}</span>): null}
                </td>
              </tr>
              <tr>
                <td>
                  <button type='submit'>Register</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
    </div>
  );
}

export default App;
