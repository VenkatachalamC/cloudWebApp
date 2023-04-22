import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/loginPage.css'

const LoginCont = () => {
    return (
        <div>
        <div id="overview"></div>
        <br></br><br></br><br></br>
        <div class="overview-container" >
            <h2>Overview</h2>
            <p>Cloud Computing is rapidly growing. Data backup and Data Sharing is essential for disaster recovery. So, we can use the aspects of Cloud Computing for Data Backup, Data recovery and Data Sharing purposes. When we talk about Cloud Computing, it means we have ability to share the resources through internet. We can store our data on internet space that is provided by service provider. This totally depends upon the service provider that how they store the data and what kind of security they are trying to provide. Usually Cloud Service providers are using Storage Area Network SAN as a cloud storage system that is very expensive and need highly trained staff to manage. So, In this project we are going implement the Storage as a Service     (STaaS) with the help of Cloud NAS (Network Attached Storage). Network Attached Storage is easy to implement and very effective for sharing of data and also in terms of cost. We’re going to implement Storage as a service using Cloud Network Attached Storage and test in small environment. And It will be shown that it is an effective storage system for cloud in terms of cost and the management of the system.
            </p>
        </div>
        <div className="docs-container" id="docs">
            <br></br><br></br><br></br>
            <h2>Documentation</h2>
            <p>
                1. Create an account through Sign Up in our Login Page
                <br></br>
                2. After Creating an account, Login using your username and password.<br></br>
                3. After Logged in, Click on Upload button to upload the files to cloud<br></br>
                4. Select the file from File Manager, Click on upload.<br></br>
                5. After Uploading, Click on Home.<br></br>
                6. Now you will see the uploaded files in the home section<br></br>
                7. You can download or delete the particular file whenever you want.<br></br>
            </p>
        </div>
        <div id="contactLine"></div>
        <div class="contact-container">
            <h2>Contact Details</h2>
                <div>
                    <p>Jai Vidyasagar R - +91 95004 42237 - <a href="mailto:jaividyasagarr@gmail.com">jaividyasagarr@gmail.com</a> <br></br></p>
                    <p>Venkatachalam C - +91 74492 40301 - <a href="mailto:venkatachalam17092001@gmail.com">venkatachalam17092001@gmail.com</a> <br></br></p>
                    <p>Harish Adhitya S - +91 83005 49300 - <a href="mailto:223003040@sastra.ac.in">harishadhitya@gmail.com</a> <br></br></p>
                </div>
                
        </div>
        </div>
        
        
    )
}

export default LoginCont;