/* eslint-disable no-unused-vars */
import React from 'react';
import NavView from './NavView';
import { Table } from 'reactstrap';
import '../assets/Styles/Review/Rules__BEM copy.css'
import {Container, Row, Col } from 'reactstrap';
const Review = () => {
    return (
        <div  className='Review-container background_view' >
            <NavView />
        <section >
        <Container >
            <Row className="justify-content-center mt-5">
                <Col xs="auto">
                <h2>Training Summary</h2>
                </Col>
            </Row>
            <Row className="justify-content-cente mt-4">
                <Col>
                <Table bordered >
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Ex</th>
                        <th>Reps</th>
                        <th>Vol</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>12/05/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    </tbody>
                </Table>  
                </Col>
            </Row>
            </Container>
        </section>
    </div>
    );
}

export default Review;
