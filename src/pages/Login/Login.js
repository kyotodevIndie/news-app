// import React from 'react'

// import { useNavigate  } from 'react-router-dom';

// import fire from '../../services/firebase'


// export default function Login() {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const navigate = useNavigate();

//     const makeLogin = () => {
//         fire.auth().signInWithEmailAndPassword(email, password).then(user => {
//           console.log(user)
//           navigate('/userpage');
//             }).catch((error) => {
//           var errorMessage = error.message;
//           console.log(errorMessage)
//         });
//       }
    
//     return (
//         <>
//             <Container>
//                 <Column.Group centered>
//                     <Column size={4}> 
//                         <Box>
//                             <Title style={{ textAlign: 'center'}}>Login</Title>
//                             <Field>
//                                 <Control>
//                                     <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
//                                 </Control>
//                             </Field>
//                             <Field>
//                                 <Control>
//                                     <Input type="password" placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/>
//                                 </Control>
//                             </Field>
//                             <Field>
//                                 <Control>
//                                     <Button color="primary" onClick={makeLogin}>Login</Button>
//                                 </Control>
//                             </Field>
//                         </Box>
//                     </Column>
//                 </Column.Group>
//             </Container>
//         </>
//     )
// }
