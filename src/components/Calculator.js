import { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export default function Calculator() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
    }

    const handleAddNumber = (num) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }
    
    const handlePlus = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('+');
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }
    
    const handleMinus = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('-');
        } else {
            const sum = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }

    const handleTimes = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('x');
        } else {
            const sum = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }

    const handleDivision = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0');
            setOperation('/');
        } else {
            const sum = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }
    
    const handleEquals = () => {
        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch(operation) {
                case '+':
                    handlePlus();
                    break;
                case '-':
                    handleMinus()
                    break;
                case 'x':
                    handleTimes()
                    break;
                case '/':
                    handleDivision();
                    break;
                default:
                    break;
            }
        }
    }

  return (
    <Container>
        <Content>
            <Input value={currentNumber} />
            <Row>
                <Button label='x' onClick={handleTimes}/>
                <Button label='/' onClick={handleDivision} />
                <Button label='C' onClick={handleOnClear} />
                <Button label='.' onClick={() => [...currentNumber, handleAddNumber('.')]}/>
            </Row>
            <Row>
                <Button label='7' onClick={() => handleAddNumber('7')} />
                <Button label='8' onClick={() => handleAddNumber('8')} />
                <Button label='9' onClick={() => handleAddNumber('9')} />
                <Button label='-' onClick={handleMinus} />
            </Row>
            <Row>
                <Button label='4' onClick={() => handleAddNumber('4')} />
                <Button label='5' onClick={() => handleAddNumber('5')} />
                <Button label='6' onClick={() => handleAddNumber('6')} />
                <Button label='+' onClick={handlePlus} />
            </Row>
            <Row>
                <Button label='1' onClick={() => handleAddNumber('1')} />
                <Button label='2' onClick={() => handleAddNumber('2')} />
                <Button label='3' onClick={() => handleAddNumber('3')} />
                <Button label='=' onClick={handleEquals} />
            </Row>
        </Content>
    </Container>
  )
}
