import React, { useState } from 'react';
import {useFormik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom"


function Auth({updateUser}){
    //5. sign up/log in/log out
    const [signup, setSignup] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const toggleSignup = () => setSignup(prev => !prev);
     
    const schema = yup.object().shape({
        name: yup.string().required("Name is required."),
        username: yup.string().required("Username is required"),
        email: yup.string().required("Email is required."),
        password: yup.string().required("Password is required."),
        bio: yup.string(),
        image: yup.string()
    })


  //create formik instance
    const formik = useFormik({
      //initial values form
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            bio: "",
            image: ""
        },
      //yup schema for validation
        validationSchema: schema,
      //submit callback
      /**fetch(signup ? "/signup" : "/login", {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                }, */
        onSubmit: (values, actions) => {
            fetch( signup ? "http://localhost:5555/signup" : "http://localhost:5555/login", {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(values)
            }).then (res => {
                if(res.ok){
                    res.json().then(user => {
                        actions.resetForm()
                        updateUser(user)
                        navigate("/home")
                    })
                } else{
                    console.log("oops")
                }
            })
        }

    })


    return (
       <section>
            { signup ? (
            <form onSubmit={formik.handleSubmit}>
            <label> Name:
            <input 
            type="text" 
            name="name" 
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}/>
            {/*this is the onBlur*/}
            {formik.touched.name && formik.errors.name ? (
            <h3>{formik.errors.name}</h3>
            ) : ("")}
            </label>
            <label> Username:
            <input
            type="text"
            name="username" 
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}/>
            {formik.touched.username && formik.errors.username ? (
            <h3>{formik.errors.username}</h3>
            ) : ("")}
            </label>
            <label> Email:
            <input 
            type="text"
            name="email" 
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (
            <h3>{formik.errors.email}</h3>
            ) : ("")}
            </label>
            <label> Password
            <input 
            type="password" 
            name="password" 
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? (
            <h3>{formik.errors.password}</h3>
            ) : ("")}
            </label>
            <label> Bio:
            <input 
            type="text" 
            name="bio" 
            onChange={formik.handleChange}
            value={formik.values.bio}
            onBlur={formik.handleBlur}/>
            {formik.touched.bio && formik.errors.bio ? (
            <h3>{formik.errors.bio}</h3>
            ) : ("")}
            </label>
            <label> Image:
            <input 
            type="text" 
            name="image" 
            onChange={formik.handleChange}
            value={formik.values.image}
            onBlur={formik.handleBlur} />
            {formik.touched.image && formik.errors.image ? (
            <h3>{formik.errors.image}</h3>
            ) : ("")}
            </label>
            <input type="submit" value="Join!" />
            </form>
            ) : (
            <form onSubmit={formik.handleSubmit}>
                <label> Username:
                <input
                type="text"
                name="username" 
                onChange={formik.handleChange}
                value={formik.values.username}
                onBlur={formik.handleBlur}/>
                {formik.touched.username && formik.errors.username ? (
                <h3>{formik.errors.username}</h3>
                ) : ("")}
                </label>
                <label> Password
                <input 
                 type="password" 
                 name="password" 
                 onChange={formik.handleChange}
                 value={formik.values.password}
                 onBlur={formik.handleBlur}/>
                {formik.touched.password && formik.errors.password ? (
                 <h3>{formik.errors.password}</h3>
                 ) : ("")}
                </label>
                <input type="submit" value="Log In" className="button" />
				{error ? <label style={{ color: "red" }}>{error}</label> : ""}
            </form>
            )}
            <section>
				<p>{signup ? "Already have an account?" : "Not a member?"}</p>
				<button className="button" onClick={toggleSignup}>
					{signup ? "Login" : "Sign Up"}
				</button>
			</section>
        </section>
    )
}

export default Auth