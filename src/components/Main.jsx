import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { FcAssistant } from "react-icons/fc";
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';

const Main = () => {

  return (
    <Container>
       메인 페이지 입니다. 
    </Container>
  )
}

export default Main