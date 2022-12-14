import React from "react";
import { useForm } from "react-hook-form";
import "./hesap.css";


export default function Result({ login }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const onSubmit = async (data) => {
        await login(data.email, data.password);
        reset();
    };

    console.log(errors);




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <h1>Login</h1>
                <label htmlFor="email">email</label>
                <input
                    id="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", {
                        required: "required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}
                    type="email"
                    placeholder="example@mail.com"
                />
                {errors.email && <span role="alert">{errors.email.message}</span>}
                <label htmlFor="password">password</label>
                <input
                    id="password"
                    aria-invalid={errors.passward ? "true" : "false"}
                    {...register("password", {
                        required: "required",
                        minLength: {
                            value: 5,
                            message: "min length is 5"
                        }
                    })}
                    type="password"
                    placeholder="password"
                />
                {errors.password && <span role="alert">{errors.password.message}</span>}
            </section>

            <div className={"form-button"}>
            <button type="submit">SUBMIT</button>
             <a href={"/"}>CANCEL</a>
            </div>
        </form>
    );
}
