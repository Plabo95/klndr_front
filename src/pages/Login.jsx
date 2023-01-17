import { Button, Flex, Heading, Text, useToast} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
//images
import bg from '../img/login-register/login_bg.jpg'
//Components
import NavLoginRegister from '../components/loginRegister/NavLoginRegister';
//validation
import * as Yup from 'yup';
import {Formik} from "formik";
import TextField from '../components/forms/TextField'
//api
import { login } from '../api/authApi';
import { useMutation } from "@tanstack/react-query"
//auth
import { useSignIn } from "react-auth-kit"


export default function Login(){

    const navigate = useNavigate()
    const toast = useToast()
    const signIn = useSignIn()

    const {isLoading, mutate} = useMutation(
        ["login"],
        login,
        {
        onSuccess: (data) => {
            toast({title: 'Login exitoso!',status:"success"})
            console.log(data)
            signIn({
                token: data.access,
                expiresIn: 3600,
                tokenType: "Bearer",
            })
            navigate('/')
        },
        onError : (error)=>{
            toast({title: error.message, description: error.response?.data.message ,status:"error"})
        }
        }
    );

    //vaaalidation for login
    const LoginSchema = Yup.object({
        password: Yup.string()
            .min(6, 'Demasiado corta')
            .required('Es obligatorio'),
        email: Yup.string().email('Formato de email inválido').required('Es obligatorio'),
        });  

    return(
        <Flex w='100%' height='100vh' direction='column' 
            bgImage={bg}
            bgPos='50% 100%'
            bgAttachment='fixed'
            bgRepeat='no-repeat'
            bgSize='100%'>

            <NavLoginRegister/>
            <Flex justify='center' align='center' w='100%'>
                   <Flex py='5%'  w={['80%','75%','400px','400px']} direction='column' align='center' gap='5'>
                    <Flex><Heading size='lg' >another</Heading><Heading size='lg' color={'blue'}>tool</Heading></Flex>
                        <Flex bg='white' w='100%' rounded='xl' direction='column' align='center'  gap='6' py='12%' boxShadow='lg'>
                            <Heading size='md'> ¡Hola de nuevo! </Heading>
                            <Formik
                            initialValues = {{
                                email: "",
                                password: "",
                                }
                            }
                            validationSchema={LoginSchema}
                            onSubmit={(values) => {
                                mutate(values);
                                }}
                            >
                            {formik => (
                            <Flex direction={'column'} onKeyDown={(e)=> {if(e.key === "Enter"){formik.handleSubmit()}}} as="form" w='80%' justify='space-around' align='center' gap='3'>
                            <TextField name="email" placeholder="Email"  />
                            <TextField type="password" name="password" placeholder="Contraseña" />
                            <Button mt='8' variant='primary-s' size='md'
                            onClick={formik.handleSubmit}  isLoading={isLoading}  >
                                Iniciar Sesión </Button> 
                            </Flex>
                                )}
                            </Formik>
                        </Flex>
                    
                        {/* 
                        <Flex bg='white' w='100%' rounded='xl' direction='column' align='center'  gap='6' py='12%' boxShadow='lg'>
                            <Heading size='md'> Ya existe una sesión iniciada </Heading>
                            <Button mt='8' variant='primary-out-s' size='md'>
                                    Cerrar Sesión </Button> 
                        </Flex>
                        */}
                    
                    <Flex w='100%' justify='space-between' >
                        <Text fontSize='xs' cursor="pointer"  onClick={() => navigate('/register')}>
                            Registrarse
                        </Text>
                        <Text fontSize='xs' cursor="pointer">
                            He olvidado mi contraseña
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )

}