// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../assets/Styles/SingupView/Rules__BEM copy.css';

const imageLogo = "https://media.discordapp.net/attachments/1160960837889032392/1161055025271947295/Logo-ai-of-the-tiger.jpeg?ex=6536e7c1&is=652472c1&hm=35ea46cbe431ff2a95fdfb64729c16936df2ba25d18a87040b7cbce501344293&=&width=434&height=434";

const SingupView = () => {
    return (
        <div className="container signup-container">
            <div className='row justify-content-center align-items-center vh-100'>
                <div className="col-lg-5 signup-logo">
                    <img src={imageLogo} alt="Logo" className="img-fluid" />
                </div>
                <Card className="signup-card col-lg-7">
                    <CardBody className="signup-card">
                    <h3 className="signup-title">Create Account</h3>
                        <Form className="">
                            <FormGroup>
                                <Label for="fullName">Full Name</Label>
                                <Input type="text" name="fullName" id="fullName" placeholder="Enter Full Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="birth">Birth</Label>
                                <Input type="date" name="birth" id="birth" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="gender">Gender</Label>
                                <Input type="select" name="gender" id="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="id">ID</Label>
                                <Input type="number" name="id" id="id" placeholder="Enter ID" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Enter Password" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" id="terms" />{' '}
                                    I have read and agreed to the Terms of Service and Privacy Policy
                                </Label>
                            </FormGroup>

                            <Button className="Button-Success my-2" block>Create Account</Button>
                            <div className="login-redirect">
                                Already have an account? <a className="Link-Login" href="/SinginView">Log In</a>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div> 
        </div>
        
    );
}

export default SingupView;

