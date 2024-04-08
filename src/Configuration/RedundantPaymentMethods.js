<div className='details-section-sub-div'>
<h4 className='section-sub-header'>Step 2: Payment Details</h4>
<Form>
    <Form.Group className='form-control-no-text'>
        <Form.Text className='card-types-accepted-header'>Card types accepted:</Form.Text>
        <div className='accepted-cards-div'>
            <SiVisa className='accepted-card-style' size={ 25 } /> 
            <SiMastercard className='accepted-card-style' size={ 25 } /> 
            <FaCcAmex className='accepted-card-style' size={ 25 }/> 
            <FaCcDiscover className='accepted-card-style' size={ 25 }/> 
            <BsPaypal className='accepted-card-style' size={ 25 }/> 
        </div>
        <Form.Text>Your card issuer may charge a fee.</Form.Text>
    </Form.Group>

    <Form.Group className='mb-5'>
        <Form.Text>Select payment method to proceed with your booking*</Form.Text>
        <Form.Select aria-label='select payment method' 
            className='form-control text-control-focus-style specify-cursor'
            onChange={ UpdateCustomerSelectedPaymentMethod }
            value={ paymentMethod } >
            <option value='-- Select --'>-- Select --</option>
            <option value='VISA'>VISA</option>
            <option value='MASTERCARD'>MASTERCARD</option>
            <option value='PAYPAL'>PAYPAL</option>
            <option value='MOBILE MONEY'>MOBILE MONEY</option>
        </Form.Select>
    </Form.Group>

    <section>
    { visaPaymentSelected && 
        <div>
            <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Name on card *' onChange={ UpdateCustomerPaymentCardName }  />
                <Form.Text>Enter your name exactly as it appears on the card.</Form.Text>
            </Form.Group>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='email' placeholder='Booking email *' onChange={ UpdateCustomerPaymentBookingEmail } />
                <Form.Text>We’ll send your booking confirmation to this email address. Make sure it’s correct.</Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Control type='text' placeholder='Card number *'  className='form-control-no-text text-control-focus-style' onChange={  UpdateCustomerPaymentCardNumber } />
            </Form.Group>

            <Row className='form-control-no-text'>
                <Form.Text>Expiration Date *</Form.Text>
                <Col>
                    <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryMonth }
                        value={ cardExpiryMonth }
                        >
                        <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                        <option value='01 - January'>01 - January</option>
                        <option value='02 - February'>02 - February</option>
                        <option value='03 - March'>03 - March</option>
                        <option value='04 - April'>04 - April</option>
                        <option value='05 - May'>05 - May</option>
                        <option value='06 - June'>06 - June</option>
                        <option value='07 - July'>07 - July</option>
                        <option value='08 - August'>08 - August</option>
                        <option value='09 - September'>09 - September</option>
                        <option value='10 - October'>10 - October</option>
                        <option value='11 - November'>11 - November</option>
                        <option value='12 - December'>12 - December</option>
                    </Form.Select>
                </Col>

                <Col>
                <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryYear }
                        value={ cardExpiryYear }
                        >
                        <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029'>2029</option>
                        <option value='2030'>2030</option>
                        <option value='2031'>2031</option>
                        <option value='2032'>2032</option>
                        <option value='2033'>2033</option>
                        <option value='2034'>2034</option>
                        <option value='2035'>2035</option>
                        <option value='2036'>2036</option>
                        <option value='2037'>2037</option>
                        <option value='2038'>2038</option>
                        <option value='2039'>2039</option>
                        <option value='2040'>2040</option>
                    </Form.Select>
                </Col>
            </Row>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                <Form.Text>The 3 digits at the back of the card.</Form.Text>
            </Form.Group>

            <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>

        </div>
        }

        {/* <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
        <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p> */}
        
        </section>




    <section>
    { masterCardPaymentSelected && 
        <div>
            <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Name on card *' onChange={ UpdateCustomerPaymentCardName }  />
                <Form.Text>Enter your name exactly as it appears on the card.</Form.Text>
            </Form.Group>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='email' placeholder='Booking email *' onChange={ UpdateCustomerPaymentBookingEmail } />
                <Form.Text>We’ll send your booking confirmation to this email address. Make sure it’s correct.</Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Control type='text' placeholder='Card number *'  className='form-control-no-text text-control-focus-style' onChange={  UpdateCustomerPaymentCardNumber } />
            </Form.Group>

            <Row className='form-control-no-text'>
                <Form.Text>Expiration Date *</Form.Text>
                <Col>
                    <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryMonth }
                        value={ cardExpiryMonth }
                        >
                        <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                        <option value='01 - January'>01 - January</option>
                        <option value='02 - February'>02 - February</option>
                        <option value='03 - March'>03 - March</option>
                        <option value='04 - April'>04 - April</option>
                        <option value='05 - May'>05 - May</option>
                        <option value='06 - June'>06 - June</option>
                        <option value='07 - July'>07 - July</option>
                        <option value='08 - August'>08 - August</option>
                        <option value='09 - September'>09 - September</option>
                        <option value='10 - October'>10 - October</option>
                        <option value='11 - November'>11 - November</option>
                        <option value='12 - December'>12 - December</option>
                    </Form.Select>
                </Col>

                <Col>
                <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryYear }
                        value={ cardExpiryYear }
                        >
                        <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029'>2029</option>
                        <option value='2030'>2030</option>
                        <option value='2031'>2031</option>
                        <option value='2032'>2032</option>
                        <option value='2033'>2033</option>
                        <option value='2034'>2034</option>
                        <option value='2035'>2035</option>
                        <option value='2036'>2036</option>
                        <option value='2037'>2037</option>
                        <option value='2038'>2038</option>
                        <option value='2039'>2039</option>
                        <option value='2040'>2040</option>
                    </Form.Select>
                </Col>
            </Row>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                <Form.Text>The 3 digits at the back of the card.</Form.Text>
            </Form.Group>

            <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>

        </div>
        }
        {/* <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
        <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p> */}
        
    </section>



    { payPalPaymentSelected && 
        <section>
            <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Name on card *' onChange={ UpdateCustomerPaymentCardName }  />
                <Form.Text>Enter your name exactly as it appears on the card.</Form.Text>
            </Form.Group>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='email' placeholder='Booking email *' onChange={ UpdateCustomerPaymentBookingEmail } />
                <Form.Text>We’ll send your booking confirmation to this email address. Make sure it’s correct.</Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Control type='text' placeholder='Card number *'  className='form-control-no-text text-control-focus-style' onChange={  UpdateCustomerPaymentCardNumber } />
            </Form.Group>

            <Row className='form-control-no-text'>
                <Form.Text>Expiration Date *</Form.Text>
                <Col>
                    <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryMonth }
                        value={ cardExpiryMonth }
                        >
                        <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                        <option value='01 - January'>01 - January</option>
                        <option value='02 - February'>02 - February</option>
                        <option value='03 - March'>03 - March</option>
                        <option value='04 - April'>04 - April</option>
                        <option value='05 - May'>05 - May</option>
                        <option value='06 - June'>06 - June</option>
                        <option value='07 - July'>07 - July</option>
                        <option value='08 - August'>08 - August</option>
                        <option value='09 - September'>09 - September</option>
                        <option value='10 - October'>10 - October</option>
                        <option value='11 - November'>11 - November</option>
                        <option value='12 - December'>12 - December</option>
                    </Form.Select>
                </Col>

                <Col>
                <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryYear }
                        value={ cardExpiryYear }
                        >
                        <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029'>2029</option>
                        <option value='2030'>2030</option>
                        <option value='2031'>2031</option>
                        <option value='2032'>2032</option>
                        <option value='2033'>2033</option>
                        <option value='2034'>2034</option>
                        <option value='2035'>2035</option>
                        <option value='2036'>2036</option>
                        <option value='2037'>2037</option>
                        <option value='2038'>2038</option>
                        <option value='2039'>2039</option>
                        <option value='2040'>2040</option>
                    </Form.Select>
                </Col>
            </Row>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                <Form.Text>The 3 digits at the back of the card.</Form.Text>
            </Form.Group>

            <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>

            {/* <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
            <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p> */}
        </section>

    }



    { mobileMoneyPaymentSelected && 
        <section>
            <p className='section-sub-header'> Complete Payment With { paymentMethod } </p>
            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Name on card *' onChange={ UpdateCustomerPaymentCardName }  />
                <Form.Text>Enter your name exactly as it appears on the card.</Form.Text>
            </Form.Group>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='email' placeholder='Booking email *' onChange={ UpdateCustomerPaymentBookingEmail } />
                <Form.Text>We’ll send your booking confirmation to this email address. Make sure it’s correct.</Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Control type='text' placeholder='Card number *'  className='form-control-no-text text-control-focus-style' onChange={  UpdateCustomerPaymentCardNumber } />
            </Form.Group>

            <Row className='form-control-no-text'>
                <Form.Text>Expiration Date *</Form.Text>
                <Col>
                    <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryMonth }
                        value={ cardExpiryMonth }
                        >
                        <option value='-- Select --' className='card-expiry-month-text'>-- Expiry Month --</option>
                        <option value='01 - January'>01 - January</option>
                        <option value='02 - February'>02 - February</option>
                        <option value='03 - March'>03 - March</option>
                        <option value='04 - April'>04 - April</option>
                        <option value='05 - May'>05 - May</option>
                        <option value='06 - June'>06 - June</option>
                        <option value='07 - July'>07 - July</option>
                        <option value='08 - August'>08 - August</option>
                        <option value='09 - September'>09 - September</option>
                        <option value='10 - October'>10 - October</option>
                        <option value='11 - November'>11 - November</option>
                        <option value='12 - December'>12 - December</option>
                    </Form.Select>
                </Col>

                <Col>
                <Form.Select aria-label='card expiry month' 
                        className='form-control text-control-focus-style specify-cursor'
                        onChange={ UpdateCardExpiryYear }
                        value={ cardExpiryYear }
                        >
                        <option value='-- Select --' className='card-expiry-year-text'>-- Expiry Year --</option>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2026'>2026</option>
                        <option value='2027'>2027</option>
                        <option value='2028'>2028</option>
                        <option value='2029'>2029</option>
                        <option value='2030'>2030</option>
                        <option value='2031'>2031</option>
                        <option value='2032'>2032</option>
                        <option value='2033'>2033</option>
                        <option value='2034'>2034</option>
                        <option value='2035'>2035</option>
                        <option value='2036'>2036</option>
                        <option value='2037'>2037</option>
                        <option value='2038'>2038</option>
                        <option value='2039'>2039</option>
                        <option value='2040'>2040</option>
                    </Form.Select>
                </Col>
            </Row>

            <Form.Group className='form-control-no-text'>
                <Form.Control className='text-control-focus-style' type='text' placeholder='Security code *' onChange={ UpdateCustomerPaymentCardSecurityCode } />
                <Form.Text>The 3 digits at the back of the card.</Form.Text>
            </Form.Group>

            <p><Form.Text>Card information is fully encrypted and protected. <BsShieldCheck size={ 15 } /> </Form.Text></p>

            {/* <Button variant='custom' className='book-button' onClick={ HandleBookHotelAction }>Book</Button>
            <p><Form.Text className='booking-fields-error-message'>{ bookingFieldsErrorStatus === true ? bookingFieldsErrorMessage : null }</Form.Text></p> */}
        </section>

    }

</Form>
</div>
