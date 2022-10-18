import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./register.css"
import LeftNavbar from "./leftNavbar";

export default function RegisterForm() {




    return (

        <form id="signup_form" className="k-form" action="/signup" name="account_signup" method="post"
             >
            <LeftNavbar/>

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className={"register-text"}>
                <h2>Hesap Oluştur</h2>
                <p>Bir hesaba kaydolmak ücretsiz ve kolaydır. Başlamak için aşağıdaki formu doldurun. Devam etmek için JavaScript gereklidir.</p>
            </div>

            <div className={"register-wrap"}>
                <TextField
                    required
                    id="standard-required"
                    label="Kullanici adi"
                    defaultValue=""
                    variant="standard"
                />

                <TextField
                    id="standard-password-input"
                    label="Şifre"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-password-input"
                    label="Şifre Onaylama"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                />
                <TextField
                    id="standard-read-only-input"
                    label="E-posta"
                    defaultValue=""
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                />

                <div className="flex-condition">
                   <div className={"condition-text"}>Aşağıdaki "Kayıt Ol" düğmesini tıklayarak, TMDB kullanım şartlarını ve gizlilik politikasını okudum ve kabul ettiğimi onaylıyorum.</div>

                    <div className={"sign-buttons"}>
                         <input id="sign_up_button" type="submit" className="k-button k-primary" value="Üye Ol"/>
                        <div className="reset"><a href="/">İptal</a></div>
                    </div>
                </div>

            </div>
        </Box>

            </form>

    );
}

