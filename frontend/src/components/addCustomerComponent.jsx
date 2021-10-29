import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export default function AddCustomerForm(){

    const [customerData, setCustomerData] = useState({firstName: "", surName: "", comment: "", telephoneNumber: ""});

    const onChangeCustomerData = (e) => {
        setCustomerData(prevState => {
            const prevStateCopy = {...prevState};
            prevStateCopy[e.target.id] = e.target.value;
            return prevStateCopy;
        })
    }

    const onChangeCustomerDataByTelephoneNumber = (number) => {
        setCustomerData(prevState => {
            const prevStateCopy = {...prevState};
            prevStateCopy.telephoneNumber = number;
            console.log(prevStateCopy);
            return prevStateCopy;
        })
    }

    const handleCustomerFormButton = (e) => {
        e.preventDefault();
        console.log(customerData);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customerData)
        };
        fetch('http://localhost:8080/api/v1/customer', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(reason => console.log(reason));
    }

    return (
        <Form>

            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Имя клиента</Form.Label>
                <Form.Control type="text" placeholder="Введите имя" value={customerData.firstName} onChange={onChangeCustomerData}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="surName">
                <Form.Label>Имя клиента</Form.Label>
                <Form.Control type="text" placeholder="Введите фамилию" value={customerData.surName} onChange={onChangeCustomerData}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="surName">
                <Form.Label>Номер телефона</Form.Label>
                <PhoneInput
                    id="telephoneNumber"
                    country={'ru'}
                    value={customerData.telephoneNumber}
                    onChange={onChangeCustomerDataByTelephoneNumber}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="comment">
                <Form.Label>Комментарий</Form.Label>
                <Form.Control as="textarea" rows={3} value={customerData.comment} onChange={onChangeCustomerData}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleCustomerFormButton}>
                Submit
            </Button>

        </Form>
    )
}