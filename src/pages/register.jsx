import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { registerschema } from './registerschema'

function Register() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    })

    function onsubmit1(data) {
        console.log(data)
        alert("Register success")

        navigate("/login", {
            state: data
        })
    }

    return (
        <div className="register">
            <h1>Register Page</h1>

            <form onSubmit={handleSubmit(onsubmit1)}>

                <input type="text" placeholder="Enter name" {...register("name")} />
                <p>{errors.name?.message}</p>

                <input type="email" placeholder="Enter email" {...register("email")} />
                <p>{errors.email?.message}</p>

                <input type="password" placeholder="Enter password" {...register("password")} />
                <p>{errors.password?.message}</p>

                <input type="number" placeholder="Enter age" {...register("age")} />
                <p>{errors.age?.message}</p>

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Register