import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

export default function CompleteForm () {    
    // Use formik to 'declare the state'
    const formik = useFormik({
        initialValues: {
            userName : '',
            userSurname : '',
            userRole : '',
            userProfession : '',
            userCompany : '',
            userEmail : '',
            userNationality : '',
        },

        validationSchema: Yup.object({
            userName : Yup.string().required("Oops, looks like you didn't give us a name"),
            userSurname : Yup.string().required("Oops, looks like you didn't give us a surname"),
            userRole : Yup.string().required("We'd like to know what your job is"),
            userEmail : Yup.string().email().required('We need to be able to send you annoying emails bruh!'),
            userNationality : Yup.string().required("I'm curious, I like to know :)"),
        }),

        validateOnChange: false,
        validateOnBlur: false,


        onSubmit: (values) => {
            console.log('Submitted')
            console.log(values)
        },
    })

    function goBack() {
        window.location.reload()
    }
    

    // Return UI form
    return (
        <>               
            <form onSubmit={formik.handleSubmit} >
                <div className="form-container">
                    <ol className="list-container">
                        <li className="list-item">
                            <label  className="list-item-label">Name</label>
                            <input type='text' name="userName" className="input-field" value={formik.values.userName} onChange={formik.handleChange} ></input>
                            <div className={"error-field " + (formik.errors.userName ? "" : "hidden")}>{formik.errors.userName}</div>
                        </li>

                        <li className="list-item">
                            <label className="list-item-label">Surname</label>
                            <input type='text' name="userSurname" className="input-field" value={formik.values.userSurname} onChange={formik.handleChange} ></input>
                            <div className={"error-field " + (formik.errors.userSurname ? "" : "hidden")}>{formik.errors.userSurname}</div>
                        </li>

                        <li className="list-item">
                            <label className="list-item-label">I am a...</label>
                            <select id="dropwdown" name="userRole" className="input-field" value={formik.values.userRole} onChange={formik.handleChange}>
                                <option value={'recruiter'} >Recruiter</option>
                                <option value={'company-but-not-recruiter'} >Company/Enterprise</option>
                                <option value={'private-user'} >Private user</option>
                            </select>
                        </li>

                        <li className="list-item">
                            <label className="list-item-label">Job position</label>
                            <input type='text' name="userProfession" placeholder="eg: Human Resources" className="input-field" value={formik.values.userProfession} onChange={formik.handleChange} ></input>
                        </li>

                        <li className="list-item">
                            <label className="list-item-label">Company</label>
                            <input type='text' name="userCompany" placeholder="eg: The Rari Corp." className="input-field" value={formik.values.userCompany} onChange={formik.handleChange} ></input>
                        </li>

                        <li className="list-item">
                            <label className="list-item-label">Email</label>
                            <input type='email' name="userEmail" className="input-field" value={formik.values.userEmail} onChange={formik.handleChange} ></input>
                            <div className={"error-field " + (formik.errors.userEmail ? "" : "hidden")}>{formik.errors.userEmail}</div>
                        </li>
                                                
                        <li className="list-item">
                            <label className="list-item-label">Country of birth/Nationality</label>
                            <input type='text' name="userNationality" className="input-field" value={formik.values.userNationality} onChange={formik.handleChange} ></input>
                            <div className={"error-field " + (formik.errors.userNationality ? "" : "hidden")}>{formik.errors.userNationality}</div>
                        </li>

                    </ol>
                </div>

                <div className="form-btn-container">
                 <button  type="button" className="back-btn" onClick={goBack} >GO BACK</button>
                 <button className="btn-submit" type="submit" >SUBMIT FORM</button>
                </div>
            </form>
        </>
    )
}
