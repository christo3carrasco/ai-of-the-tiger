// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Input,
} from "reactstrap";
import background from "../assets/img/SignIn/sign-in-background.png";
import logo from "../assets/img/SignIn/logo.png";

const SinginView = () => {
    return (
        <div
            style={ {
                backgroundImage: `url(${ background })`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            } }>
            <div
                className="container signup-container">
                <div className='row justify-content-center align-items-center vh-100'>
                    <Card className="signup-card col-lg-5 p-5">
                        <CardTitle>
                            <div className="p-4 d-flex justify-content-center gap-3 align-items-center">
                                <img
                                    src={ logo } style={
                                    {
                                        width: '100px'
                                    }
                                } alt="logo"/>
                                <h3
                                    className="fw-bolder w-auto mt-4" style={ {
                                    color: '#5BC69F'
                                } }>All OF TIGER</h3>
                            </div>
                        </CardTitle>
                        <CardBody className="signup-card">
                            <Form className="">
                                <FormGroup>
                                    <Input size="lg" type="text" name="fullName" id="fullName" placeholder="ID o Usuario *"/>
                                </FormGroup>
                                <FormGroup>
                                    <Input size="lg" type="password" name="password" id="password" placeholder="Contraseña *"/>
                                </FormGroup>
                                <div className="p-3">
                                    <Button size="lg" className="Button-Success my-2" block>Ingresar</Button>
                                </div>

                                <div className="login-redirect">
                                    <a className="Link-Login" href="/SinginView">Olvidé la Contraseña</a>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
        ;
}

export default SinginView;
